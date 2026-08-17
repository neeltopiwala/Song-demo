import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

function Sections({ sectionsName, info }) {
  const settings = {
    arrows: true,
    swipe: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    rows: sectionsName === "artist" || info.length < 7 ? 1 : 2,
    slidesToScroll: 7,

    className: "w-[100%] mt-2.5 hello",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          rows: sectionsName === "artist" || info.length < 7 ? 1 : 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesToScroll: 2,
          arrows: false,
          swipe: true,
        },
      },
    ],
    nextArrow: (
      <button>
        <ChevronRight size={30} color="#000" strokeWidth={1.5} />
      </button>
    ),
    prevArrow: (
      <button>
        <ChevronLeft size={30} color="#000" strokeWidth={1.5} />
      </button>
    ),
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center font-medium">
        <div className="w-full p-7">
          <h4 className="text-2xl ">
            {sectionsName.at(0).toUpperCase() + sectionsName.slice(1)}
          </h4>
          <Slider.default {...settings}>
            {info?.map((song, index) => {
              return (
                <Card
                  type={sectionsName}
                  key={String(song?.id) + index}
                  id={String(song?.id) + index}
                  thumbnail={song?.image[2]?.url}
                  name={song?.name}
                  singerName={song?.artists?.primary || []}
                />
              );
            })}
          </Slider.default>
        </div>
      </div>
    </>
  );
}

export default Sections;
