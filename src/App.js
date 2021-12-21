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
import "./App.css";
import TabBar from "./components/tab-bar/tab-bar";
import Home from "./pages/home/home";
import LoginSignip from "./pages/login-signup/login-signup";
import Login from "./pages/login/login";
import ProductReview from "./pages/reviews/product-review/product-review";
import Reviews from "./pages/reviews/reviews";
import SignUp from "./pages/signup/signup";
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
  return (
    <div>
      <TabBar />
      <Routes>
        <Route path="/" element={<LoginSignip />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="home" element={<Home />} />
        <Route path="reviews" element={<Reviews />}></Route>
        <Route path="reviews/:id" element={<ProductReview />} />
      </Routes>
    </div>
  );
}

export default App;
