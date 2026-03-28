import React from "react";
import bgWave from "../img/waveBg.png";
const Home = () => {
  return (
    <div>
      <div
        className="max-w-[100%] min-h-screen bg-no-repeat bg-right bg-cover flex items-center container px-[20px]"
        style={{
          backgroundImage: `url(${bgWave})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 100%",
        }}
      >
        <div className="block1 flex flex-col justify-between gap-3 items-start z-10 relative">
          <div className="max-w-[1163px] font-[700] text-[100px]">
            <span className="text-[#F5333F]">BOOST</span> YOUR EMAIL MARKETING
            RESULTS!
          </div>
          <div className="text-[#000000] font-[300] text-[32px]">
            We help B2C brands grow their email-attributed revenue
          </div>
          <button className="max-md:hidden bg-[#F5333F] p-[10px_25px] rounded-[5px] font-[500] text-[#fff]">
            Boost your results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
