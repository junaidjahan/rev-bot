import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import BaseTextField from "../../components/base-components/base-text-field";
import { myAlert } from "../../helpers/helpers";
import { signup } from "../../sdk/models/singup/singup.model";
import { loaderState } from "../../state";

function SignUp() {
  let navigate = useNavigate();
  const [state, setState] = useState(signup);
  const [_, setLoader] = useRecoilState(loaderState);
  const handleChange = (e, name) => {
    setState((prevState) => ({
      ...prevState,
      [name]: e,
    }));
  };
  const baseURl = process.env.REACT_APP_API_URL;

  async function signUp() {
    setLoader(true);
    try {
      await axios.post(`${baseURl}/users`, state);
      myAlert("Signed Up succesfully", "success").then(() => {
        navigate("/home");
      });
    } catch (e) {
      myAlert("Error signing up", "error");
    } finally {
      setLoader(false);
    }
  }

  return (
    <div>
      <div className="mb-6 mx-7 text-left">
        <h1 className=" text-white text-5xl pr-36 ">Sign Up</h1>
      </div>
      <div>
        <div className="md:grid md:grid-cols-2 px-6 ">
          <div>
            <BaseTextField
              label="First Name"
              type="text"
              labelColor="white"
              onchange={(e) => {
                handleChange(e, "FirstName");
              }}
            />
          </div>
          <div>
            <BaseTextField
              label="Last Name"
              type="text"
              labelColor="white"
              onchange={(e) => {
                handleChange(e, "LastName");
              }}
            />
          </div>
          <div>
            <BaseTextField
              label="Email"
              type="email"
              onchange={(e) => {
                handleChange(e, "Email");
              }}
            />
          </div>
          <div>
            <BaseTextField
              label="Phone Number"
              type="text"
              labelColor="white"
              onchange={(e) => {
                handleChange(e, "PhoneNumber");
              }}
            />
          </div>
          <div>
            <BaseTextField
              label="Country"
              type="text"
              labelColor="white"
              onchange={(e) => {
                handleChange(e, "Country");
              }}
            />
          </div>

          <div>
            <BaseTextField
              label="Password"
              type="password"
              onchange={(e) => {
                handleChange(e, "Password");
              }}
            />
          </div>
        </div>

        <div className="flex justify-end mx-7">
          {/* <Link to="/home"> */}
          <button
            onClick={() => {
              signUp();
            }}
            className="w-30 mt-7 bg-blue-700 hover:bg-blue-800"
          >
            Sign Up
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
export default SignUp;
