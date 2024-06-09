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
    <div id="" className="mx-auto bg-white max-w-[1920px] px-3">
      <div className="mb-8 mx-auto">
        <h2 className="flex justify-center text-3xl font-bold mb-8 max-w-[1450px] mx-auto">
          Our Crews
        </h2>
        <p className="flex justify-center text-center px-10 mb-8 max-w-[1450px] mx-auto">
          Meet these kindred spirits who passionately integrate themselves with
          our belief. They are the leaders, or lets say the field commanders who
          execute various operations in order to keep us in line. All of them
          are the experts in the field and will to give their all.
        </p>
        <Carousel
          className=""
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={5000}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div className="shadow-xl flex flex-col p-4 my-6 mr-[-4rem] ml-60 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
              alt="/"
            />
            <div className="text-center">
              <p className="font-semibold text-lg my-1 mx-8">Justin Rafael</p>
              <p className=" border-b mx-8 text-sm mb-2">CEO</p>
              <p className="py-6  mx-8">
                Graduated from Multimedia Nusantara University, Indonesia. He
                had been doing small-scale PC Bulding business since 1990 before
                an idea to invent Blitz PC crossed in his mind.
              </p>
            </div>
          </div>
          <div className="shadow-xl flex flex-col p-4 my-6 mx-20 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
              alt="/"
            />
            <div className="text-center">
              <p className="font-semibold text-lg my-1 mx-8">Jensen Huang</p>
              <p className=" border-b mx-8 text-sm mb-2">
                Vice President of Research & Developments
              </p>
              <p className=" mx-8 py-6">
                Graduated from Oregon State University, his work experience
                revolves in various semiconductor industries since 1993. He's
                been one of our team since 2012.
              </p>
            </div>
          </div>
          <div className="shadow-xl flex flex-col p-4 my-6 ml-[-4rem] mr-60 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
              alt="/"
            />
            <div className="text-center">
              <p className="font-semibold text-lg my-1 mx-8">Lisa Su</p>
              <p className=" border-b mx-8 text-sm mb-2">
                Vice President of Global Operations
              </p>
              <p className="py-3 mx-8">
                Experienced in of various semiconductor companies, including IBM
                since 1994. She paved her career to managing the global
                operations of top global manufacturers before joining us in
                2014.
              </p>
            </div>
          </div>
          <div className="shadow-xl flex flex-col p-5 my-6 mr-[-4rem] ml-60 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
              alt="/"
            />
            <div className="text-center">
              <p className="font-semibold text-lg my-1 mx-8">
                Linus Sebastian{" "}
              </p>
              <p className=" border-b mx-8 text-sm mb-2">
                Head of Product Marketing
              </p>
              <p className="py-5 mx-8">
                A seasoned tech content creator since 2012, He's been known of
                his involvement in Linus Media Group as one of the leading tech
                media. He's been with our service ever since 2017.
              </p>
            </div>
          </div>
          <div className="shadow-xl flex flex-col p-4 my-6 mx-20 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
              alt="/"
            />
            <div className="text-center">
              <p className="font-semibold text-lg my-1 mx-8">Stephen Burke</p>
              <p className=" border-b mx-8 text-sm mb-2">
                Head of Quality Control
              </p>
              <p className="py-3  mx-8">
                An overclocker at heart and a professional with 8+ years of
                experience in Major Companies including Dell. He's been defining
                the assembly standard, and ensuring the quality of our products
                first handedly since 2018
              </p>
            </div>
          </div>
          <div className="shadow-xl flex flex-col p-5 my-4 ml-[-4rem] mr-60 rounded-lg">
            <img
              className="rounded-full w-20 mx-auto bg-white"
              src=""
              alt="/"
            />
            <div className="text-center">
              <p className="font-semibold text-lg my-1 mx-8">Alva Jonathan</p>
              <p className=" border-b mx-8 text-sm mb-2">
                Head of Technical and RMA Departement
              </p>
              <p className="py-3  mx-8">
                Before was a professional overclocker and winner of HWBOT
                Championship for various years, now he's with us to lead the
                crew of PC technicians and ensure the RMA process goes smoothly.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TeamsOverview;
