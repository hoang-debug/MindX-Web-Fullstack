const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));
//ex1
app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(9000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server started");
});

//ex2
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/even", (req, res) => {
  const { from, to } = req.query;

  const begin = from ? Number(from) : 0;
  const end = to ? Number(to) : 10;

  let evenNumbers = [];

  for (let i = begin; i <= end; i += 2) {
    evenNumbers.push(i);
  }

  console.log(from, to);
  res.send({ from, to });
});

app.use("*", (req, res) => {
  res.send({ message: "404 Not Found" });
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username === "admin" && password === "123456") {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});
