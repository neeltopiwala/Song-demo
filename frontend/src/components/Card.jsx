import { Play } from "lucide-react";

export default function Card({
  id,
  type,
  thumbnail,
  name,
  singerName,
  onClick,
}) {
  let artistNames = singerName.map((i) => {
    return i.name;
  });

  return (
    <>
      <div
        onClick={onClick}
        className={`group w-40 cursor-pointer rounded-lg transition-colors m-0 py-3`}
      >
        <div className="relative">
          <img
            src={thumbnail}
            alt={name}
            className={`mb-3 bg-black aspect-square w-full ${type === "artist" ? "rounded-full" : "rounded-md"}  object-cover `}
          />

          <div
            class={`transition ${type === "artist" ? "rounded-full" : "rounded-md"}  duration-400 absolute invisible bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-10 group-hover:visible group-hover:opacity-60`}
          ></div>

          <div className="transition bg-black rounded-full invisible absolute top-[39%] left-[39%] p-2 duration-600 hover:p-4 hover:top-[34%] hover:left-[34%] group-hover:visible">
            <Play size={25} strokeWidth={1} className="fill-[#F0F0F0]" />
          </div>
        </div>

        <h3 className="text-center truncate text-sm font-semibold text-gray-900">
          {name}
        </h3>

        {type === "song" || type === "album" ? (
          <p className="text-center truncate text-sm text-gray-500">
            {artistNames.join(", ").length > 20
              ? artistNames.join(", ").slice(0, 20) + "..."
              : artistNames.join(", ").slice(0, 20)}
          </p>
        ) : null}
      </div>
    </>
  );
}
