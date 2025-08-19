import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import supabase from './supabaseConnection';
import serverless from 'serverless-http'

const app = express();
app.use(bodyParser.json());

interface Users {
  id?: string;
  password?: string;
  name: string;
  email: string;
}

interface Book {
  title: string;
  author: string;
  pages: number;
  year: number;
}

async function getUsers() {
  try {
    const { data: users, error } = await supabase.from('users').select('*');
    if (error) throw error;
    return { value: users };
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

app.get('/users', async (_req: Request, res: Response) => {
  try {
    const result = await getUsers();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/users/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;

    const { data: user, error } = await supabase.from('users').select('*').eq('id', id).single();
    if (error) throw error;

    res.json({ value: user || null });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/books', async (_req: Request, res: Response) => {
  try {
    const { data: books, error } = await supabase.from('books').select('*');
    if (error) throw error;

    res.json({ value: books });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/users', async (req: Request<{}, {}, Users>, res: Response) => {
  try {
    const { name, email } = req.body;

    const { data: createdUser, error } = await supabase
      .from('users')
      .insert([{ name, email }])
      .select();

    if (error) throw error;

    res.json({ value: createdUser ? createdUser[0] : null });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/users/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;

    const { data: deletedUser, error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)
      .select();

    if (error) throw error;

    res.json({ value: deletedUser ? deletedUser[0] : null });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/users/:id', async (req: Request<{ id: string }, {}, Partial<Users>>, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const { data: updatedUser, error } = await supabase
      .from('users')
      .update({ name, email })
      .eq('id', id)
      .select();

    if (error) throw error;

    res.json({ value: updatedUser ? updatedUser[0] : null });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT ? Number(process.env.PORT) : 3333;
const host = '0.0.0.0';

// app.listen(port, host, () => {
//   console.log(`Server working on http://${host}:${port}`);
// });

export const handler = serverless(app)
