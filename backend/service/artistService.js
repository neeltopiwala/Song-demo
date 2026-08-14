const axios = require("axios");
const asyncHandler = require("../utils/asyncHandler");

const searchArtistFromSaavn = asyncHandler(async (artistName, limit = 10) => {
  const { data } = await axios.request({
    method: "GET",
    url: `${process.env.SONG_API}/search/artists`,
    params: {
      query: artistName,
      limit : limit
    },
  });
  return data;
});

module.exports = {searchArtistFromSaavn}