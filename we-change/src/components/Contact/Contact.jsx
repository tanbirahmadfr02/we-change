/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";

function Contact() {
  return (
    <>
      <section className="mt-[50px] mb-20">
        <div className="container">
          <div className="heading">
            <Heading text="Sign It" />
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-10/12 lg:w-8/12">
              <div className="relative after:absolute after:h-full after:border-r-2 after:border-dotted after:bg-gray-400 after:top-0 after:left-[50%] after:hidden after:sm:block">
                <div className="shape h-16 w-16 rounded-full bg-gray-600 flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[999]">
                  <p className="font-lora font-bold text-2xl text-white">OR</p>
                </div>
                <div className="sm:flex justify-between flex-wrap">
                  <div className="sm:w-5/12">
                    <div className="socialLinks">
                      <div className="flex gap-x-5 items-center mb-4">
                        <div>
                          <Link className="h-10 w-10 flex justify-center items-center rounded-full bg-[#3f5f95] text-white">
                            <FaFacebookF />
                          </Link>
                        </div>
                        <p className="font-lora font-normal text-base text-gray-600">
                          {" "}
                          Share Petition on Facebook
                        </p>
                      </div>
                      <div className="flex gap-x-5 items-center mb-3">
                        <div>
                          <Link className="h-10 w-10 flex justify-center items-center rounded-full bg-[#863587] text-white">
                            <FaTwitter />
                          </Link>
                        </div>
                        <p className="font-lora font-normal text-base text-gray-600">
                          {" "}
                          Tweet this Petition
                        </p>
                      </div>
                      <div className="flex gap-x-5 items-center mb-3">
                        <div>
                          <Link className="h-10 w-10 flex justify-center items-center rounded-full bg-[#296996] text-white">
                            <FaGooglePlusG />
                          </Link>
                        </div>
                        <p className="font-lora font-normal text-base text-gray-600">
                          {" "}
                          Share Petition on Google+
                        </p>
                      </div>
                      <div className="flex gap-x-5 items-center mb-3">
                        <div>
                          <Link className="h-10 w-10 flex justify-center items-center rounded-full bg-[#db4e37] text-white">
                            <FaLinkedinIn />
                          </Link>
                        </div>
                        <p className="font-lora font-normal text-base text-gray-600">
                          {" "}
                          Share Petition on LinkedIn
                        </p>
                      </div>
                      <div className="flex gap-x-5 items-center mb-3">
                        <div>
                          <Link className="h-10 w-10 flex justify-center items-center rounded-full bg-[#863587] text-white">
                            <MdOutlineEmail />
                          </Link>
                        </div>
                        <p className="font-lora font-normal text-base text-gray-600">
                          {" "}
                          E-mail this Petition
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:w-5/12 mt-14 sm:mt-0">
                    <form action="#">
                      <div>
                        <input
                          type="text"
                          placeholder="E-mail Address"
                          className="py-1 px-3 text-gray-500 border border-gray-400 w-full mb-4"
                        />
                        <input
                          type="text"
                          placeholder="First Name"
                          className="py-1 px-3 text-gray-500 border border-gray-400 w-full mb-4"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="py-1 px-3 text-gray-500 border border-gray-400 w-full mb-4"
                        />
                        <textarea
                          cols="30"
                          rows="2"
                          placeholder="Comment"
                          className="border border-gray-400 py-2 px-3 text-gray-500 w-full"
                        ></textarea>
                        <div className="text-center sm:text-left">
                          <Link className="font-lora font-medium text-base text-white py-2 px-4 rounded-md bg-primary mt-5">
                            Sign Petition
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
