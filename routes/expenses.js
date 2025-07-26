const express = require('express');
const router = express.Router();

const pool = require('../dbConnect');


// ✅ Custom route: getAll
router.get('/getAll', async (req, res) => {
  const result = await pool.query('SELECT * FROM users ORDER BY id DESC');
  res.json(result.rows);
});

 
module.exports = router;