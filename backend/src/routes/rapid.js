import axios from "axios";

async function getDistance(country1_lat, country1_lng, country2_lat, country2_lng) {


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
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getDistance;
