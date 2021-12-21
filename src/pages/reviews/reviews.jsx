import React, { useState } from "react";
import ReviewCard from "./review-card/review-card";
import mobileImages from "../../images/rev.png";
const Reviews = () => {
  const rows = [1, 2, 3, 4, 5, 6];

  return (
    <div className="bg-gray-100">
      <div className="pt-4 mt-6 bg-gradient-to-l from-blue-200 to-blue-500 md:grid grid-cols-2">
        <div className="py-28">
          <div className="flex flex-col justify-end items-end">
            <h1 className=" text-white text-left">
              <div className="text-5xl">Get the whole</div>
              <div className="text-8xl">Tech Story</div>
              {/* <div className="text-7xl">Story</div> */}
            </h1>
            <div>
              <p className=" text-white md:ml-32 p-5 ">
                RevBot analyzes the top-performing companies and software
                solutions based on three important pieces of criteria: Quality,
                Reliability, and Ability. These metrics are further segmented
                into authentic feedback by customers, a portfolio of the
                company, its market penetration, years of experience, and
                serviceability.
              </p>
            </div>
          </div>
        </div>
        <img
          src={mobileImages}
          className="md:mx-16"
          width={500}
          alt=""
          srcset=""
        />
      </div>
      <div className="container px-48 py-14">
        <h1 className=" text-gray-800 text-left">
          <div className="text-4xl">Latest Devices</div>
        </h1>
        <div>
          {rows.map((number) => {
            return <ReviewCard key={number} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
