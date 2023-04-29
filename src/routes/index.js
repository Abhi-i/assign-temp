const express = require('express')
const router = express.Router()

const multerMiddleware = require("../middlewares/multerMiddleware")

const upload = require("../controllers/upload")

router.post('/upload', multerMiddleware.single('file'), upload)
// router.all("*", (req, res)=> res.redirect("/upload.html"))

module.exports = router;