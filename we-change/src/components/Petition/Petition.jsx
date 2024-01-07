/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../assets/banner.jpg";
import img2 from "../../assets/slum.jpg";
import img3 from "../../assets/orange.jpg";
import client from "../../assets/client.jpeg";
import Heading from "../Heading/Heading";

function Petition() {
  return (
    <>
      <section className="md:pt-[150px] md:pb-[100px] pt-[100px] pb-[50px]">
        <div className="container">
          <div className="heading">
            <Heading text="The Petition" />
          </div>
          <p className="font-lora font-normal text-sm text-gray-800 mb-2 text-center">
            This Petition will be sent to:
          </p>
        </div>
        <div className="content bg-gray-200 py-[40px] mb-[50px]">
          <div className="container">
            <div className="flex flex-wrap lg:gap-x-6 justify-center text-center">
              <div className="lg:w-1/4 w-1/2 mb-3 lg:mb-0">
                <p className="font-lora font-semibold text-base text-gray-800">
                  Governor,
                </p>
                <p className="font-lora font-normal text-sm text-gray-800 mb-2">
                  State of Florida Rick Scott,
                </p>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-3 lg:mb-0">
                <p className="font-lora font-semibold text-base text-gray-800">
                  Attorney General,
                </p>
                <p className="font-lora font-normal text-sm text-gray-800 mb-2">
                  State of Florida Pam Bondi
                </p>
              </div>
              <div className="w-1/2 lg:w-1/4">
                <p className="font-lora font-semibold text-base text-gray-800">
                  Agriculture Commissioner,
                </p>
                <p className="font-lora font-normal text-sm text-gray-800 mb-2">
                  Adam Putman
                </p>
              </div>
              <div className="lg:w-1/4 w-1/2">
                <p className="font-lora font-semibold text-base text-gray-800">
                  U.S. House of Representatives,
                </p>
                <p className="font-lora font-normal text-sm text-gray-800 mb-2">
                  John Newman
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* petition bottom part start  */}
        <div className="petition-bottom">
          <div className="container">
            <div className="md:flex justify-between">
              <div className="md:w-5/12 w-full mb-10 md:mb-0">
                <div className="img mb-5">
                  <img src={img1} alt="image" className="w-full" />
                </div>
                <div className="flex justify-between">
                  <div className="w-[48%]">
                    <div className="img">
                      <img src={img2} alt="image" />
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div className="img">
                      <img src={img3} alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 w-full text-center md:text-left">
                <h2 className="font-lora font-bold lg:text-4xl text-2xl md:text-3xl text-gray-800 mb-10">
                  Let’s build a shelter for the homeless children of Marrakech,
                  Marocco
                </h2>
                <p className="font-lora font-light text-base text-gray-800 mb-10">
                  Here’s to the crazy ones — the misfits, the rebels, the
                  troublemakers, the round pegs in the square holes. The ones
                  who see things differently — they’re not fond of rules. You
                  can quote them, disagree with them, glorify or vilify them,
                  but the only thing you can’t do is ignore them because they
                  change things. They push the human race forward, and while
                  some may see them as the crazy ones, we see genius, because
                  the ones who are crazy enough to think that they can change
                  the world, are the ones who do.
                </p>
                <p className="font-lora font-light text-sm text-gray-800 mb-10 leading-6">
                  <span className="block mb-7">
                    Quisque placerat facilisis egestas cillum dolore. Quisque ut
                    dolor gravida, placerat libero vel, euismod. Excepteur sint
                    obcaecat cupiditat non proident culpa. Fictum, deserunt
                    mollit anim laborum astutumque! Non equidem invideo, miror
                    magis posuere velit aliquet.
                  </span>

                  <span className="block mb-7">
                    Tu quoque, Brute, fili mi, nihil timor populi, nihil!
                    Excepteur sint obcaecat cupiditat non proident culpa. Magna
                    pars studiorum, prodita quaerimus. Salutantibus vitae elit
                    libero, a pharetra augue. Quo usque tandem abutere,
                    Catilina, patientia nostra?
                  </span>

                  <span className="block mb-7">
                    Paullum deliquit, ponderibus modulisque suis ratio utitur.
                    Tu quoque, Brute, fili mi, nihil timor populi, nihil! Donec
                    sed odio operae, eu vulputate felis rhoncus. Lorem ipsum
                    dolor sit amet, consectetur adipisici elit, sed eiusmod
                    tempor incidunt ut labore et dolore magna aliqua.
                  </span>

                  <span className="block mb-7">
                    Curabitur est gravida et libero vitae dictum. Quisque
                    placerat facilisis egestas cillum dolore. Cras mattis
                    iudicium purus sit amet fermentum. Ab illo tempore, ab est
                    sed immemorabili.
                  </span>
                  <span className="block mb-7">
                    Ambitioni dedisse scripsisse iudicaretur. Plura mihi bona
                    sunt, inclinet, amari petere vellent. Curabitur blandit
                    tempus ardua ridiculus sed magna. Non equidem invideo, miror
                    magis posuere velit aliquet. Cras mattis iudicium purus sit
                    amet fermentum.
                  </span>
                </p>
                <div className="flex gap-x-4 justify-center">
                  <div className="img">
                    <img src={client} alt="client" />
                  </div>
                  <div className="text">
                    <p className="font-lora font-thin text-gray-800 text-sm mb-1">
                      Petition by,
                    </p>
                    <p className="font-lora font-thin text-gray-800 text-sm mb-1">
                      Alex Peter
                    </p>
                    <p className="font-lora font-thin text-gray-800 text-sm mb-1">
                      London, UK
                    </p>
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

export default Petition;
