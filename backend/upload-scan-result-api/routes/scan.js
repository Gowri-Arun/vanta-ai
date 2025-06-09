// routes/scan.js
const express = require('express');
const router = express.Router();
const upload = require('../services/uploadConfig');
const aiScanService = require('../services/aiScanService');

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const scanResult = await aiScanService.scanImage(req.file.path); // You’ll pass file path to the AI later
    console.log('Received file:',req.file)
    res.json({ success: true, result: scanResult });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Scan failed' });
  }
});

module.exports = router;
