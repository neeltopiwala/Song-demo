const {
  searchSongsFromSaavn,
  getSongFromSaavn,
  globalSearch,
} = require("../service/saavnService");
const asyncHandler = require("../utils/asyncHandler");

const searchTerms = ["Bollywood", "Tollywood", "Trending", "Hollywood"];

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

const searchRandomly = asyncHandler(async (req, res) => {
  let index = Math.floor(Math.random() * 4);
  const loadingInfo = await globalSearch(searchTerms[index]);

  res.json(loadingInfo);
});

module.exports = { searchSongs, getSongById, searchRandomly };
