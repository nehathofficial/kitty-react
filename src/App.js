import "./Styles/css/bootstrap.css";
import "./Styles/css/bootstrap-reboot.css";
import "./Styles/css/style.css";
import "./Styles/css/responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ReduxHome from "./Pages/ReduxHome";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Otp from "./Pages/Otp";
import Dummy from "./Pages/Dummy";
import Loader from "./Layout/Loader";

function App() {
  return (
    <>
    <Loader />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/redux-home" element={<ReduxHome />} />
          <Route path="/dummy" element={<Dummy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
