const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(cors())

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'kozutak',
    port: 3307
});




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/regiok", (req, res) => {
  const sql = "SELECT * FROM `regiok`";
  db.query(sql, (err, result) => {
      if (err) return res.json(err);
      return res.json(result)
  })
});

app.get("/kozutakhossz", (req, res) => {
  const sql = "SELECT kozutak_hossza.hossz FROM `kozutak_hossza` WHERE hossz > 1500";
  db.query(sql, (err, result) => {
      if (err) return res.json(err);
      return res.json(result)
  })
});

app.get("/megyek", (req, res) => {
  const sql = "SELECT megyenev FROM `megyek` WHERE megyenev LIKE '%A%'";
  db.query(sql, (err, result) => {
      if (err) return res.json(err);
      return res.json(result)
  })
});

app.get("/regioknev", (req, res) => {
  const sql = "SELECT regionev FROM `regiok` OrDER BY regionev DESC";
  db.query(sql, (err, result) => {
      if (err) return res.json(err);
      return res.json(result)
  })
});

app.delete("/torles/:id", (req, res) => {
    const sql = "DELETE FROM `regiok` WHERE Rid = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});