const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const md5 = require("md5");
const { v4: uuidv4 } = require("uuid");

const mysql = require("mysql");

const app = express();
const port = 3007;
// app.use(express.json({ limit: "10mb" }));
// app.use(express.static("public"));npm

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fund",
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/fundraisers", (req, res) => {
  const sql = `
  SELECT id, name, surname, story, goal, donatorName, donatorSum, donated, prc
  FROM fundraisers

  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.put("/fundraisers/:id", (req, res) => {
  const sql = `
        UPDATE fundraisers
        SET donatorName = ?, donatorSum = ?, donated = ?, prc =?
        WHERE id = ?
    `;
  params = [
    req.body.name,
    req.body.sum,
    req.body.donated,
    req.body.prc,
    req.params.id,
  ];

  con.query(sql, params, (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.delete("/fundraisers/:id", (req, res) => {
  const sql = `
        DELETE FROM fundraisers
        WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.listen(port, () => {
  console.log(`LN is on port number: ${port}`);
});
