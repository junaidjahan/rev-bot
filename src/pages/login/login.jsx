import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import BaseTextField from "../../components/base-components/base-text-field";
import { myAlert } from "../../helpers/helpers";
import { login } from "../../sdk/models/login.model";
import { loaderState } from "../../state";
function Login() {
  let navigate = useNavigate();
  const [state, setState] = useState(login);
  const [_, setLoader] = useRecoilState(loaderState);
  const handleChange = (e, name) => {
    setState((prevState) => ({
      ...prevState,
      [name]: e,
    }));
  };
  const baseURl = process.env.REACT_APP_API_URL;

  async function signIn() {
    setLoader(true);
    setTimeout(async () => {
      try {
        await axios.post(`${baseURl}/auth`, state);
        navigate("/home");
      } catch (e) {
        myAlert("Can't login.", "error");
      } finally {
        setLoader(false);
      }
    }, 3000);
  }
  const { register } = useForm();
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className=" text-white text-5xl pr-52 ">Login</h1>
      </div>
      <div className="">
        <div className="pt-6">
          <BaseTextField
            label="Email"
            type="email"
            onchange={(e) => {
              handleChange(e, "Email");
            }}
          />
        </div>
        <div className="pt-6">
          <BaseTextField
            label="Password"
            type="password"
            onchange={(e) => {
              handleChange(e, "Password");
            }}
          />
        </div>
        <div className="flex justify-end ">
          <button
            onClick={() => {
              signIn();
            }}
            className="w-30 mt-7 bg-blue-700 hover:bg-blue-800"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
