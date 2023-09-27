const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'list_app',
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('Listening at http://localhost:5000');
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    res.render('index.ejs', { users: results });
  });
});

app.listen(5000);
