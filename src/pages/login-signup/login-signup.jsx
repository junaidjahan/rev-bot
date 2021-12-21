import { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AuthButton from "../../components/auth-button";
import logo from "../../sign-up.jpg";
import Login from "../login/login";
import SignUp from "../signup/signup";

function LoginSignip() {
  return (
    <div className="md:grid grid-cols-2">
      <div className="flex items-center justify-end  ">
        <img src={logo} width="100%" className="h-large" alt="Nothing found" />
      </div>
      <div className=" h-full md:h-screen  rounded-t-3xl sm:rounded-t-none md:rounded-l-3xl  bg-gradient-to-tl from-blue-400 to-blue-600 ">
        <div className="flex justify-end mx-3 ">
          <AuthButton />
        </div>
        <div className="flex flex-col justify-center items-center h-5/6 ">
          <main>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
export default LoginSignip;
