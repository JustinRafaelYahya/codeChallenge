import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa";
import { HiArrowsPointingIn } from "react-icons/hi2";
import { VscTools } from "react-icons/vsc";

const Overview = () => {
  return (
    <div className="py-[4rem] px-4 mx-auto bg-white max-w-[1450px]">
      <h2 className="flex justify-center text-3xl font-bold mb-8">
        Why Blitz PC?
      </h2>
      <p className="flex justify-center text-center mx-6 mb-8">
        Estabilished in 2000, Blitz PC is the pioneer of delivering prebuilt pc
        for thousands of costumers. We set ourselves apart from competitors by
        providing you the best bang for your buck, while pride our years of
        experience of adjusting to various costumers need, from professionals
        and gamers up to the content creators. We utilize the state of the art
        as well as the most quality components and technology from the best
        companies such as Intel, AMD, Nvidia, Microsoft, MSI, Samsung, NZXT, and
        more. From our Costumer Services up to our PC Tecnicians, we
        passionately help you to discover the ultimate experience of your PC.{" "}
      </p>
      <h2 className="flex justify-center text-3xl font-bold mb-8">Our Perks</h2>
      <div className=" grid lg:grid-cols-4 gap-8">
        <div className="flex flex-col p-4 my-4">
          <FaRegStar className="mx-auto mb-6" size={100} />
          <p className="text-center font-bold text-xl mb-2">Best Components</p>
          <p className="text-center">
            No Compromise. We use the latest and the best products to ensure
            your satisfaction and experience.
          </p>
        </div>
        <div className="flex flex-col p-4 my-4">
          <LiaShippingFastSolid className="mx-auto mb-6" size={100} />
          <p className="text-center font-bold text-xl mb-2">
            Fast, Free Shipping
          </p>
          <p className="text-center">
            All of our products come with free shipping. We won't make you wait
            long as we ensure the quickest delivery possible to you!
          </p>
        </div>
        <div className="flex flex-col p-4 my-4">
          <HiArrowsPointingIn className="mx-auto mb-6" size={100} />
          <p className="text-center font-bold text-xl mb-2">
            Professional Assembly
          </p>
          <p className="text-center">
            All of our pc's are professionaly assembled by our 10+ years of
            working experience PC Technicians hand.{" "}
          </p>
        </div>
        <div className="flex flex-col p-4 my-4">
          <VscTools className="mx-auto mb-6" size={100} />
          <p className="text-center font-bold text-xl mb-2">
            3 Years of Warranty
          </p>
          <p className="text-center">
            Your investment will be future proof as we ensure the standard 3
            years of parts replacement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
