const axios = require("axios");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/errorHandler");

const searchSongsFromSaavn = async (q, limit = 24) => {
  try {
    const response = await axios.get(`${process.env.SONG_API}/search/songs`, {
      params: {
        query: q,
        limit: limit,
      },
    });

    return response.data;
  } catch (error) {
    const statusCode = error.response?.status || 503;

    const message =
      error.response?.data?.message || error.message || "Song service error";

    throw new AppError(message, statusCode);
  }
};

const getSongFromSaavn = async (id) => {
  try {
    const response = await axios.get(`${process.env.SONG_API}/songs/${id}`);
    return response;
  } catch (error) {
    const statusCode = error.response?.status || 503;
    const message =
      error.response?.data?.message || error.message || "Song not found error";

    throw new AppError(message, statusCode);
  }
};

const globalSearch = asyncHandler(async (searchTerm) => {
  const { data } = await axios.request({
    method: "GET",
    url: `${process.env.SONG_API}/search`,
    params: {
      query: searchTerm,
    },
  });
  return data;
});

const getSongSuggestion = asyncHandler(async (id) => {
  const { data } = await axios.request({
    method: "GET",
    url: `${process.env.SONG_API}/songs/${id}/suggestions`,
  });
  return data;
});

module.exports = {
  searchSongsFromSaavn,
  getSongFromSaavn,
  getSongSuggestion,
  globalSearch,
};
