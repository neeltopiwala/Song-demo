const express = require('express');
const router = express.Router();
const {searchSongs, getSongById, searchRandomly, songSuggestion} = require("../controller/music")

router.get("/",searchRandomly)
router.get('/searchsong',searchSongs)                 
router.get("/:songId",getSongById)
router.get("/:songId/suggestions",songSuggestion)

module.exports = router;