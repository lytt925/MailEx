import db from '../db.js'

async function createUser(userData) {
  const { username, email, provider, password } = userData;
  try {
    const [result] = await db.execute(
      'INSERT INTO users (username, email, password, provider) VALUES (?, ?, ?, ?)',
      [username, email, password, provider]
    );

    const { insertId } = result;
    return { id: insertId, provider, username, email };
  } catch (error) {
    console.error('Error creating new user:', error);
    throw error;
  }
}


const getUserByEmailorUsername = async (email, username, attributes = null) => {
  try {
    let query;
    let queryParams = [];

    // Construct the SELECT part of the query based on provided attributes
    if (attributes && attributes.length > 0) {
      const fields = attributes.join(', ');
      query = `SELECT ${fields} FROM users WHERE `;
    } else {
      query = 'SELECT * FROM users WHERE ';
    }

    // Add the appropriate condition based on email or username
    if (email) {
      query += 'email = ?';
      queryParams.push(email);
    } else if (username) {
      query += 'username = ?';
      queryParams.push(username);
    }

    const [rows] = await db.execute(query, queryParams);

    if (rows.length === 0) {
      return null;
    }

    return rows[0];
  } catch (error) {
    throw error;
  }
};

export default {
  createUser,
  getUserByEmailorUsername,
}