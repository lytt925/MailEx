import axios from "axios";
// const axios = require('axios');
import api from "./index.js";

async function getDistance(country1, country2, apiKey) {

  const { data:
    { country1_code, country1_lat, country1_lng, country2_code, country2_lat, country2_lng } }
    = await api.get('/location', {
      params: {
        country1,
        country2
      }
    })

  const options = {
    method: 'GET',
    url: 'https://distance-calculator.p.rapidapi.com/distance/simple',
    params: {
      lat_1: country1_lat,
      long_1: country1_lng,
      lat_2: country2_lat,
      long_2: country2_lng,
      decimal_places: '2'
    },
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com'
    }
  };

  console.log("key", process.env.RAPID_API_KEY);
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getDistance;
