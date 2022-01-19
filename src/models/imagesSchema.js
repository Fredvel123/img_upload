const { Schema, model } = require('mongoose');

const imagesSchema = new Schema({
  imageUrl: String,
  public_id: String,
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('images', imagesSchema);