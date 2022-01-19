const Images = require('../models/imagesSchema');
// cloudinary config
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY
})
const fs = require('fs-extra');


const allImages = async (req, res) => {
  const images = await Images.find();
  res.json(images);
}

const addImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path)
  const image = await Images({
    imageUrl: result.secure_url,
    public_id: result.public_id,
  })
  const newImage = await image.save();
  res.json(newImage);
  fs.unlink(req.file.path)
}

const removeImage = async (req, res) => {
  const {id} = req.params;
  const image = await Images.findByIdAndDelete(id);
  await cloudinary.uploader.destroy(image.public_id);
  res.json({
    message: 'image removed successfully',
  })
}

module.exports = {
  addImage,  
  allImages,
  removeImage
}