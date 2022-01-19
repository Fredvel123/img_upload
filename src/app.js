const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();

// middlewares
app.use(express());
app.use(cors());

// settings
app.set('port', process.env.PORT || 8000);

// routers
app.use('/api/images', require('./routers/imagesRouters'));


app.get('/', (req, res) => {
  res.send('the server is online')
})

module.exports = app;