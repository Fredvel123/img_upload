const mongoose = require('mongoose');

// const URI_DB = 'mongodb://0.0.0.0:27017/images_db';
const URI_DB = `mongodb+srv://${process.env.USER_ATLAS}:${process.env.PASSWD_ATLAS}@cluster0.iyu84.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(URI_DB, config)
  .then(db => console.log('the data base is conected'))
  .catch(err => console.log(err))