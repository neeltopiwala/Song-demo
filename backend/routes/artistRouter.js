const express = require("express");
const router = express.Router();
const { artistRandom, songsByArtist } = require("../controller/artist");

// router.get('/album',albumRandomly)
router.get("/intitialArtist", artistRandom);
router.get("/:artistId/songs", songsByArtist)
module.exports = router;
