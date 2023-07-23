const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());


app.get('/api/data', (req, res) => {
  fs.readFile('info.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json({ data: jsonData.data });
    } catch (error) {
      console.error('Error parsing data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
