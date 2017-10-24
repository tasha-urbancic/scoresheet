const express = require("express");
const router = express.Router();
const data = require("./data.json");

// API request for all templates data (homepage)
router.get('/', (req, res) => {
  res.status(200).json(data);
});

// API request for Create New Template form data
router.get('/templates/new', (req, res) => {
  res.status(200).json({ data });
});

// API request for new game start
router.get('/game/:id', (req, res) => {
  const id = req.params.id * 1;
  const template = data.templates.find(template => template.id === id);
  res.status(200).json({ template });
});
// router.get("game/:id", (req, res) => {});

// router.get("createtemplate", (req, res) => {});

module.exports = router;
