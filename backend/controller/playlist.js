const asyncHandler = require("../utils/asyncHandler");
const { randomIndexGenerater } = require("../utils/random");
const { searchPlayListFromSaavn } = require("../service/playlistService");
const { SEARCH_TERMS } = require("../constants");

const playListRandom = asyncHandler(async (req, res) => {

  let index = randomIndexGenerater();
  const playList = await searchPlayListFromSaavn(SEARCH_TERMS[index]);
  res.json(playList.data);
});

module.exports = { playListRandom };
