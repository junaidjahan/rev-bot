import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCameraRetro,
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faCoffee,
  faDigitalTachograph,
  faHeadphonesAlt,
  faKeyboard,
  faLaptop,
  faMobileAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import { useRecoilValue } from "recoil";
import "./App.css";
import TabBar from "./components/tab-bar/tab-bar";
import "./index.css";
import About from "./pages/About/About";
import Contactus from "./pages/contactus/Contactus";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import ProductReview from "./pages/reviews/product-review/product-review";
import Reviews from "./pages/reviews/reviews";
import SignUp from "./pages/signup/signup";
import "./state";
import { loaderState } from "./state";

function App() {
  library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faMobileAlt,
    faLaptop,
    faHeadphonesAlt,
    faKeyboard,
    faDigitalTachograph,
    faCameraRetro,
    faCheck,
    faCheckCircle,
    faTimesCircle
  );

  const loader = useRecoilValue(loaderState);

  return (
    <div>
      <TabBar />
      <div>
        <div className="">
          <Routes>
            {/* <Route path="/" element={<LoginSignip />}> */}
            <Route path="/rev-bot/login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            {/* </Route> */}
            <Route path="/rev-bot/home" element={<Home />} />
            <Route path="/rev-bot/reviews" element={<Reviews />}></Route>
            <Route path="/rev-bot/reviews/:id" element={<ProductReview />} />
            <Route path="/rev-bot/about" element={<About />}></Route>
            <Route path="/rev-bot/contactus" element={<Contactus />}></Route>
            <Route path="/rev-bot/about" element={<About />}></Route>
            <Route path="/rev-bot/contactus" element={<Contactus />}></Route>
          </Routes>
        </div>

        {loader && (
          <div className="infoi flex justify-center items-center">
            <BounceLoader loading={true} color="#0a4d7a" size={150} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
