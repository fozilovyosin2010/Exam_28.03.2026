import React from "react";

import bgWave from "../img/waveBg.png";
import bgWave2 from "../img/waveBg2.png";

import aliexpress from "../img/aliexpress.png";
import kfc from "../img/kfc.png";
import laroche from "../img/laroche.png";
import levHaolam from "../img/levHaolam.png";
import papajohns from "../img/papajohns.png";
import shneider from "../img/shneider.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const imgList = [levHaolam, shneider, aliexpress, laroche, papajohns, kfc];

  const ulList = [
    "Your email revenue is 20% or less",
    "You need ideas to grow your email channel",
    "You want expert help with implementing strategies",
    "Your competitors' emails outperform yours",
    "Email deliverability became a problem",
  ];

  return (
    <div>
      <div
        className="container max-w-full bg-no-repeat bg-right bg-cover flex items-center p-[20px]"
        style={{
          backgroundImage: `url(${bgWave})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 100%",
        }}
      >
        <div className="block1 flex flex-col gap-3 items-start z-10 relative">
          <div className="max-w-[1163px] max-md:max-w-full max-md:text-[50px] font-[700] text-[100px]">
            <span className="text-[#F5333F]">BOOST</span> YOUR EMAIL MARKETING
            RESULTS!
          </div>
          <div className="text-[#000000] font-[300] text-[32px] max-md:text-[14px]">
            We help B2C brands grow their email-attributed revenue
          </div>
          <button className="bg-[#F5333F] max-md: p-[10px_25px] text-[20px] rounded-[5px] font-[500] text-[#fff]">
            BOOST YOUR RESULTS
          </button>
        </div>
      </div>
      <div className="container max-w-full grid grid-cols-6 items-center max-md:grid-cols-3 gap-[40px] p-[20px_40px] border-y border-y-[#D1D1D1]">
        {imgList.map((e, i) => {
          return <img key={i} src={e} />;
        })}
      </div>

      <div
        className="container max-w-full bg-no-repeat bg-right bg-cover p-[20px] max-md:p-[10px]"
        style={{
          backgroundImage: `url(${bgWave2})`,
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 100%",
        }}
      >
        <div className="bg-[#212121] shadow-[0_0_33px_#00000040] text-[#fff] flex justify-between m-[40px] gap-[50px] items-center rounded-[20px] p-[100px_80px] max-md:flex-col max-md:items-center max-md:gap-[25px] max-md:m-[20px] max-md:p-[25px_20px]">
          <div className="font-[700] text-[128px] max-w-[831px] max-md:text-[28px] max-md:max-w-full">
            We are here to
            <span className="text-[#F5333F]"> help </span> when:
          </div>
          <div>
            <ul className="list-disc marker:text-[#F5333F] flex flex-col max-md:ml-[20px] max-md:text-[14px] text-[24px] font-[400]">
              {ulList.map((e) => {
                return <li>{e}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
