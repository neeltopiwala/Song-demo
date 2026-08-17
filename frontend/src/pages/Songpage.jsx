import axios from "axios";
import { Heart, EllipsisVertical  } from 'lucide-react';

import { useEffect, useState } from "react";

function Songpage() {
  let [songInformation, setSongInformation] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${import.meta.env.VITE_API_BASE_URL}/songs/searchsong?q=${searchTerm}`,
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       setSongInformation({ ...response.data.data[0] });
  //     });
  // }, []);

  // useEffect(() => {

  // }, [])



  return (
    <div>
      <img
        src={songInformation.image[2].url}
        alt={songInformation.name}
        className={`mb-3 bg-black aspect-square max-w-full h-auto rounded-md object-cover`}
      />
      <h2>{songInformation.name}</h2>
      <span>{songInformation.album.name}</span>
      <span>{songInformation.type} </span>
      <span>{songInformation.copyright}</span>

      <div>
      <button className="">Play</button>
      <button className="">
        <Heart size={16} strokeWidth={1.5} />
      </button>

      <button className="">
        <EllipsisVertical size={16} strokeWidth={1.75} />
      </button>
      </div>





    </div>
  );
}

export default Songpage;
