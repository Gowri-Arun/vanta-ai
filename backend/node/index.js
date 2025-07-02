const express = require('express');
const cors = require('cors');
const legalChatbotRoutes = require('./routes/legal_chatbot.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', legalChatbotRoutes);

app.get('/', (req, res) => {
  res.send('Node backend is running.');
});

app.listen(PORT, () => {
  console.log(`Node server running on http://localhost:${PORT}`);
});
