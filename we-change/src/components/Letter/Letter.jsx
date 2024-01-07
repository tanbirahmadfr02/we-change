/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../Heading/Heading.jsx";

function Letter() {
  return (
    <>
      <section className="pb-16 lg:pb-[100px]">
        <div className="container">
          <Heading text="Letter" />
        </div>
        <div className="bg-gray-200 py-[60px]">
          <div className="container">
            <div className="flex justify-center">
              <div className="lg:w-6/12 md:w-8/12 sm:w-10/12">
                <p className="font-lora font-normal text-base text-gray-700">
                  <span className="block">To:</span>
                  <span className="block mb-6">Florida Boxing Commission</span>

                  <span className="block mb-6">
                    Unam incolunt Belgae, aliam Aquitani, tertiam. Tityre, tu
                    patulae recubans sub tegmine fagi dolor. Curabitur blandit
                    tempus ardua ridiculus sed magna. Etiam habebis sem dicantur
                    magna mollis euismod.
                  </span>

                  <span className="block mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    Prima luce, cum quibus mons aliud consensu ab eo. Integer
                    legentibus erat a ante historiarum dapibus. Cum ceteris in
                    veneratione tui montes, nascetur mus. Inmensae subtilitatis,
                    obscuris et malesuada fames.
                  </span>

                  <span className="block">Sincerely,</span>
                  <span className="block">[Your name]</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Letter;
