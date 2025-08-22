import express, { Request, Response, NextFunction } from 'express';
import supabase from './supabaseConnection';
import serverless from 'serverless-http';

const app = express();
app.use(express.json()); 
// import bodyParser from 'body-parser';
// export const app = express();
// app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

interface Users {
  id?: string;
  email: string;
  password?: string;
}

interface Book {
  id?: string;
  title: string;
  author: string;
  pages: number;
  year: number;
  photos: string
}

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Missing or invalid authorization header' });
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: authData, error } = await supabase.auth.getUser(token);

    if (error || !authData.user) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    (req as any).user = authData.user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

app.post('/register', async (req: Request<{}, {}, Users>, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'email and password are required' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { email } },
    });

    if (authError) {
      if (authError.message.includes('User already registered')) {
        return res.status(409).json({ error: 'Email already exists' });
      }
      throw authError;
    }

    if (!authData.user) {
      return res.status(500).json({ error: 'Failed to create user' });
    }

    res.status(201).json({ value: authData });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req: Request<{}, {}, { email: string; password: string }>, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      if (authError.message.includes('Invalid login credentials')) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
      throw authError;
    }

    if (!authData.session || !authData.user) {
      return res.status(500).json({ error: 'Failed to create session' });
    }

    res.json({
      value: {
        authData,
        token: authData.session.access_token,
        expires_at: authData.session.expires_at,
      },
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/books', async (_req: Request, res: Response) => {
  try {
    const { data: books, error } = await supabase.from('books').select('*');
    if (error) throw error;
    res.json({ value: books, message: books.length === 0 ? 'No books found' : undefined });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/books/:id', authMiddleware, async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const { data: book, error } = await supabase.from('books').select('*').eq('id', id).single();
    if (error && error.code === 'PGRST116') {
      return res.status(404).json({ error: 'Book not found' });
    }
    if (error) throw error;
    res.json({ value: book || null });
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/books', authMiddleware, async (req: Request<{}, {}, Book>, res: Response) => {
  try {
    const { title, author, pages, year, photos } = req.body;
    if (!title || !author || !pages || !year || !photos) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (pages < 1 || year < 0) {
      return res.status(400).json({ error: 'Invalid pages or year' });
    }
    const { data: createdBook, error } = await supabase
      .from('books')
      .insert([{ title, author, pages, year, photos }])
      .select()
      .single();
    if (error) throw error;
    res.json({ value: createdBook });
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/books/:id', authMiddleware, async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const { data: deletedBook, error } = await supabase
      .from('books')
      .delete()
      .eq('id', id)
      .select();
    if (error) throw error;
    if (!deletedBook || deletedBook.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ value: deletedBook[0] });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/books/:id', authMiddleware, async (req: Request<{ id: string }, {}, Partial<Book>>, res: Response) => {
  try {
    const { id } = req.params;
    const { title, author, pages, year, photos } = req.body;
    const updateData: Partial<Book> = {};

    if (title !== undefined) updateData.title = title;
    if (author !== undefined) updateData.author = author;
    if (photos !== undefined) updateData.photos = photos

    if (pages !== undefined) {
      if (pages < 1) return res.status(400).json({ error: 'Invalid pages' });
      updateData.pages = pages;
    }
    if (year !== undefined) {
      if (year < 0) return res.status(400).json({ error: 'Invalid year' });
      updateData.year = year;
    }
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: 'No fields provided for update' });
    }
    const { data: updatedBook, error } = await supabase
      .from('books')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) throw error;

    if (!updatedBook || updatedBook.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ value: updatedBook[0] });
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT ? Number(process.env.PORT) : 3333;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server working on http://${host}:${port}`);
});