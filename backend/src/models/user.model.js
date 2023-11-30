// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("./db");
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./db.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
  },
  country_code: {
    type: DataTypes.CHAR(2),
  },
  gender: {
    type: DataTypes.ENUM('male', 'female', 'others'),
  },
  profile_content: {
    type: DataTypes.TEXT
  },
  password: {
    type: DataTypes.STRING(80)
  },
  provider: {
    type: DataTypes.STRING(50)
  }
}, {
  // Other model options go here
  timestamps: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at', // if you also want a created_at column
  tableName: 'users' // explicitly stating the table name
});

export { User }
