const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3847;
const TASKS_FILE = path.join(__dirname, 'tasks.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Get all tasks
app.get('/api/tasks', (req, res) => {
  const data = JSON.parse(fs.readFileSync(TASKS_FILE, 'utf8'));
  res.json(data);
});

// Add a task
app.post('/api/tasks', (req, res) => {
  const data = JSON.parse(fs.readFileSync(TASKS_FILE, 'utf8'));
  const newTask = {
    id: `task-${String(data.tasks.length + 1).padStart(3, '0')}`,
    title: req.body.title,
    description: req.body.description || '',
    status: 'assigned',
    assignedBy: req.body.assignedBy || 'unknown',
    assignedAt: new Date().toISOString(),
    startedAt: null,
    completedAt: null,
    notes: []
  };
  data.tasks.push(newTask);
  fs.writeFileSync(TASKS_FILE, JSON.stringify(data, null, 2));
  res.json(newTask);
});

// Update a task
app.patch('/api/tasks/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(TASKS_FILE, 'utf8'));
  const taskIndex = data.tasks.findIndex(t => t.id === req.params.id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  const task = data.tasks[taskIndex];
  
  if (req.body.status) {
    task.status = req.body.status;
    if (req.body.status === 'in-progress' && !task.startedAt) {
      task.startedAt = new Date().toISOString();
    }
    if (req.body.status === 'completed' && !task.completedAt) {
      task.completedAt = new Date().toISOString();
    }
  }
  
  if (req.body.title) task.title = req.body.title;
  if (req.body.description) task.description = req.body.description;
  if (req.body.note) task.notes.push({ text: req.body.note, at: new Date().toISOString() });
  
  fs.writeFileSync(TASKS_FILE, JSON.stringify(data, null, 2));
  res.json(task);
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(TASKS_FILE, 'utf8'));
  const taskIndex = data.tasks.findIndex(t => t.id === req.params.id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  data.tasks.splice(taskIndex, 1);
  fs.writeFileSync(TASKS_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Task Tracker running at http://localhost:${PORT}`);
});
