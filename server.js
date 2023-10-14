const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', async (req, res) => {
  try {  
    const response = await axios.get('https://goweather.herokuapp.com/weather/haldwani');
    const apiData = response.data;
    res.json(apiData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
