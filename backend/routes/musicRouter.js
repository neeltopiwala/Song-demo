const express = require('express');
const router = express.Router();
const {searchSongs, getSongById} = require("../controller/music")

router.get('/searchsong',searchSongs)                 
router.get("/:songId",getSongById)

module.exports = router;