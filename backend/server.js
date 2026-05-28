const express = require("express");
const cors = require("cors");
const fs = require("fs");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Contact API

app.post("/api/contact", (req, res) => {

  try {

    const { name, email, message } = req.body;

    // Validation

    if (!name || !email || !message) {

      return res.status(400).json({
        message: "All fields are required"
      });

    }

    // Email Validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      return res.status(400).json({
        message: "Invalid email"
      });

    }


    // Create Object

    const newData = {

      name,
      email,
      message,
      submittedAt: new Date()

    };

    // Read Existing Data

    let existingData = [];

    if (fs.existsSync("data.json")) {

      existingData = JSON.parse(
        fs.readFileSync("data.json")
      );

    }

    // Add New Data

    existingData.push(newData);

    // Save Data

    fs.writeFileSync(
      "data.json",
      JSON.stringify(existingData, null, 2)
    );

    // Success Response

    res.status(200).json({
      success: true,
      message: "✅ Form Submitted Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});

// Admin Route

app.get("/api/messages", (req, res) => {

  if (!fs.existsSync("data.json")) {

    return res.json([]);

  }

  const messages = JSON.parse(
    fs.readFileSync("data.json")
  );

  res.json(messages);

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server Running On ${PORT}`);

});