const {
  searchSongsFromSaavn,
  getSongFromSaavn,
} = require("../service/saavnService");
const asyncHandler = require("../utils/asyncHandler");

const searchSongs = asyncHandler(async (req, res) => {

    const { q } = req.query;
    const songs = await searchSongsFromSaavn(q);
    res.json(songs.data);

});

const getSongById = asyncHandler(async (req, res) => {
    const { songId } = req.params;
    const songInfomation = await getSongFromSaavn(songId);
    res.json({
      success: true,
      data: songInfomation.data,
    });

});

module.exports = { searchSongs, getSongById };
