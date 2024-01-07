/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <nav className="bg-white py-3  md:py-0">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="logo w-1/5">
              <img src={logo} alt="" />
            </div>
            <div className="menu w-4/5 flex justify-end">
              <div
                className="md:hidden text-black text-2xl duration-1000 cursor-pointer z-[999]"
                onClick={handleClick}
              >
                {show == true ? <RxCross2 /> : <AiOutlineBars />}
              </div>
              <ul
                className={`md:flex md:justify-end bg-slate-200 md:bg-transparent md:gap-x-2.5 lg:gap-x-[30px] absolute md:static
                         md:opacity-100 top-[42px] w-full text-center pb-[30px] md:pb-0 duration-700 z-[999] ${
                           show
                             ? "left-0 opacity-100 sm:w-1/2 h-full"
                             : "left-[-700px] opacity-0 md:opacity-100 sm:w-1/2 md:w-full h-full"
                         }`}
              >
                <li>
                  <Link className='font-lora text-base font-normal text-secondary hover:brightness-[110%] hover:text-primary duration-500 relative after:content-[""] after:h-[1.5px] after:w-full after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:opacity-0 hover:after:opacity-100 after:duration-500 py-3 md:py-5 pt-10'>
                    WeChange
                  </Link>
                </li>
                <li>
                  <Link className='font-lora text-base font-normal text-secondary hover:brightness-[110%] hover:text-primary duration-500 relative after:content-[""] after:h-[1.5px] after:w-full after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:opacity-0 hover:after:opacity-100 after:duration-500 py-3 md:py-5'>
                    The Petition
                  </Link>
                </li>
                <li>
                  <Link className='font-lora text-base font-normal text-secondary hover:brightness-[110%] hover:text-primary duration-500 relative after:content-[""] after:h-[1.5px] after:w-full after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:opacity-0 hover:after:opacity-100 after:duration-500 py-3 md:py-5'>
                    Letter
                  </Link>
                </li>
                <li>
                  <Link className='font-lora text-base font-normal text-secondary hover:brightness-[110%] hover:text-primary duration-500 relative after:content-[""] after:h-[1.5px] after:w-full after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:opacity-0 hover:after:opacity-100 after:duration-500 py-3 md:py-5'>
                    Updates
                  </Link>
                </li>
                <li>
                  <Link className='font-lora text-base font-normal text-secondary hover:brightness-[110%] hover:text-primary duration-500 relative after:content-[""] after:h-[1.5px] after:w-full after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:opacity-0 hover:after:opacity-100 after:duration-500 py-3 md:py-5'>
                    Supporters
                  </Link>
                </li>
                <li>
                  <Link className='font-lora text-base font-normal text-secondary hover:brightness-[110%] hover:text-primary duration-500 relative after:content-[""] after:h-[1.5px] after:w-full after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:opacity-0 hover:after:opacity-100 after:duration-500 py-3 md:py-5'>
                    Sign it!
                  </Link>
                </li>
                <li>
                  <Link className='font-lora text-base font-normal text-secondary hover:brightness-[110%] hover:text-primary duration-500 relative after:content-[""] after:h-[1.5px] after:w-full after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:opacity-0 hover:after:opacity-100 after:duration-500 py-3 md:py-5'>
                    Buy Now!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
