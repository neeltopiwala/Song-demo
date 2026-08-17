const axios = require("axios");
const asyncHandler = require("../utils/asyncHandler");

const searchAlbumFromSaavn = asyncHandler(async (albumName, limit = 10) => {
  const { data } = await axios.request({
    method: "GET",
    url: `${process.env.SONG_API}/search/albums`,
    params: {
      query: albumName,
      limit: limit,
    },
  });
  return data;
});

const getAlbumById = asyncHandler(async (id) => {
  const { data } = await axios.request({
    method: "GET",
    url: `${process.env.SONG_API}/albums`,
    params: {
      id: id,
    },
  });
  return data;
});

const getSongById = asyncHandler(async (id,  ) => {

})

module.exports = { searchAlbumFromSaavn, getAlbumById };
