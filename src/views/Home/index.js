import React, { useLayoutEffect } from "react";
import CallToAction from "./containers/CallToAction";
import Testimonials from "./containers/Testimonials";
import Contact from "./containers/Contact";
import useNavSetBackground from "../../components/Nav/useNavSetBackground";

const Home = () => {
  const setBackground = useNavSetBackground();
  useLayoutEffect(() => setBackground(false), []);

  return (
    <div>
      <CallToAction />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
