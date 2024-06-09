import React from "react";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <Products />
      <Testimonials />
    </div>
  );
};

export default Home;
