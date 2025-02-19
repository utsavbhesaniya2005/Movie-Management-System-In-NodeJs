const multer = require('multer');

const storage = multer.diskStorage({
    
    destination : (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename : (req, file, cb) => {

        const fileName = Date.now() + '_' + Math.round(Math.random() * 1E9) + file.originalname;
        cb(null, fileName);
    }
});

const upload = multer({ storage });

module.exports = upload;