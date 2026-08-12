export default function Card({
  thumbnail,
  songName,
  singerName,
  onClick,
}) {
  // const singerNames = singerName?.reduce((acc, singer) => {
  //   acc += singer.name + ", ";
  //   return acc;
  // },"") || "";

  return (
    <div
      onClick={onClick}
      className="w-40 cursor-pointer rounded-lg transition-colors hover:bg-gray-100"
    >
      <img
        src={thumbnail}
        alt={songName}
        className="mb-3 aspect-square w-full rounded-md object-cover"
      />

      <h3 className="truncate text-sm font-semibold text-gray-900">
        {songName}
      </h3>

      <p className="truncate text-sm text-gray-500">
        {singerName}
      </p>
    </div>
  );
}
