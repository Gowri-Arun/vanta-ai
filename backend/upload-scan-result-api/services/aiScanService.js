// services/aiScanService.js
async function scanImage(data) {
  // This is where the AI scan logic will go.
  // For now, return dummy data.
  return {
    flagged: false,
    reason: null,
    confidence: 0.95
  };
}

module.exports = { scanImage };
