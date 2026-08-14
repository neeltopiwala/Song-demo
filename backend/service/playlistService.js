const axios = require("axios");
const asyncHandler = require("../utils/asyncHandler");

const searchPlayListFromSaavn = asyncHandler(async (playListName, limit = 10) => {
  const { data } = await axios.request({
    method: "GET",
    url: `${process.env.SONG_API}/search/playlists`,
    params: {
      query: playListName,
      limit : limit
    },
  });
  return data;
});


module.exports = {searchPlayListFromSaavn}