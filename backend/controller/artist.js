const asyncHandler = require("../utils/asyncHandler");
const { randomIndexGenerater } = require("../utils/random");
const { searchArtistFromSaavn } = require("../service/artistService");
const { ARTIST_NAME } = require("../constants");

const artistRandom = asyncHandler(async (req, res) => {
  let index = randomIndexGenerater();
  const randomArtist = await searchArtistFromSaavn(ARTIST_NAME[index]);
  res.json(randomArtist.data);

});

module.exports = { artistRandom };
