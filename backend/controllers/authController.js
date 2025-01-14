const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, getUserByEmail } = require('../models/User');

app.post('/api/signup', async (req, res) => {
  const { full_name, email, password, role } = req.body;
  // Insert into database
  try {
    await db.query('INSERT INTO Users (full_name, email, password, role) VALUES ($1, $2, $3, $4)', [
      full_name,
      email,
      password, // Hash this in production!
      role,
    ]);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.query('SELECT * FROM Users WHERE email = $1 AND password = $2', [email, password]);
    if (user.rowCount > 0) {
      res.status(200).json({ message: 'Login successful', user: user.rows[0] });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

