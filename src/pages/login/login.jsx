import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import BaseTextField from "../../components/base-components/base-text-field";
function Login() {
  const { register } = useForm();
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className=" text-white text-5xl pr-52 ">Login</h1>
      </div>
      <div className="">
        <div>
          <BaseTextField
            label="Full Name"
            type="text"
            labelColor="white"
            required
          />
        </div>
        <div className="pt-6">
          <BaseTextField label="Email" type="email" />
        </div>
        <div className="pt-6">
          <BaseTextField label="Password" type="password" />
        </div>
        <div className="flex justify-end ">
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

export default Login;
