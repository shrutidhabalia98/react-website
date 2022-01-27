import React from "react";
import Img from "../Images/Img.jpg";
import Main from "./Main";

let Home = () => {
  return (
    <>
      <Main
        title="Build your Fashion Ideas with LIFESTYLE"
        imgsrc={Img}
        visit="/services"
        btnname="Get Started"
        para="We are the team of Designers and Illustrator!"
      />
    </>
  );
};
export default Home;
