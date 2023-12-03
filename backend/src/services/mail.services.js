import db from '../db.js'


const ITEM_PER_PAGE = 10;

const getMailById = async (userId, pageNumber) => {
  const offset = pageNumber * ITEM_PER_PAGE; // Calculate the offset

  const query = `
    SELECT * FROM mails 
    WHERE sender_id = ? OR receiver_id = ? 
    ORDER BY created_at DESC 
    LIMIT ? OFFSET ?
  `;

  try {
    const [rows] = await db.execute(
      query,
      [userId, userId, ITEM_PER_PAGE, offset].map(String)
    );
    return rows;
  } catch (error) {
    console.log(error);
    return null
  }
};


const createMail = async (mail) => {

  const { sender_id, receiver_id, subject, content, status } = mail

  const query = `
    INSERT INTO mails 
    (sender_id, receiver_id, subject, content, status) 
    VALUES (?, ?, ?, ?, ?)
  `;

  try {
    const [result] = await db.execute(
      query,
      [sender_id, receiver_id, subject, content, status]
    );
    return result.insertId;
  } catch (error) {
    console.log(error);
    return null
  }
};

export default {
  getMailById,
  createMail
}