// routes/scan.js
const express = require('express');
const router = express.Router();
const upload = require('../services/uploadConfig');
const aiScanService = require('../services/aiScanService'); // Only import once

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    console.log('File received:', req.file.path);

    const scanResult = await aiScanService.scanImage(req.file.path); // Call your service
    res.json({ success: true, result: scanResult }); // Send actual result

  } catch (err) {
    console.error('Scan error:', err);
    res.status(500).json({ success: false, message: 'Scan failed' });
  }
});

module.exports = router;
