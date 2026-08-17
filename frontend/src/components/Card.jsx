import { Play, Heart } from "lucide-react";
import Menulist from "./Menulist";

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
        className={`group w-10/12 cursor-pointer rounded-lg transition-colors m-0 py-3`}
      >
        <div className="relative w-full">
          <img
            src={thumbnail}
            alt={name}
            className={`mb-3 bg-black aspect-square max-w-full h-auto ${type === "artist" ? "rounded-full" : "rounded-md"}  object-cover`}
          />

          <div
            class={`transition ${type === "artist" ? "rounded-full" : "rounded-md"} delay-50 duration-400 absolute invisible bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-10 group-hover:visible group-hover:opacity-60`}
          ></div>

          {type !== "artist" && (
            <Heart
              size={20}
              color="#fff"
              strokeWidth={2.25}
              className="invisible absolute top-[80%] left-[10%] -translate-y-1 group-hover:visible"
            />
          )}


          <div className="bg-black rounded-full invisible absolute top-[50%] left-[50%] -translate-x-4 -translate-y-4 p-2  hover:p-4 hover:top-[45%] hover:left-[45%]   group-hover:visible">
            <Play size={25} strokeWidth={1} className="fill-[#F0F0F0]" />
          </div>
          {type !== "artist" && <Menulist />}
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
