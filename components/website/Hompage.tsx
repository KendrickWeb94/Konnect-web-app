import React from "react";
import { Hero } from "./shared/Hero";
import { Details } from "./shared/Details";
import { Features } from "./shared/Features";

import { AccordionDemo } from "./shared/Q&A";
import StartUsing from "./shared/StartUsing";
import Testimonial from "./shared/Testimonial";

const Hompage = () => {
  return (
    <div className="">
      <Hero />
      <Details />
      <Features />
      <Testimonial />
      <AccordionDemo />
      <StartUsing />
    </div>
  );
};

export default Hompage;
