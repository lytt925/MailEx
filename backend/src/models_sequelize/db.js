import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  'mailex',
  'admin',
  process.env.MYSQL_PWD,
  {
    host: 'appworks-mysql-1.cwsergwzdswh.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
      max: 10, // Maximum number of connection in pool
      min: 0, // Minimum number of connection in pool
      acquire: 30000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
      idle: 10000 // The maximum time, in milliseconds, that a connection can be idle before being released
    }
  }
);

export default sequelize;


