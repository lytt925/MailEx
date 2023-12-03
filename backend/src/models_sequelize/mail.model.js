
import { DataTypes } from "sequelize";
import db from "./db.js";

const Mail = db.define('Mail', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  senderId: {
    type: DataTypes.INTEGER,
    field: 'sender_id'
  },
  receiverId: {
    type: DataTypes.INTEGER,
    field: 'receiver_id'
  },
  subject: DataTypes.STRING(50),
  content: DataTypes.TEXT,
  status: {
    type: DataTypes.ENUM('arrived', 'sending', 'draft'),
    defaultValue: 'draft'
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
  },
  sentAt: {
    type: DataTypes.DATE,
    field: 'sent_at'
  },
  arrivedAt: {
    type: DataTypes.DATE,
    field: 'arrived_at'
  }
}, {
  tableName: 'mails',
  timestamps: false,
});


export { Mail }