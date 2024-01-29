// index.js
global.config = require("./config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/Usermodel");
const Sales = require("./models/salesModel");
const { algorithm, secretKey } = require("./config");
const verifyToken = require("./middleware");
const app = express();
const port = 3000;
const url =
  "mongodb+srv://mrfaheemuddin7:e8kJcHDJ5t3Vdeps@testprodb.4tv7i0g.mongodb.net/sample_supplies?retryWrites=true&w=majority";

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

// app.post("/insertSalesData", async (req, res) => {
//   try {
//     // Assuming you have a request body with the data to be inserted
//     const { storeLocation, amount, product } = req.body;

//     // Create a new Sales document
//     const newSale = new Sales({
//       storeLocation: "mnmnmnmn",
//       amount,
//       product,
//     });

//     // Save the document to the "sales" collection
//     const savedSale = await newSale.save();

//     res
//       .status(201)
//       .json({ savedSale, message: "Sale data inserted successfully" });
//   } catch (error) {
//     console.error("Error inserting sales data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
app.get("/getAllSalesData", verifyToken, async (req, res) => {
  try {
    const allSalesData = await Sales.find();
    res.status(200).json({ allSalesData });
  } catch (error) {
    console.error("Error getting sales data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/delete", verifyToken, async (req, res) => {
  await User.deleteMany({});
});
app.post("/", async (req, res) => {
  console.log(req, "reqqq");
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    res
      .status(201)
      .json({ savedUser, message: "User Registered successfully" });
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
          res.status(200).json({ token, message: "Login Successfully" });
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
