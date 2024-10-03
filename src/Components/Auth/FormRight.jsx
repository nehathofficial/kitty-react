import logo from "../../Assets/images/signup_logo.png";
import signup_mid_img from "../../Assets/images/signup_mid_img.svg";
import { Link } from "react-router-dom";

const FormRight = () => {
  return (
    <div className="col-lg-6 col-sm-12 sdivr">
      <div className="signup_right">
        <div className="logo_area">
        <Link to='/'><img src={logo} className="signup_logo" alt="Logo" /></Link>
        </div>
        <div className="mid_area">
        <img src={signup_mid_img} className="signup_mid_img" alt="" />
        </div>
        <div className="text_area">
          <h1>The Best Kitty Platform</h1>
          <p>In publishing and graphic design, Lorem ipsum is a placehold ipsum may be used as a placeholder before final copy is available.</p>
          <button className="">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FormRight;
