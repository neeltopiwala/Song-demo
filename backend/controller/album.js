const asyncHandler = require("../utils/asyncHandler");
const {randomIndexGenerater} = require("../utils/random")

const {searchAlbumFromSaavn, getAlbumById} = require("../service/albumService")
const {SEARCH_TERMS} = require("../constants")


const albumRandomly = asyncHandler(async (req, res) => {
    let index = randomIndexGenerater()
    const randomAlbum = await searchAlbumFromSaavn(SEARCH_TERMS[index])
    res.json(randomAlbum.data);
})

const getAlbum = asyncHandler(async (req, res) => {
    const {albumId} = req.params
    const album = await getAlbumById(albumId)
    res.json(album)
})

module.exports = { albumRandomly, getAlbum }