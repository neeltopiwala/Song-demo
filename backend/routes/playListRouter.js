const express = require("express");
const router = express.Router();
const {playListRandom} = require("../controller/playlist")

router.get("/intitialplaylist", playListRandom);

module.exports = router;
