const express = require('express');
const router = express.Router();
const data = require('./data.json');
const queries = require('../queries');

// API request for all templates data (homepage)
router.get('/', (req, res) => {
  res.status(200).json(data);
});

router.get('/templates', (req, res) => {
  // res.status(200).json(data);
  queries.getTemplates().then(templates => {
    res.status(200).json(templates);
  });
});

// take create-template data and write it into the database as a new template
router.post('/templates/new', (req, res) => {
  // res.status(200).json({ data });
});

// create new game with a template id passed in and pass back a generated game_id
// reroutes you to get game for that game_id
router.post('/games/new', (req, res) => {
  // const templateId = 1;
  console.log(req.body.templateID);
  const templateId = req.body.templateID;
  queries.createNewGameInstance(templateId).then(([game]) => {
    res.status(200).json(game);
  });
});

// API request for new game start
router.get('/games/:id', (req, res) => {
  // const templateId = req.params.templateId;
  const templateId = 1;
  // check that operations table isnt blank first
  queries.allTemplateOperations(templateId).then(operations => {
    if (operations.length !== 0) {
      queries.getFields(templateId).then(fields => {
        queries.getTemplateInfo(templateId).then(templateInfo => {
          queries.getTemplateRelationshipsPieces(templateId).then(pieces => {
            queries
              .getTemplateRelationshipsOperations(templateId)
              .then(operations => {
                res
                  .status(200)
                  .json({ fields, templateInfo, pieces, operations });
              });
          });
        });
      });
    } else {
      queries.getFields(templateId).then(fields => {
        queries.getTemplateInfo(templateId).then(templateInfo => {
          queries.getTemplateRelationshipsPieces(templateId).then(pieces => {
            res
              .status(200)
              .json({ fields, templateInfo, pieces, operations: [] });
          });
        });
      });
    }
  });
});

//save fields to database associated with game_id
router.post('/games/:id', (req, res) => {});

module.exports = router;
