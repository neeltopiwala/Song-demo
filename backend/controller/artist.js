const asyncHandler = require("../utils/asyncHandler");
const { randomIndexGenerater } = require("../utils/random");
const {
  searchArtistFromSaavn,
  getSongBasedOnArtistId,
} = require("../service/artistService");
const { ARTIST_NAME } = require("../constants");

const artistRandom = asyncHandler(async (req, res) => {
  let index = randomIndexGenerater();
  const randomArtist = await searchArtistFromSaavn(ARTIST_NAME[index]);
  res.json(randomArtist.data);
});

const songsByArtist = asyncHandler(async (req, res) => {
  let { artistId } = req.params;
  let { sortType, sortOrder } = req.query;
  
  const songs = await getSongBasedOnArtistId(artistId, sortType, sortOrder);
  res.json(songs.data);
});

module.exports = { artistRandom, songsByArtist };
