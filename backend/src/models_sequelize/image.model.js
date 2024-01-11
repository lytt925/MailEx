import { DataTypes } from "sequelize";
import db from "./db.js";

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mailId: {
    type: DataTypes.INTEGER,
    field: 'mail_id'
  },
  imageUrl: {
    type: DataTypes.STRING,
    field: 'image_url'
  }
}, {
  tableName: 'images'
});

export { Image }