const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); // Import the cors module
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});


// ... (Same as before)

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // Implement user creation and storage logic in MySQL database
  db.query('CREATE TABLE IF NOT EXISTS users(id int primary key,username varchar(100),password varchar(50));',(errors)=>{
    if(errors){
      console.log(errors);
    }else{
      console.log("Table is ready to use.");
    }
  })
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Signup successful!');
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('CREATE TABLE IF NOT EXISTS users(id int primary key,username varchar(100),password varchar(50));',(errors)=>{
    if(errors){
      console.log(errors);
    }else{
      console.log("Table is ready to use.");
    }
  })

  // Implement user authentication logic with MySQL database
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Error querying user:', err);
      res.status(500).send('Internal Server Error');
    } else if (results.length > 0) {
      res.send('Login successful!');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.post('/users', (req, res) => {
  let sql = `SELECT * FROM batches`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying user:', err);
      res.status(500).send('Internal Server Error');
    } else if (results.length > 0) {
      res.send(results);
      console.log(results);
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});