const express = require("express");
const router = express.Router();
const { albumRandomly, getAlbum } = require("../controller/album");

// router.get('/album',albumRandomly)
router.get("/intitialAlbum", albumRandomly);
router.get("/:albumId", getAlbum);

module.exports = router;
