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
    origin: "http://localhost:3001",
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
  SELECT id, name, surname, story, goal, donatorName, donatorSum, donated, prc, isShow
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

app.post("/register", (req, res) => {
  const session = uuidv4();
  const sql = `
  INSERT INTO users (session, name, psw)
  VALUES (?, ?, ?)

  `;
  con.query(sql, [session, req.body.name, md5(req.body.psw)], (err, result) => {
    if (err) throw err;
    if (result.affectedRows) {
      res.cookie("usersSession", session);
      res.json({
        status: "ok",
        name: req.body.name,
      });
    } else {
      res.json({
        status: "error",
      });
    }
  });
});

app.get("/login", (req, res) => {
  const sql = `
        SELECT name
        FROM users
        WHERE session = ?
    `;
  con.query(sql, [req.cookies.usersSession || ""], (err, result) => {
    if (err) throw err;

    if (result.length) {
      res.json({
        status: "ok",
        name: result[0].name,
      });
    } else {
      res.json({
        status: "error",
      });
    }
  });
});

app.post("/login", (req, res) => {
  const sessionId = uuidv4();

  const sql = `
        UPDATE users
        SET session = ?
        WHERE name = ? AND psw = ?
    `;

  con.query(
    sql,
    [sessionId, req.body.name, md5(req.body.psw)],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows) {
        res.cookie("usersSession", sessionId);
        res.json({
          status: "ok",
          name: req.body.name,
        });
      } else {
        res.json({
          status: "error",
        });
      }
    }
  );
});

app.post("/story", (req, res) => {
  const sql = `
  INSERT INTO fundraisers (name, surname, story, goal)
  VALUES (?, ?, ?, ?)

  `;

  con.query(
    sql,
    [req.body.name, req.body.surname, req.body.story, req.body.goal],
    (err) => {
      if (err) throw err;
      res.json({});
    }
  );
});

app.post("/logout", (req, res) => {
  res.cookie("usersSession", "");
  res.json({
    status: "logout",
  });
});

app.listen(port, () => {
  console.log(`LN is on port number: ${port}`);
});
