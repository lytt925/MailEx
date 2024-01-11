import { DataTypes } from 'sequelize';
import sequelize from './db.js';

const Notification = sequelize.define('Notification', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id'
  },
  type: DataTypes.STRING,
  content: DataTypes.TEXT,
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  }
}, {
  tableName: 'notifications'
});

export { Notification }