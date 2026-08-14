const axios = require("axios");
const asyncHandler = require("../utils/asyncHandler");

const searchAlbumFromSaavn = asyncHandler(async (albumName, limit = 10) => {
  const { data } = await axios.request({
    method: "GET",
    url: `${process.env.SONG_API}/search/albums`,
    params: {
      query: albumName,
      limit : limit
    },
  });
  return data;
});


module.exports = {searchAlbumFromSaavn}