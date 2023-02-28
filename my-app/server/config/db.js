const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "178446",
  database: "login",
  port: 3306,
});

module.exports = db;
