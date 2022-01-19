const { Router } = require('express');
const router = Router();
const imageCtl = require('../controllers/imagesCtl');
// multer config
const path = require('path')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/images'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
}) 
const upload = multer({
  dest:path.join(__dirname,'public/images'),
  storage,
  limits: {fileSize: 1000000}
})


// routers
router.get('/all', imageCtl.allImages);
router.post('/add', upload.single('image') ,imageCtl.addImage);
router.get('/remove/:id', imageCtl.removeImage);

module.exports = router;
