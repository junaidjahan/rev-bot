import { Link } from "react-router-dom";
import BaseTextField from "../../components/base-components/base-text-field";
import Home from "../home/home";

function SignUp() {
  return (
    <div>
      <div className="mb-6 mx-7 text-left">
        <h1 className=" text-white text-5xl pr-36 ">Sign Up</h1>
      </div>
      <div>
        <div className="md:grid md:grid-cols-2 px-6 ">
          <div>
            <BaseTextField label="First Name" type="text" labelColor="white" />
          </div>
          <div>
            <BaseTextField label="Last Name" type="text" labelColor="white" />
          </div>
          <div>
            <BaseTextField label="Email" type="email" />
          </div>
          <div>
            <BaseTextField
              label="Phone Number"
              type="text"
              labelColor="white"
            />
          </div>

          <div>
            <BaseTextField label="Password" type="password" />
          </div>
          <div>
            <BaseTextField label=" Confirm Password" type="password" />
          </div>
        </div>

        <div className="flex justify-end mx-7">
          <Link to="/home">
            <button className="w-30 mt-7 bg-blue-700 hover:bg-blue-800">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
