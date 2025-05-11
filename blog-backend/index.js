const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Madhan@4512', // update if needed
  database: 'blogdb'
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
