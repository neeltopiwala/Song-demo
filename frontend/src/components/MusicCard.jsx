function MusicCard({ count, thumbnail, songName, artist, duration }) {
  console.log(artist)

  let artistNames = artist.map((i)=>{
    return i.name 
  })

  
  return (
    <div className="px-6 py-8 w-full h-10 flex flex-row justify-between items-center hover:bg-white">
      
      <div className="flex gap-5 justify-between items-center">
      <span>{count}</span>
      <img className="h-10" src={thumbnail} alt={songName}></img>
      <span>{songName}</span>
      </div>


      <span>{artistNames.join(", ").slice(0,20) + "..."}</span>

      <span>{duration}</span>
    </div>
  );
}

export default MusicCard;
