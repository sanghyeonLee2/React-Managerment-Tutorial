const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
const db = require("./config/db.js");

app.get("/", (req, res) => {
  console.log("/root");
});

app.get("/users", (req, res) => {
  console.log("/hi");
  db.query("select * from user", (err, data) => {
    if (!err) {
      console.log(data);
      res.send(data);
      //응답을 클라이언트 쪽으로 보낸다
    } else {
      console.log(err);
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`);
});
