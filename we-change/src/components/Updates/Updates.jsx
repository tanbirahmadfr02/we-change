/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";

function Updates() {
  return (
    <>
      <section className="pb-16">
        <div className="container">
          <Heading text="Updates" />
          <div className="updateBody relative after:content-[''] after:h-full after:border-r-2 after:border-gray-700 after:border-dotted after:absolute after:top-0 after:left-[50%] after:translate-x-[-50%] py-16">
            <div className="flex lg:gap-x-10 md:gap-x-8 gap-x-6">
              <div className="w-1/2">
                <div className="item py-2.5 lg:py-5 px-[15px] lg:px-7 bg-gray-300 rounded-md relative after:content-[''] after:absolute after:top-5 lg:after:right-[-28px] after:right-[-20px] md:after:right-[-24px] after:h-4 after:w-4 after:rounded-full after:bg-primary after:z-[999] mb-[68px]">
                  <h3 className="font-lora font-semibold text-lg text-primary text-center">
                    <Link>The shelter is almost done!</Link>
                  </h3>
                  <h3 className="font-lora font-normal text-base text-primary text-center">
                    <Link>Uncategorized</Link>
                  </h3>
                  <p className="font-lora font-normal text-gray-800 text-sm text-center mt-4">
                    Welcome to Your SUPER-powered{" "}
                    <Link className="font-semibold">
                      WP Engine Multisite Install
                    </Link>{" "}
                    This is your first post. Edit or delete it, then start
                    blogging!
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <p className="font-lora font-normal text-gray-700 text-base pt-4">
                  Thursday, July 23, 2015
                </p>
              </div>
            </div>
            <div className="flex lg:gap-x-10 md:gap-x-8 gap-x-6">
              <div className="w-1/2">
                <p className="font-lora font-normal text-gray-700 text-base pt-4 text-end">
                  Thursday, July 23, 2015
                </p>
              </div>
              <div className="w-1/2">
                <div className="item py-2.5 lg:py-5 px-[15px] lg:px-7 bg-gray-300 rounded-md relative after:content-[''] after:absolute after:top-5 lg:after:left-[-28px] after:left-[-20px] md:after:left-[-24px] after:h-4 after:w-4 after:rounded-full after:bg-primary after:z-[999]">
                  <h3 className="font-lora font-semibold text-lg text-primary text-center">
                    <Link>We are getting a lot of donations!</Link>
                  </h3>
                  <h3 className="font-lora font-normal text-base text-primary text-center">
                    <Link>Uncategorized</Link>
                  </h3>
                  <p className="font-lora font-normal text-gray-800 text-sm text-center mt-4">
                    Welcome to Your SUPER-powered{" "}
                    <Link className="font-semibold">
                      WP Engine Multisite Install
                    </Link>{" "}
                    This is your first post. Edit or delete it, then start
                    blogging!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Updates;
