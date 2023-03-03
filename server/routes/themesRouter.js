const express = require('express');
const { Theme, Question } = require('../db/models');

const themesRouter = express.Router();

themesRouter.route('/').get(async (req, res) => {
  const themes = await Theme.findAll({
    include: [
      {
        model: Question,
        attributes: ['id', 'cost', 'description'],
      },
    ],
  });
  const result = themes.sort(() => Math.random() - Math.random()).slice(0, 5);

  res.json(result);
});

module.exports = themesRouter;
