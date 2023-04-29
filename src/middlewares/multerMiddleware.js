const multer = require("multer")
const path = require("path")

// Set up multer middleware to handle file uploads
const middleware = multer({
    dest: path.resolve(__dirname + '../../../uploads/')
});

module.exports = middleware;