const mongoose = require('mongoose');

const URI_DB = 'mongodb://0.0.0.0:27017/images_db';
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(URI_DB, config)
  .then(db => console.log('the data base is conected'))
  .catch(err => console.log(err))