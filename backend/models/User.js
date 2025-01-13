const pool = require('../config/db');

const createUser = async (fullName, email, password, role) => {
  const result = await pool.query(
    `INSERT INTO Users (full_name, email, password, role)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [fullName, email, password, role]
  );
  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
  return result.rows[0];
};

module.exports = { createUser, getUserByEmail };
