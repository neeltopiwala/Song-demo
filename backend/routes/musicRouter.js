const express = require('express');
const router = express.Router();
const {searchSongs, getSongById, searchRandomly} = require("../controller/music")

router.get("/",searchRandomly)
router.get('/searchsong',searchSongs)                 
router.get("/:songId",getSongById)

module.exports = router;