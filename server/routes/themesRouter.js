const express = require('express');
const { Theme } = require('../db/models');

const themesRouter = express.Router();

themesRouter.route('/').get(async (req, res) => {
  const themes = await Theme.findAll();

  res.json(themes.sort(() => Math.random() - Math.random()).slice(0, 5));
});

module.exports = themesRouter;
