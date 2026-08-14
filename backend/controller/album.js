const asyncHandler = require("../utils/asyncHandler");
const {randomIndexGenerater} = require("../utils/random")

const {searchAlbumFromSaavn} = require("../service/albumService")
const {SEARCH_TERMS} = require("../constants")


const albumRandomly = asyncHandler(async (req, res) => {
    let index = randomIndexGenerater()
    const randomAlbum = await searchAlbumFromSaavn(SEARCH_TERMS[index])
    res.json(randomAlbum.data);
})

module.exports = { albumRandomly }