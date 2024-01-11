import db from '../db.js'
import { ITEM_PER_PAGE } from '../constants.js'



const getMailById = async (userId, pageNumber) => {
  const offset = pageNumber * ITEM_PER_PAGE; // Calculate the offset

  const query = `
      SELECT 
          mails.*,
          sender.username AS sender_username,
          receiver.username AS receiver_username,
          sender.id AS sender_id,
          receiver.id AS receiver_id,
          sender.profile_content AS sender_profile_content,
          receiver.profile_content AS receiver_profile_content
      FROM 
          mails
      JOIN 
          users AS sender ON mails.sender_id = sender.id
      JOIN 
          users AS receiver ON mails.receiver_id = receiver.id
      WHERE 
          mails.sender_id = ? OR mails.receiver_id = ?
      ORDER BY 
          mails.created_at DESC 
      LIMIT ? OFFSET ?`;

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

  const { sender_id, receiver_id, subject, content, status, sent_at, arrived_at } = mail

  const query = `
    INSERT INTO mails 
    (sender_id, receiver_id, subject, content, status, sent_at, arrived_at) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  try {
    const [result] = await db.execute(
      query,
      [sender_id, receiver_id, subject, content, status, sent_at || null, arrived_at || null]
    );
    return result.insertId;
  } catch (error) {
    console.log(error);
    return null
  }
};

const editMail = async (mail) => {
  const {
    mailId,
    newSubject,
    newContent,
    newStatus,
    newArrivedAt,
    newSentAt
  } = mail;

  const query = `
    UPDATE mails
    SET subject = ?, content = ?, status = ?, arrived_at = ?, sent_at = ?
    WHERE id = ?
  `;

  try {
    const [result] = await db.execute(
      query,
      [newSubject, newContent, newStatus || "draft", newArrivedAt || null, newSentAt || null, mailId]
    );
    return result.affectedRows;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getMailByIdandFriendId = async (userId, friendId, pageNumber) => {
  const offset = pageNumber * ITEM_PER_PAGE; // Calculate the offset

  const query = `
      SELECT 
          mails.*
      FROM 
          mails
      JOIN 
          users AS sender ON mails.sender_id = sender.id
      JOIN 
          users AS receiver ON mails.receiver_id = receiver.id
      WHERE 
          (mails.sender_id = ? AND mails.receiver_id = ?) OR (mails.sender_id = ? AND mails.receiver_id = ?)
      ORDER BY 
          mails.created_at DESC 
      LIMIT ? OFFSET ?`;

  try {
    const [rows] = await db.execute(
      query,
      [userId, friendId, friendId, userId, ITEM_PER_PAGE, offset].map(String)
    );
    return rows;
  } catch (error) {
    console.log(error);
    return null
  }
};


export default {
  getMailById,
  createMail,
  editMail,
  getMailByIdandFriendId
}