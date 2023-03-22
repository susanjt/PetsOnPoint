
require("dotenv").config();
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", (req, res) => {
    res.json({ message: "success!" });
    });

module.exports = router;