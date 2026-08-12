import { useState, useEffect } from "react";
import axios from "axios";
import MusicCard from "../components/MusicCard";
import { useParams } from "react-router-dom";

function Searchpage() {
  const { searchTerm } = useParams();
  let [songsList, setSongList] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/songs/searchsong?q=${searchTerm}`)
      .then((response) => {
        setSongList({ ...response.data.data });
      });
  }, [searchTerm]);
  
  return (
    <>
      <div className="bg-[#F6F6F6] p-7">
        <h1 className="text-5xl font-normal mb-2">
          Search results for{" "}
          <span className="font-semibold">
            {searchTerm.at(0).toUpperCase() + searchTerm.slice(1)}
          </span>
        </h1>
        <h6 className="text-sm">{songsList?.total} results</h6>
        <div className="mt-4 ">

               
          {songsList?.results?.map((song, index) => {
            return (
              <MusicCard
                key={String(song?.id)}
                count={index + 1}
                thumbnail={song?.image[0]?.url}
                songName={song?.name}
                artist={"heelo"}
                duration={song?.duration}
              />
            );
          })}

        </div>
      </div>
    </>
  );
}

export default Searchpage;
