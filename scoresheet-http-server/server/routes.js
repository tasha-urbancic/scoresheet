const express = require('express');
const router = express.Router();
const data = require('./data.json');
const queries = require('../queries');

// API request for all templates data (homepage)
router.get('/', (req, res) => {
  res.status(200).json(data);
});

router.get('/templates', (req, res) => {
  res.status(200).json(data);
  // queries.getTemplates().then(templates => {
  //   res.status(200).json(templates);
  // });
});

// take create-template data and write it into the database as a new template
router.post('/templates/new', (req, res) => {
  // res.status(200).json({ data });
});

// create new game with a template id passed in and pass back a generated game_id
// reroutes you to get game for that game_id
router.post('/games/new', (req, res) => {});

// API request for new game start
router.get('/templates/:templateId/games/:id', (req, res) => {
  // const templateId = req.params.templateId;
  const templateId = 1;
  queries.getTemplateRelationshipsOperations(templateId).then(template => {
    res.status(200).json(template);
  });
});

//save fields to database associated with game_id
router.post('/templates/:templateId/games/:id', (req, res) => {});

module.exports = router;
