/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="py-10 bg-gray-700">
        <div className="container">
          <div className="sm:flex items-center justify-between">
            <div className="socialLinks flex gap-x-2 justify-center sm:justify-start">
              <div>
                <Link className="h-8 w-8 flex justify-center items-center rounded-full bg-[#3f5f95] text-white">
                  <FaFacebookF />
                </Link>
              </div>
              <div>
                <Link className="h-8 w-8 flex justify-center items-center rounded-full bg-[#4cafe8] text-white">
                  <FaTwitter />
                </Link>
              </div>
              <div>
                <Link className="h-8 w-8 flex justify-center items-center rounded-full bg-[#db4e37] text-white">
                  <FaGooglePlusG />
                </Link>
              </div>
              <div>
                <Link className="h-8 w-8 flex justify-center items-center rounded-full bg-[#863587] text-white">
                  <FaPinterestP />
                </Link>
              </div>
            </div>
            <p className="font-lora font-normal text-base text-white text-center sm:text-start mt-4 sm:mt-0">
              Designed by{" "}
              <span className="font-semibold text-primary">
                Tanbir Ahmad FR
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
