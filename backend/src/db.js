import mysql from 'mysql2'

const pool = mysql.createPool({
  host: 'appworks-mysql-1.cwsergwzdswh.us-east-1.rds.amazonaws.com',
  user: 'admin',
  database: 'mailex',
  password: process.env.MYSQL_PWD,
  port: '3306'
});


// Attempt to catch disconnects 
pool.on('connection', function (connection) {
  console.log('DB Connection established');

  connection.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  connection.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err);
  });

});

const promisePool = pool.promise();

export default promisePool;