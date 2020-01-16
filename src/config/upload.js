const multer = require('multer');
const path = require('path');
const slug = require('slug');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = slug(path.basename(file.originalname, ext), {lower: true})

            cb(null, `${name}-${Date.now()}${ext}`);
        }
    }),
}