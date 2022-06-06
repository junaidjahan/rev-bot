import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import tabBarLogo from "../../review-bot-logo.png";
const TabBar = () => {
  const [activeStatus, setActiveStatus] = useState(1);
  const location = useLocation();
  if (!(location.pathname === "/login" || location.pathname === "/signup")) {
    return (
      <div className=" bg-white shadow-md">
        <div className="flex justify-between container ">
          <div>
            <img src={tabBarLogo} alt="No logo" className="h-10 my-1" />
          </div>
          <div>
            <div className="xl:w-full xl:mx-0 h-12 hidden sm:block ">
              <ul className="flex px-5">
                <Link to="/home">
                  <li
                    onClick={() => setActiveStatus(1)}
                    className={
                      activeStatus == 1
                        ? "text-sm border-blue-600 pt-3 rounded-t text-blue-600 mr-6"
                        : "text-sm text-gray-600 py-3 flex items-center mr-6 hover:text-blue-600 cursor-pointer"
                    }
                  >
                    <div className="flex items-center mb-3 px-3">
                      <span className=" font-bold">Home</span>
                    </div>
                    {activeStatus == 1 && (
                      <div className="w-full h-1 bg-blue-600 rounded-t-md" />
                    )}
                  </li>
                </Link>
                <Link to="/reviews">
                  <li
                    onClick={() => setActiveStatus(2)}
                    className={
                      activeStatus == 2
                        ? "text-sm border-blue-600 pt-3 rounded-t text-blue-600 mr-6"
                        : "text-sm text-gray-600 py-3 flex items-center mr-6 hover:text-blue-600 cursor-pointer"
                    }
                  >
                    <div className="flex items-center mb-3 px-3">
                      <span className=" font-bold">Reviews</span>
                    </div>
                    {activeStatus == 2 && (
                      <div className="w-full h-1 bg-blue-600 rounded-t-md" />
                    )}
                  </li>
                </Link>
                <Link to="/about">
                  <li
                    onClick={() => setActiveStatus(3)}
                    className={
                      activeStatus == 3
                        ? "text-sm border-blue-600 pt-3 rounded-t text-blue-600 mr-6"
                        : "text-sm text-gray-600 py-3 flex items-center mr-6 hover:text-blue-600 cursor-pointer"
                    }
                  >
                    <div className="flex items-center mb-3 px-1">
                      <span className=" font-bold">About</span>
                    </div>
                    {activeStatus == 3 && (
                      <div className="w-full h-1 bg-blue-600 rounded-t-md" />
                    )}
                  </li>
                </Link>

                <Link to="/contactus">
                  <li
                    onClick={() => setActiveStatus(4)}
                    className={
                      activeStatus == 4
                        ? "text-sm border-blue-600 pt-3 rounded-t text-blue-600 mr-6"
                        : "text-sm text-gray-600 py-3 flex items-center mr-6 hover:text-blue-600 cursor-pointer"
                    }
                  >
                    <div className="flex items-center mb-3 px-1">
                      <span className=" font-bold">Contact us</span>
                    </div>
                    {activeStatus == 4 && (
                      <div className="w-full h-1 bg-blue-600 rounded-t-md" />
                    )}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="sm:hidden relative w-11/12 mx-auto bg-white rounded">
          <select
            aria-label="Selected tab"
            className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
          >
            <option className="text-sm text-gray-600">inactive </option>
            <option className="text-sm text-gray-600">inactive </option>
            <option selected className="text-sm text-gray-600">
              Active{" "}
            </option>
            <option className="text-sm text-gray-600">inactive </option>
            <option className="text-sm text-gray-600">inactive </option>
          </select>
        </div> */}
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default TabBar;
