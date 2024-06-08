import React from "react";
import userOne from "../assets/user1.png";
import userTwo from "../assets/user2.png";
import userThree from "../assets/user3.jpg";
import userFour from "../assets/user4.jpg";

const Testimonials = () => {
  return (
    <div className="max-w-[1450px] mx-auto py-[4rem] px-4 bg-white">
      <h2 className="flex justify-center text-3xl font-bold mb-16">
        What Our Costumers Said?
      </h2>
      <div className=" grid lg:grid-cols-4 gap-8">
        <div className="shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="rounded-full w-20 mx-auto bg-white"
            src={userOne}
            alt="/"
          />
          <div className="text-center">
            <p className="font-semibold text-lg my-1 mx-8">Skill4ltu</p>
            <p className=" border-b mx-8 text-sm mb-2">
              World of Tanks Streamer
            </p>
            <p className="py-3  mx-8">
              The machine I bought at Blitz was a perfection, it worked beyond
              my expectation. There are no more lags, but just all frags!
            </p>
          </div>
        </div>
        <div className=" shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="rounded-full w-20 mx-auto bg-white"
            src={userTwo}
            alt="/"
          />
          <div className="text-center">
            <p className="font-semibold text-lg my-1 mx-8">Danil Ishutin</p>
            <p className=" border-b mx-8 text-sm mb-2">
              Professional DOTA 2 Player
            </p>
            <p className="py-3 mx-8">
              It was a delightful experience to bought a high-spec gaming PC at
              Blitz. The assembly was perfect-clean and the machine performs
              great.
            </p>
          </div>
        </div>
        <div className="shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="rounded-full w-20 mx-auto bg-white"
            src={userThree}
            alt="/"
          />
          <div className="text-center">
            <p className="font-semibold text-lg my-1 mx-8">
              Nasser Al-Khelaifi
            </p>
            <p className=" border-b mx-8 mb-2 text-sm">
              Director - Paris Saint-Germain
            </p>
            <p className="py-3 mx-8">
              The computer I bought 5 years ago still working like a charm. The
              company doesn't play around and ensure to use the most-quality
              parts.
            </p>
          </div>
        </div>
        <div className="shadow-xl h-fit flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="rounded-full w-20 mx-auto bg-white"
            src={userFour}
            alt="/"
          />
          <div className="text-center">
            <p className="font-semibold text-lg my-1 mx-8">Ueda Reina</p>
            <p className=" border-b mx-8 mb-2 text-sm">Twitch Streamer</p>
            <p className="py-3 mx-8">
              The delivery process went fast and PC was wrapped in a very
              careful way! Overall all the staff was also so kind and responsive
              (≧▽≦)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
