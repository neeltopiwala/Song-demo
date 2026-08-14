import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
function Sections({ sectionsName, info }) {
  const settings = {
    arrows: true,
    swipe: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    rows: 2,
    slidesToScroll: 7,
    className: "w-[100%] mt-2",
    nextArrow: (
      <button className="slick-prev">
        <ChevronRight size={30} color="#000" strokeWidth={1.5} />
      </button>
    ),
    prevArrow: (
      <button>
        <ChevronLeft size={30} color="#000" strokeWidth={1.5} />
      </button>
    ),
  };

  // let [page, setPage] = useState(1);

  // function previous() {
  //   setPage((p) => p - 1);
  // }
  // function next() {
  //   setPage((p) => p + 1);
  // }

  return (
    <>
      <div className="flex flex-col justify-center items-center font-medium">
        <div className="relative w-[100%] p-10 ">
          <h4 className="text-2xl ">
            {sectionsName.at(0).toUpperCase() + sectionsName.slice(1)}
          </h4>

          <Slider.default {...settings}>
            {/* <div className="relative grid grid-cols-7 gap-x-6 gap-y-8 mt-5"> */}
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
            {/* </div>  */}
          </Slider.default>

          {/* <button className="absolute top-50 -left-10" >
            <ChevronLeft size={30} color="#000" strokeWidth={1.5} />
          </button>
          <button className="absolute top-50 -right-10" >
            <ChevronRight size={30} color="#000" strokeWidth={1.5} />
          </button>*/}
          {/* </div>  */}
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Sections;
