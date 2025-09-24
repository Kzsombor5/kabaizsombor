const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors())

const db = mysql.createConnection({
    HOST: '127.0.0.1',
    USER: 'root',
    PASSWORD: '',
    DATABASE: 'kozutak',
    PORT: 3307
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});