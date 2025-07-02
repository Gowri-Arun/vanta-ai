const express = require('express'); 
const router = express.Router();

// Sample static FAQs
const legalFAQs = {
  "what is an fir": "An FIR (First Information Report) is a document prepared by the police when they receive information about a cognizable offense.",
  "how to file an fir": "You can file an FIR at your nearest police station. Provide a written statement or ask the officer to record your verbal complaint.",
};

// Normalize message
function normalize(text) {
  return text.toLowerCase().trim();
}

router.post('/legal-chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const normalized = normalize(message);

  try {
    // 1. Check for static FAQ match
    for (let question in legalFAQs) {
      if (normalized.includes(question)) {
        return res.json({ type: 'faq', response: legalFAQs[question] });
      }
    }

    // 2. Simulate FIR generator match
    if (normalized.includes('file') || normalized.includes('fir') || normalized.includes('report')) {
      return res.json({
        type: 'fir',
        response: {
          message: 'This sounds like an FIR. Please provide full details like name, incident, location etc.',
          fir_template: {
            name: '___',
            incident: '___',
            location: '___',
            date: '___'
          }
        }
      });
    }

    // 3. Default fallback mock sentiment response
    return res.json({
      type: 'emotion',
      response: {
        sentiment: 'neutral',
        suggestion: 'Please try to describe your issue more clearly so we can assist better.'
      }
    });

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
