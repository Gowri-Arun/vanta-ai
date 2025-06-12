require('dotenv').config();
const express = require('express');
const cors = require('cors'); // 👈 NEW
const app = express();
const scanRoutes = require('./routes/scan');

app.use(cors()); // 👈 NEW
app.use(express.json());
app.use('/api/scan', scanRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
