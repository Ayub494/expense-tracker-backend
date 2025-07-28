// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import route
const getUserRoute = require('./api/getUser');
app.use('/api/getUser', getUserRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
