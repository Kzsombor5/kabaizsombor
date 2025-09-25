const express = require('express'); //express serverhez müködő modulok importálása
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

app.use(bodyParser.json()); //bodyparser middleware hozzáadása a json kezeléséhez
app.use(cors())

const db = mysql.createConnection({   //adatbázis kapcsolat létrehozása
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fogado',
    port: 3307
});

app.get('/', (req, res) => { //alapértelmezett útvonal
  res.send('Hello World!');
});


app.get("/hettorpe", (req, res) => { //hettorpe api útvonal Lekérdezi a szobák nevét és ágyainak számát a szobak táblából
  const sql = "SELECT szobak.sznev, szobak.agy FROM szobak";
  db.query(sql, (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
  })
});

app.get("/kihasznaltsag", (req, res) => { //kihasznaltsag api útvonal Lekérdezi minden szoba foglaltságát (vendég neve + vendégéjszakák száma)
  const sql = "SELECT szobak.sznev, foglalasok.vendeg, DATEDIFF(foglalasok.tav, foglalasok.erk) AS vendegejszakak FROM szobak INNER JOIN foglalasok ON szobak.szazon = foglalasok.fsorsz ORDER BY szobak.sznev";
  db.query(sql, (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
  })
});

app.get("/foglaltsag", (req, res) => { //foglaltsag api útvonal Lekérdezi a vendégek nevét és foglalásuk dátumait
  const sql = "SELECT vendegek.vnev, foglalasok.erk, foglalasok.tav FROM vendegek INNER JOIN foglalasok ON vendegek.vsorsz = foglalasok.fsorsz ORDER BY vendegek.vnev";
  db.query(sql, (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
  })
});



app.listen(port, () => { //szerver indítása
  console.log(`Example app listening at http://localhost:${port}`);
});