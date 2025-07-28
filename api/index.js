// api/index.js
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
require('dotenv').config();

const expensesRouter = require('../routes/expenses.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/expenses', expensesRouter);

// Export the serverless handler
module.exports.handler = serverless(app);
