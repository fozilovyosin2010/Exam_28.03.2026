import React, { useRef, useState } from "react";

import { Link, Links, Outlet } from "react-router";

import Logo from "../img/Logo (5).svg";

import faceB from "../img/faceB.svg";
import linkedIn from "../img/linkedIn.svg";
import twit from "../img/twit.svg";

const Layout = () => {
  const menuRef = useRef();
  const [toggle, setToggle] = useState(false);

  function handleMenuClick() {
    setToggle((e) => !e);
  }

  return (
    <div className="roboto">
      <div className="header p-[20px] border-b border-b-[#C2C2C2]">
        <div className="sec flex justify-between items-center">
          <div className="flex justify-between items-center gap-[40px]">
            <div>
              <Link to={"/"}>
                <img src={Logo} />
              </Link>
            </div>
            <nav className="flex gap-[30px] font-[400] text-[16px] max-md:hidden">
              <Link className="hover:underline" to={"/todo"}>
                Services
              </Link>
              <Link className="hover:underline" to={"#"}>
                Portfolio
              </Link>
              <Link className="hover:underline" to={"#"}>
                Email Marketing Audit
              </Link>
            </nav>
          </div>

          <button className="max-md:hidden bg-[#F5333F] p-[10px_25px] rounded-[5px] font-[500] text-[#fff]">
            CONTACT US
          </button>
          {/* menu */}
          <button
            onClick={handleMenuClick}
            ref={menuRef}
            className={`${toggle ? "menu" : null} w-[20px] hidden max-md:flex flex-col gap-1`}
          >
            <div className="line1 duration-300 w-full h-[2px] bg-[red]"></div>
            <div className="line2 duration-300 w-full h-[2px] bg-[red]"></div>
            <div className="line3 duration-300 w-full h-[2px] bg-[red]"></div>
          </button>
        </div>
      </div>
      <div className="sec">
        <Outlet />
      </div>
      <div className="footer bg-[#212121] p-[80px_40px] max-md:[40px_20px]">
        <div className="sec flex justify-between items-center gap-4 max-md:flex-col max-md:justify-center">
          <div className="block1 flex justify-between max-md:flex-col gap-[50px]">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
            <div>
              <nav className="font-[400] text-gray-500 text-[14px] max-md:flex-col flex gap-[50px]">
                <div className="flex flex-col max-md:items-center gap-1">
                  <Link className="hover:underline" to="/todo">
                    Services
                  </Link>
                  <a className="hover:underline" href="#">
                    About Us
                  </a>
                </div>
                <div className="flex flex-col max-md:items-center gap-1">
                  <a className="hover:underline" href="#">
                    Email Marketing Audit
                  </a>
                  <a className="hover:underline" href="#">
                    Portfolio
                  </a>
                </div>
                <div className="flex flex-col max-md:items-center gap-1">
                  <a className="hover:underline" href="#">
                    Blog
                  </a>
                  <a className="hover:underline" href="#">
                    Privacy Policy
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div className="block2 flex justify-between gap-[30px]">
            <button className="rounded-[100px] p-2 border border-[#F5333F]">
              <img className="w-[18px] h-[18px]" src={twit} alt="" />
            </button>
            <button className="rounded-[100px] p-2 border border-[#F5333F]">
              <img className="w-[18px] h-[18px]" src={linkedIn} alt="" />
            </button>
            <button className="rounded-[100px] p-2 border border-[#F5333F]">
              <img className="w-[18px] h-[18px]" src={faceB} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
