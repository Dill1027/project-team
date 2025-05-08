const router = require('express').Router();
const axios = require('axios');

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Origin': 'http://localhost:5001'
  }
});

router.post('/languages', async (req, res) => {
  try {
    // Add CORS headers to our response
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    const response = await axiosInstance.post(
      'https://extensions.aitopia.ai/languages/lang/get/lang/en',
      {},
      {
        timeout: 5000,
        proxy: false
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Language API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch language data' });
  }
});

router.post('/prompts', async (req, res) => {
  try {
    // Add CORS headers to our response
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    const response = await axiosInstance.post(
      'https://extensions.aitopia.ai/ai/prompts',
      {},
      {
        timeout: 5000,
        proxy: false
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Prompts API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch prompts' });
  }
});

module.exports = router;
