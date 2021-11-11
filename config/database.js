const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQLI_HOST,
  user: process.env.MYSQLI_USERNAME,
  password: process.env.MYSQLI_PASSWORD,
  database: process.env.MYSQLI_DATABASE,
  multipleStatements: true,
});

module.exports = pool;
