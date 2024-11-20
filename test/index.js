const express = require('express');
const axios = require('axios');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  axios.get('https://pantry-hub-server.onrender.com/api/products')
    .then(response => {
      console.log('API Response Data:', response.data); // Log response data
      res.send(`<h1>Products</h1><pre>${JSON.stringify(response.data, null, 2)}</pre>`);
    })
    .catch(error => {
      if (error.response) {
        console.error('Error response from API:', error.response.data);
        console.error('Error status:', error.response.status);
        res.status(500).send('API returned an error: ' + error.response.status);
      } else if (error.request) {
        console.error('No response from API:', error.request);
        res.status(500).send('No response received from the API.');
      } else {
        console.error('Error setting up the request:', error.message);
        res.status(500).send('Server Error: ' + error.message);
      }
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
