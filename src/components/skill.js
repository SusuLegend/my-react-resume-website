import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill_data from "./skilldata";
import "./skill.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import illustrator from "./images/adobe-illustrator.svg";
import photoshop from "./images/adobe-photoshop.svg";
import premiere from "./images/adobepremiere.png";

function Skill_View() {
  const arr_hardskill_data = skill_data.map((skilldata) => {
    return (
      <div
        key={skilldata.id}
        className="card_skill flex flex-col p-2 lg:m-12 md:m-8 m-6 content-center item-center text-[#EEEEEE] font-martian
      "
      >
        <div className="card_header">
          <img src={skilldata.pic_url} className="place-self-center" />
        </div>
        <div className="lg:pt-4 md:pt-3 pt-1">
          <span className="lg:text-3xl md:text-2xl text-xl md:p-4 p-2 pb-0 text-center">{skilldata.name}</span>
          <p className="text_description"> ~{skilldata.description}~ </p>
          <CircularProgressbar
            className="progress_circle xl:w-32 xl:h-32 lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 mt-2"
            value={skilldata.percentage}
            text={`${skilldata.percentage}%`}
            styles={buildStyles({
              textColor: "#EEEEEE",
              pathColor: "#64CCC5",
              trailColor: "black",
            })}
          />
        </div>
      </div>
    );
  });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="Skill" className="bg-[#053B50] w-full h-auto w-full pt-20 pl-4 pr-4">
      <h1 className="skill_header md:m-4 m-2 font-kanit text-gray-100 font-bold lg:text-7xl md:text-6xl  text-5xl text-center">MY SKILL</h1>
      <div className="md:mb-20 mb-12">
        <h3 className="md:m-4 md:p-4 m-2 p-2 font-kanit text-gray-100 font-bold lg:text-5xl md:text-4xl  text-3xl">Technical Skill</h3>
        <Carousel responsive={responsive} infinite={true} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]} className="skill_slider xl:ml-24 xl:mr-24 md:ml-12 md:mr-12 ml-2 mr-2">
          {arr_hardskill_data}
        </Carousel>
      </div>
      <div className="soft_skill flex lg:flex-row flex-col lg:items-start items-center lg:ml-8 lg:mr-8 mr-4 ml-4 gap-8">
        <div className="lg:w-1/2 md:w-3/5 w-full mr-8 ml-8">
          <h3 className="m-4 p-4 font-kanit text-gray-100 font-bold lg:text-5xl md:text-4xl text-3xl">Soft Skill</h3>
          <div className="flex justify-between text-gray-100 font-martian lg:text-xl md:text-md sm:text-sm text-xs tracking-tight drop-shadow-xl">
            <p className="m-1 drop-shadow-md">Problem Solving</p>
            <p className="m-1 drop-shadow-md">92%</p>
          </div>
          <div className="bar mb-4">
            <span id="problem_solving"></span>
          </div>
          <div className="flex justify-between text-gray-100 font-martian lg:text-xl md:text-md sm:text-sm text-xs tracking-tight drop-shadow-xl">
            <p className="m-1 drop-shadow-md">Creative Idea</p>
            <p className="m-1 drop-shadow-md">90%</p>
          </div>
          <div className="bar mb-4">
            <span id="creative_idea"></span>
          </div>
          <div className="flex justify-between text-gray-100 font-martian lg:text-xl md:text-md sm:text-sm text-xs  tracking-tight drop-shadow-xl">
            <p className="m-1 drop-shadow-md">Research and Analytic</p>
            <p className="m-1 drop-shadow-md">85%</p>
          </div>
          <div className="bar mb-4">
            <span id="research"></span>
          </div>
          <div className="flex justify-between text-gray-100 font-martian lg:text-xl md:text-md sm:text-sm text-xs tracking-tight drop-shadow-xl">
            <p className="m-1 drop-shadow-md">Teamwork</p>
            <p className="m-1 drop-shadow-md">81%</p>
          </div>
          <div className="bar mb-4">
            <span id="teamwork"></span>
          </div>
          <div className="flex justify-between text-gray-100 font-martian lg:text-xl md:text-md sm:text-sm text-xs tracking-tight drop-shadow-xl">
            <p className="m-1 drop-shadow-md">Presentation</p>
            <p className="m-1 drop-shadow-md">79%</p>
          </div>
          <div className="bar mb-4">
            <span id="presentation"></span>
          </div>
        </div>
        <div className="box_swipe lg:w-1/2 w-full lg:mr-8 lg:ml-8 mr-4 ml-4 items-center justify-center">
          <h3 className="md:m-4 md:p-4 m-2 p-2 font-kanit text-gray-100 font-bold lg:text-5xl md:text-4xl text-3xl">Specialised Skill</h3>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={true}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={photoshop} className="cube_image bg-gray-900" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={illustrator} className="cube_image bg-gray-900" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={premiere} className="cube_image bg-gray-900" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="bg-[#053B50] h-40"></div>
    </div>
  );
}

export default Skill_View;
