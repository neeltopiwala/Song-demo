import Searchbar from "./Searchbar";
import { useState } from "react";

import { useNavigate } from "react-router";

function Navbar() {
    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/songlist/${musicName}`);
    }
  };

  const handleClick = (e) => {
    console.log("hello world")
  };
    let navigate = useNavigate();
    let [musicName, setMusicName] = useState("");
  return (
    <nav className="border-b border-[#e6e1e1] w-full flex place-content-between items-center px-4 py-3 ">
        
      <img className="w-35" src="../../public/logo.png"></img>

      <Searchbar
          onChange={(e) => {
            setMusicName(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          onClick = {handleClick}
          value={musicName}
        />
      <div >
        
        <a className="mr-7 font-semibold text-lg" href="/js/">Log In</a>
        <a className="font-semibold text-lg" href="/python/">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
