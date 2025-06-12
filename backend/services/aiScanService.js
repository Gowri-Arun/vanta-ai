// services/aiScanService.js
const { spawn } = require('child_process');
const path = require('path');

async function scanImage(filePath) {
  const scriptPath = path.join(__dirname, 'uploadScanResultService/deepfake_model/run_scan.py');

  return new Promise((resolve, reject) => {
    const python = spawn('python', [scriptPath, filePath]);

    let data = '';
    let error = '';

    python.stdout.on('data', (chunk) => {
      data += chunk.toString();
    });

    python.stderr.on('data', (chunk) => {
      error += chunk.toString();
    });

    python.on('close', (code) => {
      if (code !== 0) {
        return reject(new Error(error || 'Python script failed'));
      }

      try {
        const result = JSON.parse(data);
        resolve(result);
      } catch (err) {
        reject(new Error('Failed to parse Python output'));
      }
    });
  });
}

module.exports = { scanImage };
