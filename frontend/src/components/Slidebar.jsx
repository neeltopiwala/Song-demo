import { Plus } from "lucide-react";

function Slidebar() {
  return (
    // fixed
    <div className="hidden overflow-auto pl-10 pr-3 py-10 lg:flex flex-col gap-[20px] h-screen fixed w-52 z-100 ">
      <div>
        <p className="text-sm mb-5 text-[#5b5c5f]">BROWSE</p>
        <ul className="font-medium ">
          <li className="pb-2 hover:font-bold">Top Charts </li>
          <li className="pb-2 hover:font-bold">Top Playlists</li>
          <li className="pb-2 hover:font-bold">Podcasts</li>
          <li className="pb-2 hover:font-bold">Top Artists</li>
          <li className="pb-2 hover:font-bold">Radio</li>
        </ul>
      </div>

      <div>
        <p className="text-sm mb-5 text-[#5b5c5f]">MY LIBRARY</p>
        <ul className="font-medium">
          <li className="pb-2 hover:font-bold">History</li>
          <li className="pb-2 hover:font-bold">Liked Songs</li>
          <li className="pb-2 hover:font-bold"> Albums</li>
          <li className="pb-2 hover:font-bold">Podcasts</li>
          <li className="pb-2 hover:font-bold">Artists</li>
        </ul>
      </div>

      <button className="border border-[#077C67] text-[#077C67] px-1 py-1.5 text-center rounded-4xl font-semibold text-md">
        <Plus size={25} color="#077C67" strokeWidth={1} className="inline" />
        New Playlist
      </button>
    </div>
  );
}

export default Slidebar;
