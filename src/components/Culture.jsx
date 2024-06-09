import React from "react";
import Culture1 from "../assets/culture1.png";
import Culture2 from "../assets/culture2.png";
import Culture3 from "../assets/culture3.png";
const Culture = () => {
  return (
    <div className="mx-auto bg-white max-w-[1450px] px-3">
      <div className="mb-8">
        <h2 className="flex justify-center text-3xl font-bold mb-8">
          What We Live By
        </h2>
        <p className="flex justify-center text-center mx-6 mb-8">
          These are our Ikigai, our goals and the way we move as a company.
        </p>
        <div className=" grid lg:grid-cols-2 gap-8 mx-10">
          <div className="my-20 mx-4">
            <h2 className=" text-2xl font-bold my-8 flex justify-center">
              Be Passionate
            </h2>
            <p className="text-center">
              Be passionate as there is no tommorow. We are obsessed with what
              we are doing and keep taking it to next level. Let's move from one
              feat into another.
            </p>
          </div>
          <div>
            <img src={Culture1} alt="" />
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-8 mx-10">
          <div>
            <img src={Culture2} alt="" />
          </div>
          <div div className="my-20 mx-4">
            <h2 className=" text-2xl font-bold my-8 flex justify-center">
              Adapt, Learn, Grow
            </h2>
            <p className="text-center">
              Veni, vidi, vici. See the challenges as opportunites to grow
              closer to perfection. A frog in the well knows nothing of the sea.
              We keep expanding our horizon to reach the furthest of PC
              Community out there.
            </p>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-8 mx-10">
          <div className="my-20 mx-4">
            <h2 className=" text-2xl font-bold my-8 flex justify-center">
              Together We Stand
            </h2>
            <p className="text-center">
              Learn to appreaciate the uniqueness of each other member. Here, we
              elevate each other with mutual respect and embracing the strength
              of each other.
            </p>
          </div>
          <div>
            <img src={Culture3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
