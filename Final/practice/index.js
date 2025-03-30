// let api="www.themealdb.com/api/json/v1/1/search.php?f=a"
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
let slideNumber = 1;
const images = document.querySelectorAll('img');  // Correct tag selector
const length = images.length;

const nextSlide = () => {
    slider.style.transform =` translateX(-${slideNumber * 100}%)`;
    slideNumber++;
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 100}%)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 100}%)`;
    slideNumber = length;
};

right.addEventListener('click', () => {
    if (slideNumber < length) {
        nextSlide();
    } else {
        getFirstSlide();
    }
});

left.addEventListener('click', () => {
    if (slideNumber > 1) {  // Correct condition
        prevSlide();
    } else {
        getLastSlide();
    }
});

//password recovery

// Install dependencies: express, mongoose, nodemailer, bcryptjs, jsonwebtoken
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("./models/User"); // Assume a User model is defined

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Request password reset
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("User not found");
  
  const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
  const link = `http://localhost:3000/reset-password/${token}`;

  await transporter.sendMail({
    from: "your-email@gmail.com",
    to: user.email,
    subject: "Password Reset",
    text: `Click the link to reset your password: ${link}`,
  });

  res.send("Password reset email sent");
});

// Reset password
app.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;
  try {
    const decoded = jwt.verify(token, "secret");
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(decoded.id, { password: hashedPassword });
    res.send("Password updated successfully");
  } catch (err) {
    res.status(400).send("Invalid or expired token");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
