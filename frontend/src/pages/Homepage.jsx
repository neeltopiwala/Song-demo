import { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import MusicCard from "../components/MusicCard";

function Homepage() {
  let [musicName, setMusicName] = useState("");
  let [songsList, setSongList] = useState([]);

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(`http://localhost:4000/api/songs/searchsong?q=${musicName}`)
        .then((response) => {
          setSongList([...response.data.data.results]);
        });
    }, 1000);

    return () => clearTimeout(getData);
  }, [musicName]);

  return (
    <>
      <Searchbar
        onChange={(e) => {
          setMusicName(e.target.value);
        }}
        value={musicName}
      />

      <div>
        {songsList.map((song) => {
          return (
            <MusicCard
              key={song?.id}
              thumbnail={song?.image[2]?.url}
              songName={song?.name}
              singerName={song?.artists?.all || []}
            />
          );
        })}
      </div>
    </>
  );
}

export default Homepage;
