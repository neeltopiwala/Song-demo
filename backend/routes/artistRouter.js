const express = require("express");
const router = express.Router();
const { artistRandom } = require("../controller/artist");

// router.get('/album',albumRandomly)
router.get("/intitialArtist", artistRandom);

module.exports = router;
