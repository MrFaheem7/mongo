// index.js
global.config = require("./config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/Usermodel");
const { algorithm, secretKey } = require("./config");
const app = express();
const port = 3000;
const url =
  "mongodb+srv://mrfaheemuddin7:e8kJcHDJ5t3Vdeps@testprodb.4tv7i0g.mongodb.net/?retryWrites=true&w=majority";
const db = "TestProDb";
app.use(express.json());
app.use(cors());
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
  });
// const insert=async()=>{
//    await User.create({
//     name:'faheemuddin',
//     email:'lvlhaapkabro@gmail.com',
//     password:'12213113314'
//    })
//    return insert
// }
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid TOken" });
    }
    req.userId = decoded.userId;
    next();
  });
};
app.post("/delete", verifyToken, async (req, res) => {
  await User.deleteMany({});
});
app.post("/", async (req, res) => {
  console.log(req, "reqqq");
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/login", async (req, res) => {
  console.log(req, "reqqq");
  try {
    const { email, password } = req.body;
    User.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.password === password) {
          const token = jwt.sign({ userId: user._id }, secretKey, {
            algorithm: algorithm,
            expiresIn: "10m",
          });
          res.json({ token });
        } else {
          res.json("Password is Incorrect");
        }
      } else {
        res.json("No Record Foundd");
      }
    });
  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
