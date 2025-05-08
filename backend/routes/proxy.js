const router = require('express').Router();
const axios = require('axios');

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

router.post('/languages', async (req, res) => {
  try {
    const response = await axiosInstance.post(
      'https://extensions.aitopia.ai/languages/lang/get/lang/en',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': req.headers.authorization || '',
          'Accept': 'application/json',
          'Origin': 'https://extensions.aitopia.ai'
        },
        validateStatus: status => status < 500
      }
    );
    
    if (response.headers['access-control-allow-origin']) {
      res.header('Access-Control-Allow-Origin', response.headers['access-control-allow-origin']);
    }
    
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Language API Error:', error);
    res.status(500).json({ error: 'Failed to fetch language data' });
  }
});

router.post('/prompts', async (req, res) => {
  try {
    const response = await axiosInstance.post(
      'https://extensions.aitopia.ai/ai/prompts',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': req.headers.authorization || '',
          'Accept': 'application/json',
          'Origin': 'https://extensions.aitopia.ai'
        },
        validateStatus: status => status < 500
      }
    );
    
    if (response.headers['access-control-allow-origin']) {
      res.header('Access-Control-Allow-Origin', response.headers['access-control-allow-origin']);
    }
    
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Prompts API Error:', error);
    res.status(500).json({ error: 'Failed to fetch prompts' });
  }
});

module.exports = router;
