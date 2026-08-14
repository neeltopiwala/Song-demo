const express = require('express');
const router = express.Router();
const {albumRandomly} = require("../controller/album")


// router.get('/album',albumRandomly)                 
router.get('/intitialAlbum',albumRandomly)                 


module.exports = router;