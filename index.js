// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

// Import route
const userRoute = require('./routes/userRoute');
app.use('/api/ays', userRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
