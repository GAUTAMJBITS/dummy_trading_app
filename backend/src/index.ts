import express from 'express';
import bodyParser from 'body-parser';
import { Client } from 'pg';

const app = express();
const port = 3000;

app.use(bodyParser.json());

const client = new Client({
  user: 'your_db_user',
  host: 'localhost',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,
});

client.connect();

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await client.query(
    'SELECT * FROM users WHERE email = $1 AND password = $2',
    [email, password]
  );
  if (result.rows.length > 0) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  await client.query(
    'INSERT INTO users (email, password) VALUES ($1, $2)',
    [email, password]
  );
  res.status(201).json({ message: 'User created' });
});

app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  // Simulate sending reset link
  res.status(200).json({ message: 'Reset link sent' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
