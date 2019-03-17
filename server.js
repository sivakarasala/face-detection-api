const express = require("express");

const app = express();
app.use(express.json());

const database = {
  users: [
    {
      id: "123",
      name: "shiva",
      email: "shiva@shiva.com",
      password: "shiva",
      entries: 0,
      joined: new Date()
    },
    {
      id: "456",
      name: "shambho",
      email: "shambho@shiva.com",
      password: "shambho",
      entries: 0,
      joined: new Date()
    }
  ]
};
app.get("/", (req, res) => {
  res.json(database.users);
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("error loggin in");
  }
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  database.users.push({
    id: "789",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  });
  res.json(database.users[database.users.length - 1]);
});

app.listen(3000, () => {
  console.log("aum namah shivaya");
});
