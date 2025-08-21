import express, { Request, Response, NextFunction } from 'express';
import supabase from './supabaseConnection';
import serverless from 'serverless-http';

const app = express();
app.use(express.json()); // Replace bodyParser.json()

interface Users {
  id?: string;
  name: string;
  email: string;
  password?: string;
}

interface Book {
  id?: string;
  title: string;
  author: string;
  pages: number;
  year: number;
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
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
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
      options: { data: { name } },
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

    const { data: createdUser, error: dbError } = await supabase
      .from('users')
      .insert([{ id: authData.user.id, name, email }])
      .select()
      .single();

    if (dbError) throw dbError;

    res.status(201).json({ value: createdUser });
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

    const { data: user, error: dbError } = await supabase
      .from('users')
      .select('id, name, email')
      .eq('id', authData.user.id)
      .single();

    if (dbError) throw dbError;

    res.json({
      value: {
        user,
        token: authData.session.access_token,
        expires_at: authData.session.expires_at,
      },
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function getUsers() {
  try {
    const { data: users, error } = await supabase.from('users').select('*');
    if (error) throw error;
    return { value: users, message: users.length === 0 ? 'No users found' : undefined };
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

app.get('/users', authMiddleware, async (_req: Request, res: Response) => {
  try {
    const result = await getUsers();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/users/:id', authMiddleware, async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const { data: user, error } = await supabase.from('users').select('*').eq('id', id).single();
    if (error && error.code === 'PGRST116') {
      return res.status(404).json({ error: 'User not found' });
    }
    if (error) throw error;
    res.json({ value: user || null });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/users', authMiddleware, async (req: Request<{}, {}, Users>, res: Response) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    const { data: createdUser, error } = await supabase
      .from('users')
      .insert([{ name, email }])
      .select()
      .single();
    if (error) throw error;
    res.json({ value: createdUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/users/:id', authMiddleware, async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const { data: deletedUser, error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)
      .select();
    if (error) throw error;
    if (!deletedUser || deletedUser.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ value: deletedUser[0] });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/users/:id', authMiddleware, async (req: Request<{ id: string }, {}, Partial<Users>>, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updateData: Partial<Users> = {};
    if (name !== undefined) updateData.name = name;
    if (email !== undefined) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }
      updateData.email = email;
    }
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: 'No fields provided for update' });
    }
    const { data: updatedUser, error } = await supabase
      .from('users')
      .update(updateData)
      .eq('id', id)
      .select();
    if (error) throw error;
    if (!updatedUser || updatedUser.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ value: updatedUser[0] });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/books', authMiddleware, async (_req: Request, res: Response) => {
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
    const { title, author, pages, year } = req.body;
    if (!title || !author || !pages || !year) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (pages < 1 || year < 0) {
      return res.status(400).json({ error: 'Invalid pages or year' });
    }
    const { data: createdBook, error } = await supabase
      .from('books')
      .insert([{ title, author, pages, year }])
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
    const { title, author, pages, year } = req.body;
    const updateData: Partial<Book> = {};

    if (title !== undefined) updateData.title = title;
    if (author !== undefined) updateData.author = author;

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

export const handler = serverless(app);