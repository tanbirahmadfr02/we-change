/* eslint-disable no-unused-vars */
import React from "react";
import supporter1 from "../../assets/supporter1.jpeg";
import supporter2 from "../../assets/supporter2.jpeg";
import supporter3 from "../../assets/supporter3.jpeg";
import supporter4 from "../../assets/supporter4.jpeg";
import Heading from "../Heading/Heading";

import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaStar,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
function Supporters() {
  return (
    <>
      <section className="">
        <div className="py-16 bg-gray-950">
          <div className="container">
            <div className="heading">
            <h2 className='font-lora font-bold text-white text-2xl md:text-3xl lg:text-[40px] relative after:content-[""] after:h-[1.5px] after:w-[130px] after:bg-white after:absolute after:top-[50%] after:translate-y-[-50%] lg:after:left-[27%] before:content-[""] before:h-[1.5px] before:w-[130px] before:bg-white before:absolute before:top-[50%] before:translate-y-[-50%] lg:before:right-[27%] after:hidden md:after:block before:hidden md:before:block md:after:left-[15%] md:before:right-[15%] text-center mb-6 lg:mb-16'>
          Supporters
        </h2>
            </div>
            <div className="AllSupporters">
              <div className="flex justify-center">
                <div className="w-full md:w-6/12 sm:w-6/12">
                  <Swiper
                    breakpoints={{
                      "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}
                    watchSlidesProgress={true}
                    slidesPerView={1}
                    className="mySwiper py-20"
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                    }}
                    loop={true}
                  >
                    <SwiperSlide className="w-[130px]">
                      <div className="img relative flex justify-center group">
                        <div className="opacity-0 group-hover:opacity-100 duration-500 shape py-1 text-center px-3 bg-white inline-block rounded-md absolute top-[-80px] left-[50%] translate-x-[-50%] z-[999]">
                          <p className="font-lora font-normal text-gray-700 text-sm">
                            Yes
                          </p>
                          <h4 className="font-lora font-medium text-gray-800 text-lg relative after:content-[''] after:absolute after:bg-white after:z-[-1] after:h-5 after:w-5 after:rotate-45 after:bottom-[-12px] after:left-[50%] after:translate-x-[-50%]">
                            Yeash
                          </h4>
                        </div>
                        <img
                          src={supporter1}
                          alt="image"
                          className="h-[120px] w-[120px] rounded-full border-4 border-white hover:border-primary duration-500 group-last:"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-[130px]">
                      <div className="img relative flex justify-center group">
                        <div className="opacity-0 group-hover:opacity-100 duration-500 shape py-1 text-center px-3 bg-white inline-block rounded-md absolute top-[-80px] left-[50%] translate-x-[-50%] z-[999]">
                          <p className="font-lora font-normal text-gray-700 text-sm">
                            Yes
                          </p>
                          <h4 className="font-lora font-medium text-gray-800 text-lg relative after:content-[''] after:absolute after:bg-white after:z-[-1] after:h-5 after:w-5 after:rotate-45 after:bottom-[-12px] after:left-[50%] after:translate-x-[-50%]">
                            Yeash
                          </h4>
                        </div>
                        <img
                          src={supporter2}
                          alt="image"
                          className="h-[120px] w-[120px] rounded-full border-4 border-white hover:border-primary duration-500 group-last:"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-[130px]">
                      <div className="img relative flex justify-center group">
                        <div className="opacity-0 group-hover:opacity-100 duration-500 shape py-1 text-center px-3 bg-white inline-block rounded-md absolute top-[-80px] left-[50%] translate-x-[-50%] z-[999]">
                          <p className="font-lora font-normal text-gray-700 text-sm">
                            Yes
                          </p>
                          <h4 className="font-lora font-medium text-gray-800 text-lg relative after:content-[''] after:absolute after:bg-white after:z-[-1] after:h-5 after:w-5 after:rotate-45 after:bottom-[-12px] after:left-[50%] after:translate-x-[-50%]">
                            Yeash
                          </h4>
                        </div>
                        <img
                          src={supporter3}
                          alt="image"
                          className="h-[120px] w-[120px] rounded-full border-4 border-white hover:border-primary duration-500 group-last:"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-[130px]">
                      <div className="img relative flex justify-center group">
                        <div className="opacity-0 group-hover:opacity-100 duration-500 shape py-1 text-center px-3 bg-white inline-block rounded-md absolute top-[-80px] left-[50%] translate-x-[-50%] z-[999]">
                          <p className="font-lora font-normal text-gray-700 text-sm">
                            Yes
                          </p>
                          <h4 className="font-lora font-medium text-gray-800 text-lg relative after:content-[''] after:absolute after:bg-white after:z-[-1] after:h-5 after:w-5 after:rotate-45 after:bottom-[-12px] after:left-[50%] after:translate-x-[-50%]">
                            Yeash
                          </h4>
                        </div>
                        <img
                          src={supporter4}
                          alt="image"
                          className="h-[120px] w-[120px] rounded-full border-4 border-white hover:border-primary duration-500 group-last:"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-[130px]">
                      <div className="img relative flex justify-center group">
                        <div className="opacity-0 group-hover:opacity-100 duration-500 shape py-1 text-center px-3 bg-white inline-block rounded-md absolute top-[-80px] left-[50%] translate-x-[-50%] z-[999]">
                          <p className="font-lora font-normal text-gray-700 text-sm">
                            Yes
                          </p>
                          <h4 className="font-lora font-medium text-gray-800 text-lg relative after:content-[''] after:absolute after:bg-white after:z-[-1] after:h-5 after:w-5 after:rotate-45 after:bottom-[-12px] after:left-[50%] after:translate-x-[-50%]">
                            Yeash
                          </h4>
                        </div>
                        <img
                          src={supporter2}
                          alt="image"
                          className="h-[120px] w-[120px] rounded-full border-4 border-white hover:border-primary duration-500 group-last:"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <p className="font-lora text-white text-xl text-center">
              <span className="font-bold">123 Supporters Already.</span>{" "}
              <span className="font-normal text-de">Be one of them!</span>
            </p>
          </div>
        </div>
        {/* =======supporter middle part start ======= */}
        <div className="supporterMiddle py-[50px]">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-10/12 sm:w-8/12">
                <div className="flex justify-between pb-6 border-b-2 border-gray-400 border-dotted">
                  <div className="h-8 w-8 flex justify-center items-center rounded-full bg-gray-300">
                    <p className="text-xl font-bold">5</p>
                  </div>
                  <div className="socialLinks flex gap-x-2">
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
                      <Link className="h-8 w-8 flex justify-center items-center rounded-full bg-[#296996] text-white">
                        <FaLinkedinIn />
                      </Link>
                    </div>
                    <div>
                      <Link className="h-8 w-8 flex justify-center items-center rounded-full bg-[#863587] text-white">
                        <MdOutlineEmail />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* =======chatting start  =======*/}
            <div className="flex justify-center my-12">
              <div className="w-full lg:w-8/12">
                <div className="flex justify-between mb-8 gap-x-2 md:gap-0">
                  <div className="img w-[20%] md:w-[5%]">
                    <img src={supporter4} alt="image" className="h-10 w-10" />
                  </div>
                  <div className="text w-[80%] md:w-[93%]">
                    <div className="flex gap-x-2">
                      <div className="star">
                        <FaStar className="text-primary" />
                      </div>
                      <div>
                        <p className="font-lora font-normal text-xs text-gray-500">
                          CURLY THEMES— <span>July 24, 2015 at 10:49 pm</span>
                        </p>
                        <p className="font-lora font-normal text-xs text-gray-500 my-1">
                          Quae vero auctorem tractata ab fiducia dicuntur.
                        </p>
                        <p className="font-lora font-semibold text-sm text-gray-500">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mb-8">
                  <div className="img w-[20%] md:w-[5%]">
                    <img src={supporter4} alt="image" className="h-10 w-10" />
                  </div>
                  <div className="text w-[80%] md:w-[93%]">
                    <div className="flex gap-x-2">
                      <div className="star">
                        <FaStar className="text-primary" />
                      </div>
                      <div>
                        <p className="font-lora font-normal text-xs text-gray-500">
                          CURLY THEMES— <span>July 24, 2015 at 10:49 pm</span>
                        </p>
                        <p className="font-lora font-normal text-xs text-gray-500 my-1">
                          A communi observantia non est recedendum. Plura mihi
                          bona sunt, inclinet, amari petere vellent.
                        </p>
                        <p className="font-lora font-semibold text-sm text-gray-500">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="w-11/12">
                    <div className="flex justify-between mb-8">
                      <div className="img w-[20%] md:w-[6%]">
                        <img
                          src={supporter4}
                          alt="image"
                          className="h-10 w-10"
                        />
                      </div>
                      <div className="text w-[80%] md:w-[92%]">
                        <div className="flex gap-x-2">
                          <div className="star">
                            <FaStar className="text-primary" />
                          </div>
                          <p className="font-lora font-normal text-xs text-gray-500">
                            CURLY THEMES— <span>July 24, 2015 at 10:49 pm</span>
                          </p>
                        </div>
                        <p className="font-lora font-normal text-xs text-gray-500 my-1">
                          Curabitur est gravida et libero vitae dictum. Vivamus
                          sagittis lacus vel augue laoreet rutrum faucibus.
                          Pellentesque habitant morbi tristique senectus et
                          netus. Quam diu etiam furor iste tuus nos eludet?
                          Pellentesque habitant morbi tristique senectus et
                          netus. Ab illo tempore, ab est sed immemorabili.
                        </p>
                        <p className="font-lora font-semibold text-sm text-gray-500">
                          Reply
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="w-11/12">
                        <div className="flex justify-between mb-8">
                          <div className="img w-[20%] md:w-[6%]">
                            <img
                              src={supporter4}
                              alt="image"
                              className="h-10 w-10"
                            />
                          </div>
                          <div className="text w-[80%] md:w-[92%]">
                            <div className="flex gap-x-2">
                              <div className="star">
                                <FaStar className="text-primary" />
                              </div>
                              <p className="font-lora font-normal text-xs text-gray-500">
                                CURLY THEMES—{" "}
                                <span>July 24, 2015 at 10:49 pm</span>
                              </p>
                            </div>
                            <p className="font-lora font-normal text-xs text-gray-500 my-1">
                              Inmensae subtilitatis, obscuris et malesuada
                              fames.
                            </p>
                            <p className="font-lora font-semibold text-sm text-gray-500">
                              Reply
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:justify-between mb-8">
                  <div className="img w-[15%] sm:w-[5%]">
                    <img src={supporter4} alt="image" className="h-10 w-10" />
                  </div>
                  <div className="text w-[85%] sm:w-[93%]">
                    <div className="flex gap-x-2">
                      <div className="star">
                        <FaStar className="text-primary" />
                      </div>
                      <p className="font-lora font-normal text-xs text-gray-500">
                        CURLY THEMES— <span>July 24, 2015 at 10:49 pm</span>
                      </p>
                    </div>
                    <p className="font-lora font-normal text-xs text-gray-500 my-1">
                      Fictum, deserunt mollit anim laborum astutumque! Curabitur
                      blandit tempus ardua ridiculus sed magna. Ambitioni
                      dedisse scripsisse iudicaretur. Nihil hic munitissimus
                      habendi senatus locus, nihil horum?
                    </p>
                    <p className="font-lora font-semibold text-sm text-gray-500">
                      Reply
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* =======chatting end  =======*/}

            {/* =====supporters form start ==== */}
            <div>
              <div className="flex justify-center">
                <div className="w-full md:w-8/12 ">
                  <form action="#">
                    <textarea
                      cols="30"
                      rows="5"
                      placeholder="Comment"
                      className="border border-gray-400 py-2 px-3 text-gray-500 w-full mb-5"
                    ></textarea>
                    <div className="flex justify-between mb-5">
                      <input
                        type="text"
                        placeholder="Name"
                        className="py-1 px-3 text-gray-500 border border-gray-400 w-[49%]"
                      />
                      <input
                        type="Email"
                        placeholder="Email"
                        className="py-1 px-3 text-gray-500 border border-gray-400 w-[49%]"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="website"
                      className="py-1 px-3 text-gray-500 border border-gray-400 w-full mb-5"
                    />
                    <div className="flex gap-x-4">
                      <input type="checkbox" />
                      <p className="font-lora font-medium text-xs text-gray-600">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </p>
                    </div>
                    <div className="text-center sm:text-left">
                      <Link className="font-lora font-medium text-base text-white py-2 px-4 rounded-md bg-primary mt-5">
                        Submit Comment
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* =====supporters form end ==== */}
          </div>
        </div>
        {/* =======supporter middle part end  =======*/}
      </section>
    </>
  );
}

export default Supporters;
