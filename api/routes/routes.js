const express = require("express");
const router = express.Router();
const users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post("/login", async (req, res) => {
  const isUserThere = await users.findOne({ email: req.body.email });

  if (!isUserThere) {
    return res.json({ status: false, message: "User not found" });
  }

  const isPasswordMatch = bcrypt.compareSync(
    req.body.password,
    isUserThere.password
  );

  if (!isPasswordMatch) {
    return res.json({ status: false, message: "Incorrect password" });
  }

  const token = jwt.sign(
    { id: isUserThere._id, email: isUserThere.email },
    process.env.SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    status: true,
    message: "Logged in successfully",
    token: token,
  });
});


router.post("/createuser", async (req, res) => {
  const isUserThere = await users.findOne({ email: req.body.email });

  if (isUserThere) {
    return res.json({ status: false, message: "User already exists" });
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const userData = await users.create({
    name: req.body.name,
    password: hash,
    email: req.body.email,
  });

  const token = jwt.sign(
    { id: userData._id, email: userData.email },
    process.env.SECRET,
    { expiresIn: "7d" }
  );

  res.status(201).json({
    status: true,
    message: "User created successfully",
    token: token,
  });
});

module.exports = router;






