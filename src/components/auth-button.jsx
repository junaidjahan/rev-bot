import { Link, useLocation } from "react-router-dom";

function AuthButton() {
  const location = useLocation();
  if (location.pathname === "/login") {
    return (
      <Link to="signup">
        <h1 className="mx-2 mt-7 px-4 py-1 rounded-full text-lg text-white  hover:bg-white hover:bg-opacity-20">
          Sign up
        </h1>
      </Link>
    );
  } else {
    return (
      <Link to="login">
        <h1 className="mx-2 mt-7 px-4 py-1 rounded-full text-lg text-white  hover:bg-white hover:bg-opacity-20">
          Login
        </h1>
      </Link>
    );
  }
}

export default AuthButton;
