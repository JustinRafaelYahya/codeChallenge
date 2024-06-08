import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { TypeAnimation } from "react-type-animation";
import ImgSlider1 from "../assets/imgslider1.png";
import ImgSlider2 from "../assets/imgslider2.png";
import ImgSlider3 from "../assets/imgslider3.png";
import ImgSlider4 from "../assets/imgslider4.png";
import { Component } from "react";

const Hero = () => {
  return (
    <div>
      <Carousel
        className="hero-slider"
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showArrows={false}
      >
        <img
          src={ImgSlider1}
          className="w-full h-screen object-cover "
          alt=""
        />
        <img
          src={ImgSlider2}
          className="w-full h-screen object-cover "
          alt=""
        />
        <img
          src={ImgSlider3}
          className="w-full h-screen object-cover "
          alt=""
        />
        <img
          src={ImgSlider4}
          className="w-full h-screen object-cover "
          alt=""
        />
      </Carousel>

      <div className="w-full h-screen absolute top-0 left-0 bg-white/10">
        <div className=" max-w-[1450px] h-screen px-12 m-auto flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <h1 className=" text-4xl lg:text-5xl font-bold my-5">
            Prebuilt PC by us <br /> For{" "}
            <TypeAnimation
              sequence={[
                "Professionals",
                2000,
                "Gamers",
                2000,
                "Creators",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-xl lg:text-2xl font-semibold">
            Best performance, more bang for your bucks
          </p>
          <button className=" bg-[#672e91] w-[200px] rounded-md font-semibold px-6 py-3 my-12 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
