const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("hey look it did a get");
});

router.get("game/:id", (req, res) => {});

router.get("createtemplate", (req, res) => {});
