let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
];

const utils = require('./utils');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World. Chety is awsome engineer. He is a rock star</h1>');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

app.post('/api/notes', (req, res) => {
  const body = req.body;

  const { important = false, content } = body;
  const copyContent = content ? content.trim() : '';
  if (!copyContent) {
    return res.status(400).json({
      error: 'Content can not be empty',
    });
  }
  const note = {
    id: utils.createUniqueId(notes),
    date: new Date().toISOString(),
    content: copyContent,
    important,
  };
  notes.push(note);
  res.json(note);
});

const port = 3001;
app.listen(port);
console.log(`Our humble app is running on ${port}`);
