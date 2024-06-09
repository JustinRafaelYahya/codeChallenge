import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import userOne from "../assets/user1.png";
import userTwo from "../assets/user2.png";
import userThree from "../assets/user3.jpg";
import userFour from "../assets/user4.jpg";

const TeamsOverview = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div id="" className="mx-auto bg-white max-w-[1450px] px-3">
      <div className="mb-8">
        <h2 className="flex justify-center text-3xl font-bold mb-8">
          Our Crews
        </h2>
        <p className="flex justify-center text-center mx-6 mb-8">
          Meet these kindred spirits who passionately integrate themselves with
          our belief. They are the leaders, or lets say the field commanders who
          execute various operations in order to keep us in line. All of them
          are the experts in the field and will to give their all.
        </p>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div className="shadow-xl flex flex-col p-4 my-4 mx-4 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
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
          <div className="shadow-xl flex flex-col p-4 my-4  mx-4 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
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
          <div className="shadow-xl flex flex-col p-4 my-4  mx-4 rounded-lg ">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
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
          <div className="shadow-xl flex flex-col p-4 my-4  mx-4 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
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
          <div className="shadow-xl flex flex-col p-4 my-4  mx-4 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
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
          <div className="shadow-xl flex flex-col p-4 my-4  mx-4 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
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
        </Carousel>
      </div>
    </div>
  );
};

export default TeamsOverview;
