import axios from "axios";
// const axios = require('axios');
import api from "./index.js";

async function getDistance(country1, country2) {

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
      'X-RapidAPI-Key': '61c768af92msh602c3a783b84d6ep1cac89jsn7db36d4dd7f2',
      'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getDistance;
