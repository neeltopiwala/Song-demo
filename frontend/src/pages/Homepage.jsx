import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections.jsx";
import { retriveIntialData } from "../utills/utils.js";

function Homepage() {
  let [initialList, setinitialList] = useState({});

  const promise1 = axios.get(`${import.meta.env.VITE_API_BASE_URL}/songs/`);
  const promise2 = axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/playlist/intitialplaylist`,
  );
  const promise3 = axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/artist/intitialArtist`,
  );
  const promise4 = axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/albums/intitialAlbum`,
  );

  useEffect(() => {
    Promise.allSettled([promise1, promise2, promise3, promise4]).then(
      function (response) {
        console.log(response);
        let finalStructuredObj = retriveIntialData(response);
        setinitialList({ ...finalStructuredObj });
      },
    );
  }, []);

  return (
    <>
      <div className="bg-[#F6F6F6] h-full">
        <Navbar />
        {/* <AutoComplete/> */}
        {Object.entries(initialList).map((i, index) => {
          return <Sections key={index} sectionsName={i[0]} info={i[1]} />;
        })}
      </div>
    </>
  );
}

export default Homepage;
