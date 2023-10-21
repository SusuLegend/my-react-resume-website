import "./about.css";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";

function About_View() {
  return (
    <div id="About" className="bg-[#64CCC5] w-full pt-16">
      <div className="flex flex-col md:flex-row  p-4">
        <div className="card_flip w-full md:w-5/12 xl:ml-8 md:ml-6">
          <Fade duration={2000}>
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper xl:mt-0 lg:mt-24">
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </Fade>
        </div>
        <div className="about_container md:w-7/12 xl:mr-12  lg:mr-6 md:mr-4">
          <div className="flex flex-col">
            <Fade delay={1000} duration={2000}>
              <div>
                <h1 className="abouttext lg:text-8xl text-6xl text-left font-kanit z-30">About Me</h1>
              </div>
            </Fade>
            <Fade delay={1500} duration={2000}>
              <div className="lg:pt-8 lg:pr-8 md:p-4">
                <p className="about1 font-martian indent-12 text-[#053B50] text-justify">
                  I'm a young and driven programmer with a strong work ethic, a flair for creative thinking, and a knack for problem-solving. My passion for programming fuels my continuous growth in the tech industry. I thrive on challenges
                  and embrace change as an opportunity for learning. I approach every project with a curiosity-driven mindset, aiming to turn innovative ideas into practical solutions. My dedication to honing my programming skills keeps me
                  up-to-date with the latest trends and technologies. What sets me apart is my creativity. I enjoy pushing boundaries, finding unique solutions to complex problems, and developing elegant, efficient software. Problem-solving
                  is my forte; I relish dissecting intricate issues and crafting innovative solutions.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="bg-[#053B50]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#64CCC5"
            fill-opacity="1"
            d="M0,128L12,117.3C24,107,48,85,72,85.3C96,85,120,107,144,144C168,181,192,235,216,266.7C240,299,264,309,288,272C312,235,336,149,360,144C384,139,408,213,432,213.3C456,213,480,139,504,128C528,117,552,171,576,186.7C600,203,624,181,648,176C672,171,696,181,720,170.7C744,160,768,128,792,112C816,96,840,96,864,96C888,96,912,96,936,106.7C960,117,984,139,1008,176C1032,213,1056,267,1080,272C1104,277,1128,235,1152,224C1176,213,1200,235,1224,250.7C1248,267,1272,277,1296,250.7C1320,224,1344,160,1368,154.7C1392,149,1416,203,1428,229.3L1440,256L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default About_View;
