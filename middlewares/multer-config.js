const multer = require('multer');
const dotenv = require('dotenv').config();
const image_folder = process.env.IMAGE_FOLDER;

//Extensions de fichiers autorisées
const FILE_TYPE_MAP = {
    'image/png':'png',
    'image/jpg':'jpg',
    'image/jpeg':'jpeg'
}

const storage = multer.diskStorage({

  //Here we define the error when trying to load another file than an image
  destination: function (req, file, cb) {

    isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error('Image invalide');

    if(isValid){
      uploadError = null
    }
    cb(uploadError, `${image_folder}`)
  },
  filename: function (req, file, cb) {  

    const fileName = file.originalname.split(' ').join('-');
    cb(null, `${Date.now()}_${fileName}`  )
  }
})
const uploadOptions = multer({ storage: storage })

module.exports = uploadOptions;