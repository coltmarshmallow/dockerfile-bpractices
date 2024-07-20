const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is your todo application!');
});

app.listen(3000, () => {
  console.log('Todo app is running on port 3000');
});