import React from "react";
import CallToAction from "./containers/CallToAction";
import Testimonials from "./containers/Testimonials";
import Contact from "./containers/Contact";

const Home = () => {
  return (
    <div>
      <CallToAction />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
