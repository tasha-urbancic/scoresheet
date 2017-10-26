const express = require('express');
const router = express.Router();
const data = require('./data.json');
const queries = require('../queries');

// API request for all templates data (homepage)
router.get('/', (req, res) => {
  // res.status(200).json(data);
});

router.get('/templates', (req, res) => {
  res.status(200).json(data);
});

// API request for Create New Template form data
router.get('/templates/new', (req, res) => {
  res.status(200).json({ data });
});

// API request for new game start
router.get('/templates/:templateId/games/:id', (req, res) => {
  // const templateId = req.params.templateId;
  const templateId = 1;
  // const id = req.params.id * 1;

  // queries.getFields(templateId).then(fields => {
  //   res.status(200).json(fields);
  // });

  queries.getTemplates().then(template => {
    res.status(200).json(template);
  });
});

module.exports = router;
