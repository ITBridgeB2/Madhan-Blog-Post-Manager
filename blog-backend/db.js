const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',     // or 127.0.0.1
  user: 'root',          // your MySQL username
  password: 'Madhan@4512',          // your MySQL password
  database: 'blogdb'     // your database name
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = db;
