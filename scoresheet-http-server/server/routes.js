const express = require('express');
const router = express.Router();
const data = require('./data.json');

router.get('/', (req, res) => {
  // console.log('hey look it did a get');
  res.status(200).json({ message: 'Connected!' });
});

router.get('/templates/all', (req, res) => {
  res.status(200).json({ data });
});

router.get('/templates/:id', (req, res) => {
  const id = req.params.id * 1;
  const template = data.templates.find(template => template.id === id);
  res.status(200).json({ template });
});
// router.get("game/:id", (req, res) => {});

// router.get("createtemplate", (req, res) => {});

module.exports = router;
