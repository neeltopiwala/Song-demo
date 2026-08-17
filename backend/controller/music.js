const {
  searchSongsFromSaavn,
  getSongFromSaavn,
  globalSearch,
  getSongSuggestion,
} = require("../service/saavnService");
const { randomIndexGenerater } = require("../utils/random");

const { SEARCH_TERMS } = require("../constants");
const asyncHandler = require("../utils/asyncHandler");

const searchSongs = asyncHandler(async (req, res) => {
  const { q, limit } = req.query;
  const songs = await searchSongsFromSaavn(q, limit);
  res.json(songs.data);
});

const getSongById = asyncHandler(async (req, res) => {
  const { songId } = req.params;
  const songInfomation = await getSongFromSaavn(songId);
  res.json(songInfomation.data);
});

const searchRandomly = asyncHandler(async (req, res) => {
  let index = randomIndexGenerater();
  const loadingInfo = await searchSongsFromSaavn(SEARCH_TERMS[index]);
  res.json(loadingInfo.data);
});

const songSuggestion = asyncHandler(async (req, res) => {
  const { songId } = req.params;
  const songRecommendation = await getSongSuggestion(songId);
  res.json(songRecommendation.data);
});

module.exports = { searchSongs, getSongById, searchRandomly, songSuggestion };
