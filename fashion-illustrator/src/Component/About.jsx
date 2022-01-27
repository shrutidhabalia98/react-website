import React from "react";

import Img6 from "../Images/Img6.jpg";
import Main from "./Main";

let About = () => {
  return (
    <>
      <Main
        title="We are here to create your Fashion Ideas in Real."
        imgsrc={Img6}
        visit="/contact"
        btnname="Contact Now"
        para="Discover what a fashion Illustrator and Designer is doing."
      />
    </>
  );
};
export default About;
