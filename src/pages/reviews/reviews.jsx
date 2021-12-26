import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { myAlert } from "../../helpers/helpers";
import mobileImages from "../../images/rev.png";
import { mobile } from "../../sdk/models/mobile/mobile.model";
import { loaderState } from "../../state";
import ReviewCard from "./review-card/review-card";

const Reviews = () => {
  const baseURl = process.env.REACT_APP_API_URL;
  const [_, setLoader] = useRecoilState(loaderState);
  const [rows, setRows] = useState([mobile]);
  let navigate = useNavigate();

  function reviewById(id) {
    navigate(`/reviews/${id}`);
  }
  async function getAllListing() {
    setLoader(true);
    try {
      const allListing = await axios.get(`${baseURl}/mobiles`);
      setRows(allListing.data);

      console.log(rows);
    } catch (e) {
      myAlert("Can't proceed ", "error");
      console.log();
    } finally {
      setLoader(false);
    }
  }
  // getAllListing();
  useEffect(() => {
    // Update the document title using the browser API
    getAllListing();
  }, []);

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
          {rows.length &&
            rows.map((row) => {
              return (
                <ReviewCard
                  key={rows.indexOf(row)}
                  name={row.Name}
                  price={row.Price}
                  description={row.Description}
                  imageURl={row.ImageUrl}
                  buttonClick={() => {
                    reviewById(row._id);
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
