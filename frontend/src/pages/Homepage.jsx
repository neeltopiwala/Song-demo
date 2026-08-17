import axios from "axios";
import { useState, useEffect } from "react";
import Sections from "../components/Sections.jsx";
import { retriveIntialData } from "../utills/utils.js";

function Homepage() {
  let [initialList, setinitialList] = useState({});

  
  useEffect(() => {
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
    Promise.allSettled([promise1, promise2, promise3, promise4]).then(
      function (response) {
        let finalStructuredObj = retriveIntialData(response);
        setinitialList({ ...finalStructuredObj });
      },
    );
  }, []);

  return (
    <>
      {/* <div className="bg-[#F6F6F6] h-full selection:bg-[#00B597] selection:text-white">
        <Navbar /> */}
      {/* grid grid-cols-[14%_85%] */}
      {/* <div className="mt-[64px]">
          <Slidebar /> */}

      {/* <AutoComplete/> */}
      {/* <div className="lg:ml-[210px] lg:relative"> */}

      {Object.entries(initialList).map((i, index) => {
        return <Sections key={index} sectionsName={i[0]} info={i[1]} />;
      })}
      
      {/* </div>
        </div>
      </div> */}
    </>
  );
}

export default Homepage;
