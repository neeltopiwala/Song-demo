import Searchbar from "./Searchbar";
import { useState } from "react";
import { useNavigate } from "react-router";

function Navbar() {
  let navigate = useNavigate();
  let [musicName, setMusicName] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/songlist/${musicName}`);
    }
  };

  const handleClick = () => {
    console.log("hello world");
  };

  return (
    <nav className="bg-[#F6F6F6] border-b border-[#e6e1e1] w-full flex place-content-between items-center px-3 py-2 fixed top-0 z-1000">
      <img className="w-35" src="../../public/logo.png"></img>
      <Searchbar
        onChange={(e) => {
          setMusicName(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        value={musicName}
      />
      <div>
        <a className="mr-7 font-semibold text-lg" href="/js/">
          Log In
        </a>
        <a className="font-semibold text-lg" href="/python/">
          Sign Up
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
