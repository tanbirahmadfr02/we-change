/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <section className="bg-banner bg-no-repeat bg-center bg-cover relative">
        <div className="overlay bg-primary-rgb py-[100px] lg:py-[200px]">
          <div className="container">
            <div className="w-8/12 mx-auto">
              <div className="content text-center">
                <h1 className="text-4xl md:text-[44px] lg:text-6xl font-lora font-bold text-center text-gray-300 md:leading-[48px] lg:leading-[70px] mb-6">
                  Sometimes life is going to hit you in the head with a brick.
                </h1>
                <h3 className="mb-10 lg:mb-20 font-lora font-medium text-gray-300 text-2xl">
                  <Link className="underline ">Don’t lose faith.</Link>
                </h3>
                <p>
                  <Link className="font-lora font-medium text-white text-sm lg:text-lg bg-primary py-3 px-3 lg:px-8 rounded-3xl">
                    Support this Petition Now!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape absolute bottom-[-60px] left-[50%] translate-x-[-50%] bg-gray-400 rounded-lg py-2 lg:py-8 px-2 lg:px-8">
          <p className="font-lora font-normal text-base text-gray-700 mb-4">
            With <span className="text-lg text-gray-900">123</span> supporters
          </p>
          <div className="line h-4 w-[250px] mx-auto bg-primary rounded-full"></div>
          <p className="font-lora font-normal text-base text-gray-700 mt-4 text-end">
            <span className="text-lg text-gray-900">-23</span> needed to reach{" "}
            <span className="text-lg text-gray-900">100</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Banner;
