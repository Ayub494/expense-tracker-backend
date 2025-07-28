// api/getUser.js
const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Neon
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM user');
    console.log("Ayyub",result) // Replace `users` with your actual table name
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
