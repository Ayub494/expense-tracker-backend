const express = require('express');
const cors = require('cors');
require('dotenv').config();
 
const app = express();
app.use(cors());
app.use(express.json());
 
const expensesRouter = require('./routes/expenses.js');
 
app.use('/api/expenses', expensesRouter);
 
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Node.js server running on http://localhost:${PORT}`);
});