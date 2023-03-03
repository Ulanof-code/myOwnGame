const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const themesRouter = require('./routes/themesRouter');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/api/themes', themesRouter);

app.listen(PORT, () => {
  console.log('server start on Port', PORT);
});
