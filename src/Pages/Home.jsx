import React, { useRef } from "react";

import bgWave from "../img/waveBg.png";
import bgWave2 from "../img/waveBg2.png";

import aliexpress from "../img/aliexpress.png";
import kfc from "../img/kfc.png";
import laroche from "../img/laroche.png";
import levHaolam from "../img/levHaolam.png";
import papajohns from "../img/papajohns.png";
import shneider from "../img/shneider.png";

import { EffectCards } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import Rec2 from "../img/Rec2.png";
import Rec3 from "../img/Rec3.png";
import Rec4 from "../img/Rec4.png";

import FrameRed from "../img/FrameRed.svg";

import triAng from "../img/triAng.svg";
import imgAngle from "../img/imgAngle.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const cardList = [
    {
      des: "You have ensured a systematic approach to our email strategy and helped us streamline all chaotic thoughts and ideas we had about our emails!",
      name: "Natalia Pereldik",
      role: "CEO, Funexpected Games",
    },
    {
      des: "You have shown great professionalism and attention to detail when it comes to email marketing!",
      name: "Ron Shalev",
      role: "Founder, BYB Media",
    },
  ];

  const imgList = [levHaolam, shneider, aliexpress, laroche, papajohns, kfc];

  const ulList = [
    "Your email revenue is 20% or less",
    "You need ideas to grow your email channel",
    "You want expert help with implementing strategies",
    "Your competitors' emails outperform yours",
    "Email deliverability became a problem",
  ];

  const swipeRef = useRef();

  function handleClRight() {
    if (swipeRef.current) {
      swipeRef.current.slideNext();
    }
  }
  function handleClLeft() {
    if (swipeRef.current) {
      swipeRef.current.slidePrev();
    }
  }

  const { t, i18n } = useTranslation();

  return (
    <div>
      <div
        className="section1 flex items-center p-[20px]"
        style={{
          backgroundImage: `url(${bgWave})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 100%",
        }}
      >
        <div className="block1 flex flex-col gap-3 items-start z-10 relative">
          <div className="max-w-[1163px] max-md:max-w-full max-md:text-[50px] font-[700] text-[100px]">
            <span className="text-[#F5333F]">{t("hero.title1")}</span>{" "}
            {t("hero.title2")}
          </div>
          <div className="text-[#000000] font-[300] text-[32px] max-md:text-[14px]">
            <div>{t("hero.subtitle")}</div>
          </div>
          <button className="bg-[#F5333F] max-md: p-[10px_25px] text-[20px] rounded-[5px] font-[500] text-[#fff]">
            {t("hero.button")}
          </button>
        </div>
      </div>
      <div className="section2 max-w-full grid grid-cols-6 items-center max-md:grid-cols-3 gap-[40px] p-[20px_40px] border-y border-y-[#D1D1D1]">
        {imgList.map((e, i) => {
          return <img key={i} src={e} />;
        })}
      </div>

      <div
        className="section3 p-[20px] max-md:p-[10px]"
        style={{
          backgroundImage: `url(${bgWave2})`,
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 100%",
        }}
      >
        <div className="bg-[#212121] shadow-[0_0_33px_#00000040] text-[#fff] flex max-lg:flex-wrap justify-between m-[40px] gap-[50px] items-center rounded-[20px] p-[100px_80px] max-md:flex-col max-md:items-center max-md:gap-[25px] max-md:m-[20px] max-md:p-[25px_20px]">
          <div className="font-[700] text-[100px] max-w-[831px] max-md:text-[28px] max-md:max-w-full">
            {t("section3.title1")}
            <span className="text-[#F5333F]"> {t("section3.highlight")} </span>
            {t("section3.title2")}
          </div>
          <div>
            <ul className="list-disc marker:text-[#F5333F] flex flex-col max-md:ml-[20px] max-md:text-[14px] text-[24px] font-[400]">
              {t("section3.list", { returnObjects: true }).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="section4 flex justify-evenly   items-center p-[20px_40px] gap-[30px] max-md:flex-col">
        <div className="block1">
          <Swiper
            onSwiper={(swiper) => (swipeRef.current = swiper)}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-[425px]"
          >
            <SwiperSlide>
              <img src={Rec2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rec3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rec4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="block2">
          <img src={levHaolam} alt="" />
          <div className="flex gap-3 font-[700] text-[16px]">
            <div className="text-[#F5333F]">
              <div>Result:</div>
              <div>Type:</div>
              <div>Company:</div>
              <div>Product:</div>
              <div>Platform:</div>
            </div>
            <div>
              <div>$20K per email campaign</div>
              <div>Subscription e-commerce</div>
              <div>Lev Haolam</div>
              <div>Handmade gifts from Israel</div>
              <div>Klaviyo</div>
            </div>
          </div>
          <div>
            <button className="text-[12px] font-[600] p-[5px_10px] text-[#F5333F] border rounded-[5px] border-[#F5333F]">
              LEARN MORE
            </button>
            <div className="flex gap-[20px] my-2">
              <button
                onClick={handleClLeft}
                className="border rounded-full p-1 border-[#C2C2C2]"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-[16px] h-[16px] rotate-90 text-[#C2C2C2]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <button
                onClick={handleClRight}
                className="border rounded-full p-1 border-[#C2C2C2]"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-[16px] h-[16px] rotate-[-90deg] text-[#C2C2C2]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bgWave2})`,
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 100%",
        }}
        className="section5 p-[20px] max-md:p-[10px]"
      >
        <div className="bg-[#212121] shadow-[0_0_33px_#00000040] text-[#fff] m-[40px] rounded-[20px] p-[100px_80px] max-md:p-[25px_20px] max-md:m-[20px]">
          <div className="block1 flex gap-[30px] max-lg:flex-wrap max-md:gap-[10px]">
            <div className="text-[80px] font-[700] max-w-[1261px] max-lg:text-[28px]">
              {t("section5.title1")}
              <span className="text-[#F5333F]">
                {" "}
                {t("section5.highlight")}{" "}
              </span>
              {t("section5.title2")}
            </div>
            <ul className="list-disc marker:text-[#F5333F] py-[20px] ml-[20px] flex flex-col justify-between">
              {t("section5.services", { returnObjects: true }).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                ),
              )}
            </ul>
          </div>
          <div className="block2 font-[600] font-semibold text-[20px] text-[#FFFFFF] flex justify-between gap-[30px] max-md:flex-col">
            <div>
              <span className="text-[#F5333F]">For midsize businesses</span>, we
              become your budget-friendly email marketing team, ensuring revenue
              from emails at a fraction of in-house costs. Discover how it
              works!
            </div>
            <div className="min-h-full w-[3px] bg-[#fff] max-md:w-full max-md:h-[3px]"></div>
            <div>
              <span className="text-[#F5333F]">
                For email marketers at larger companies
              </span>
              , we enhance your productivity by handling execution, allowing you
              to focus on strategy. Learn why we are your support, not your
              competition!
            </div>
          </div>
        </div>
      </div>
      <div className="section6 relative p-5 pr-0 flex items-center overflow-x-hidden max-lg:flex-wrap max-lg:justify-center max-lg:pr-5">
        <div className="block1 min-w-1/2">
          <div className="font-[700] text-[80px] max-md:text-[28px] max-md:px-5">
            {t("testimonials.title")}
          </div>
          <div className="flex flex-col gap-5">
            {t("testimonials.items", { returnObjects: true }).map((e, i) => (
              <div key={i}>
                <div>{e.des}</div>
                <div>{e.name}</div>
                <div>{e.role}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="block2 relative right-0">
          <img src={triAng} className="absolute top-0" alt="" />
          <img
            src={imgAngle}
            alt=""
            className="max-w-[700px] max-lg:max-w-full"
          />
        </div>
      </div>
      <div className="section7">
        <div className="bg-[#212121] shadow-[0_0_33px_#00000040] text-[#fff] m-[40px] rounded-[20px] p-[100px_80px] flex justify-between gap-[70px] max-lg:flex-wrap max-md:p-[25px_20px] max-md:m-[20px]">
          <div className="block1">
            <h1 className="text-[80px] font-[700] max-w-[559px] max-md:text-[28px]">
              {t("subscribe.title1")}
              <span className="text-[#F5333F]">{t("subscribe.highlight")}</span>
            </h1>
            <div className="text-[#F5333F]">{t("subscribe.subtitle")}</div>
          </div>
          <div className="block2 max-w-[898px]">
            <div className="miniBlock1 font-[400] flex flex-col gap-[30px]">
              <div>
                Our aim is to level up your email marketing to world-class
                standards. We want to bring joy to your readers and deliver
                excellent ROI for your business. That’s why we created our email
                newsletter.
              </div>
              <div>
                But here is the thing: it's not just about us promoting our
                agency services (we promise!). In our emails, we share valuable
                advice and practical tips based on our own experiences. Our goal
                is to help you enhance your email marketing without breaking the
                bank.
              </div>
              <div className="text-[#F5333F]">
                Let's join forces and make your emails shine!
              </div>
            </div>
            <div className="miniBlock2">
              <div className="text-[40px] font-[700]">
                {t("subscribe.title1")}
                <span className="text-[#F5333F]">
                  {" "}
                  {t("subscribe.highlight")}{" "}
                </span>
              </div>
              <form className="max-w-full flex justify-between">
                <input
                  type="text"
                  placeholder={t("subscribe.placeholder")}
                  className="bg-[#fff] p-3 w-full rounded-l-[5px] placeholder:text-[#000] outline-none"
                />
                <button className="bg-[#F5333F] p-3 rounded-r-[5px]">
                  {t("subscribe.button")}
                </button>
              </form>
              <span>Согласие на получение писем?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
