import { useState, useEffect } from "react";
import axios from "axios";
import { retriveIntialData } from "../utills/utils.js";
import Navbar from "../components/Navbar";
import Card from "../components/Card.jsx";
import AutoComplete from "../components/AutoComplete.jsx";

function Homepage() {
  let [initialList, setinitialList] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/songs/`).then((response) => {
      setinitialList(() => retriveIntialData(response?.data?.data || []));
    });
  }, []);

  return (
    <>
      <div className="bg-[#F6F6F6] h-dvh">
        <Navbar />

        <div className="flex flex-col p-10 justify-center items-start font-medium">
          <h4 className="text-2xl">Songs</h4>

          <div className="grid grid-cols-5 gap-x-6 gap-y-8 mt-5">
            {initialList.map((song, index) => {
              return (
                <Card
                  key={String(song?.id) + index}
                  thumbnail={song?.image[2]?.url}
                  songName={song?.title}
                  singerName={
                    song?.type === "playlist"
                      ? song.description
                      : song?.type === "song"
                        ? song.primaryArtists
                        : song.artist
                  }
                />
              );
            })}
          </div>
        </div>
      </div>

      <AutoComplete/>
    </>
  );
}

export default Homepage;
