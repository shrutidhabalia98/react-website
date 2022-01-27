import React from "react";
import Card from "./Card";
import SData from "./SData";

let Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Collections</h1>
      </div>
      <div id="outer-card" className="container-fluid mb-5 cards">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {SData.map((val, ind) => {
                return <Card imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
