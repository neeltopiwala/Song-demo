function MusicCard({ count, thumbnail, songName, artist, duration }) {
  return (
    <div className="px-6 py-8 w-full h-10 flex flex-row justify-between items-center hover:bg-white">
      <div className="flex gap-5 justify-between items-center">
      <span>{count}</span>
      <img className="h-10" src={thumbnail} alt={songName}></img>
      <span>{songName}</span>
      </div>


      <span>{artist}</span>

      <span>{duration}</span>
    </div>
  );
}

export default MusicCard;
