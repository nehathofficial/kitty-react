import { useRef, useEffect } from "react";
import user_blank from "../Assets/images/user_blank.png";
import logo from "../Assets/images/logo.png";
import logo_bg from "../Assets/images/logo_bg.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { logout, toggleLoader } from "../redux/slices/userSlice"

const Header = () => {
  const userToken = useSelector((state) => state.user.auth_token);
  const user = useSelector((state) => state?.user?.user?.first_name);

  const toggleRef = useRef(null);
  const navbarRef = useRef(null);
  const dispatch = useDispatch();
  const location = useNavigate();

  useEffect(() => {
    const handleBodyClick = () => {
      const hasClass = navbarRef.current.classList.contains("show");
      if (hasClass && toggleRef.current) {
        toggleRef.current.click();
      }
    };

    // Add event listener to the document body
    document.body.addEventListener("click", handleBodyClick);

    // Cleanup event listener on component unmount
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const OnLogout = async () => {
    swal({
      text: "Are you sure you want to logout?",
      icon: "warning",
      dangerMode: true,
      buttons: ["No", "Yes"],
    }).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(toggleLoader());
        dispatch(logout());
        dispatch(toggleLoader());
        location("/login");
      }
    });
  };

  return (
    <>
      <header>
        <div className="container-fluid ">
          <nav className="navbar navbar-expand-lg  position-relative">
            <Link className="navbar-brand position-relative" to="/">
              <img src={logo} className="logo_img" alt="Logo" />
              <img src={logo_bg} className="logo_bg position-absolute" alt="" />
            </Link>
            
            <div className="d-flex justify-content-end usermenus">
              {userToken && (
                <div className="dropdown dropMenus">
                  <div
                    className="dropdown-toggle authmenu"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={user_blank} className="userplaceholder" alt="" />
                    &nbsp; <span className="userName">Hi, {user} &nbsp;</span>
                    <svg
                      className="arrowdown"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </div>

                  <ul
                    className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start auth_menus dropdown-transition"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Edit Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Subscription
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Create Kitty
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        My Kitty
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Change Password
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#"  onClick={OnLogout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button
              ref={toggleRef}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`collapse navbar-collapse ${user ? 'headafter' : ''}`} id="navbarNav" ref={navbarRef} >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      How it works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      faq
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link no-marg" to="#">
                      Contact Us
                    </Link>
                  </li>
                {!userToken && (
                    <>
                  <li className="nav-item sm-res">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item sm-res">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                      <li className="nav-item lg-res">
                        <Link className="nav-signup" to="/signup">
                          Signup
                        </Link>
                      </li>
                      <li className="nav-item lg-res">
                        <Link className="nav-login" to="/login">
                          Login
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>

          </nav>
        </div>
      </header>
      <div className="header-padding"></div>
    </>
  );
};

export default Header;
