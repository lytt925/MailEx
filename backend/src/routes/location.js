
import { Router } from 'express';
import db from '../db.js';
import getDistance from './rapid.js'

const router = Router();

router.get('/', async (req, res) => {
  const country1 = req.query.country1 || 'TW'; // Default to Taiwan's code
  const country2 = req.query.country2 || 'JP'; // Default to Japan's code

  try {
    const [rows] = await db.execute(
      `SELECT c1.code AS country1_code, c1.lat AS country1_lat, c1.lng AS country1_lng, 
              c2.code AS country2_code, c2.lat AS country2_lat, c2.lng AS country2_lng
       FROM countries c1, countries c2
       WHERE c1.code = ? AND c2.code = ?`,
      [country1, country2]
    );

    if (rows.length > 0) {
      // Send the first row in the response
      res.status(200).send(rows[0]);
    } else {
      // Handle no results
      res.status(404).send('No results found');
    }
  } catch (error) {
    // Handle errors
    res.status(500).send('Server error');
  }
});


router.get('/test', async (req, res) => {
  const country1 = req.query.country1 || 'TW'; // Default to Taiwan's code
  const country2 = req.query.country2 || 'JP'; // Default to Japan's code

  try {
    const [rows] = await db.execute(
      `SELECT c1.code AS country1_code, c1.lat AS country1_lat, c1.lng AS country1_lng, 
              c2.code AS country2_code, c2.lat AS country2_lat, c2.lng AS country2_lng
       FROM countries c1, countries c2
       WHERE c1.code = ? AND c2.code = ?`,
      [country1, country2]
    );

    const data = rows[0];
    const distance = await getDistance(data.country1_lat, data.country1_lng, data.country2_lat, data.country2_lng);
    return res.status(200).send(distance);
  } catch (error) {
    // Handle errors
    res.status(500).send('Server error');
  }
});


export default router;