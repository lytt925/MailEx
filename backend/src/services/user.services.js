import db from '../db.js'

async function createUser(userData) {
  const { username, email, provider, password, age, gender, profile_content, country_code } = userData;
  try {
    const [result] = await db.execute(
      `INSERT INTO users (username, email, password, provider, age, gender, profile_content, country_code)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [username, email, password, provider, age, gender, profile_content, country_code]
    );

    const { insertId } = result;
    return { id: insertId, provider, username, email };
  } catch (error) {
    console.error('Error creating new user:', error);
    throw error;
  }
}


const getUserByEmailorUsername = async (email, username) => {
  try {

    const queryParams = []
    let query = 'SELECT users.*, countries.country_name FROM users ';
    query += 'INNER JOIN countries ON users.country_code = countries.code ';

    // Add the appropriate condition based on email or username
    if (email) {
      query += 'WHERE email = ?';
      queryParams.push(email);
    } else if (username) {
      query += 'WHERE username = ?';
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


const getFriendsById = async (id) => {
  const query = `
  SELECT DISTINCT u.id, u.username, u.profile_content, u.country_code, c.country_name 
  FROM users u
  JOIN mails m ON u.id = m.sender_id OR u.id = m.receiver_id
  JOIN countries c ON u.country_code = c.code
  WHERE (m.sender_id = ? OR m.receiver_id = ?)
  AND u.id != ?`;

  try {
    const [rows] = await db.execute(
      query,
      [id, id, id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

// no private data
const getFriendProfileById = async (id) => {
  const query = `
  SELECT DISTINCT u.id, u.username, u.profile_content 
  FROM users u
  WHERE u.id = ?`;

  try {
    const [rows] = await db.execute(
      query,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

const getSimilarUsers = async (id) => {
  const query = `
  SELECT u.id, u.username, u.age, u.gender, u.profile_content, u.card_content, c.country_name
  FROM users u
  JOIN countries c ON u.country_code = c.code
  WHERE u.id != ?
  ORDER BY ABS(u.age - (SELECT age FROM users WHERE id = ?))
  LIMIT 12;
`;


  try {
    const [rows] = await db.execute(
      query,
      [id, id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

const getRandomUsers = async () => {
  const query = `
  SELECT u.id, u.username, u.age, u.gender, u.profile_content, u.card_content, c.country_name
  FROM users u
  JOIN countries c ON u.country_code = c.code
  ORDER BY RAND()
  LIMIT 12;
`;

  try {
    const [rows] = await db.execute(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

const getUserById = async (id) => {
  try {
    let query = 'SELECT users.*, countries.country_name FROM users INNER JOIN countries ON users.country_code = countries.code WHERE users.id = ?';
    const [rows] = await db.execute(query, [id]);

    if (rows.length === 0) {
      return null;
    }

    delete rows[0].password;
    return rows[0];
  } catch (error) {
    throw error;
  }
}


const updateUserProfileById = async (userId, userData) => {
  const { email, age, gender, profile_content, country_code, card_content } = userData;
  try {
    const [result] = await db.execute(
      `UPDATE users
       SET email = ?, age = ?, gender = ?, profile_content = ?, country_code = ?, card_content = ?
       WHERE id = ?`,
      [email, age, gender, profile_content, country_code, card_content, userId]
    );
    const { affectedRows } = result;
    return affectedRows
  } catch (error) {
    console.error('Error creating new user:', error);
    throw error;
  }
}


export default {
  createUser,
  getUserById,
  getUserByEmailorUsername,
  getFriendsById,
  getFriendProfileById,
  getSimilarUsers,
  getRandomUsers,
  updateUserProfileById
}