const express = require('express');
const cors = require('cors');
const db = require('./database');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Get all todos
app.get('/api/todos', (req, res) => {
  db.all('SELECT * FROM todos', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Add a new todo
app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }

  db.run('INSERT INTO todos (task) VALUES (?)', [task], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID, task });
  });
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM todos WHERE id = ?', id, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: `Todo with id ${id} deleted successfully.` });
  });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
