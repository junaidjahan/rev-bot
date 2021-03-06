import React from "react";
import BaseTextField from "../../components/base-components/base-text-field";
import mobileImages from "../../images/girl.png";

function contactus() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-orange-200 Main Div mt-5">
      <div className="md:flex w-full  bg-indigo-500 upper div">
        <div className="flex-1 left-div bg-indigo-500">
          <img src={mobileImages} alt="" className="" />
        </div>
        <div className="flex-none right-div bg-indigo-500 rounded-lg mt-12	">
          <form>
            <div className="mr-6">
              <BaseTextField
                label="Full Name"
                type="text"
                labelColor="white"
                required
              />
            </div>
            <div className="pt-6 mr-6">
              <BaseTextField label="Email" type="email" />
            </div>
            <div className="pt-6 mr-6">
              <BaseTextField label="Message" type="text" />
            </div>
            <div className="flex justify-end mr-6">
              <button
                className="w-30 mt-7 bg-blue-700 hover:bg-blue-800"
                href="mailto:fa18-bcs-006@cuilahore.edu.pk"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="lower div bg-indigo-500	">
        <div className="flex place-content-center">
          <p className="text-white"> copyright © {currentYear}</p>
        </div>
      </div>
    </div>
  );
}
export default contactus;
