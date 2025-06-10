// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const scanRoutes = require('./routes/scan');

app.use(express.json());
app.use('/api/upload-scan-result', scanRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
