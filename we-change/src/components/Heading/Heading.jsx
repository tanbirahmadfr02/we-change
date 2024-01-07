/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Heading(props) {
  return (
    <>
      <div>
        <h2 className='font-lora font-bold text-gray-800 text-2xl md:text-3xl lg:text-[40px] relative after:content-[""] after:h-[1.5px] after:w-[130px] after:bg-gray-800 after:absolute after:top-[50%] after:translate-y-[-50%] lg:after:left-[27%] before:content-[""] before:h-[1.5px] before:w-[130px] before:bg-gray-800 before:absolute before:top-[50%] before:translate-y-[-50%] lg:before:right-[27%] after:hidden md:after:block before:hidden md:before:block md:after:left-[15%] md:before:right-[15%] text-center mb-6 lg:mb-16'>
          {props.text}
        </h2>
      </div>
    </>
  );
}

export default Heading;
