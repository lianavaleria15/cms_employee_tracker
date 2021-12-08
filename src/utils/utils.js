//import mysql
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password123!!",
  database: "company_db",
});

const sendQuery = (query) => {
  return new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = { sendQuery };
