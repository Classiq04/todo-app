const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./todos.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the local SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      task TEXT NOT NULL
    )`);
  }
});

module.exports = db;
