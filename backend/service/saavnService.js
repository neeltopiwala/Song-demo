const axios = require("axios");
const AppError = require("../utils/errorHandler");

const searchSongsFromSaavn = async (query) => {
  try {
    const response = await axios.get(
      `${process.env.SONG_API}/search/songs`,
      {
        params: {
          query,
        },
      }
    );

    return response;
  } catch (error) {
    const statusCode = error.response?.status || 503;

    const message =
      error.response?.data?.message ||
      error.message ||
      "Song service error";

    throw new AppError(message, statusCode);
  }
};

const getSongFromSaavn = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.SONG_API}/songs/${id}`
    );

    return response;
  } catch (error) {
    const statusCode = error.response?.status || 503;

    const message =
      error.response?.data?.message ||
      error.message ||
      "Song service error";

    throw new AppError(message, statusCode);
  }
};

module.exports = {
  searchSongsFromSaavn,
  getSongFromSaavn,
};