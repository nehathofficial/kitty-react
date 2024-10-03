import { Link } from "react-router-dom";
import mainImg from "../../Assets/images/banner-main-img.png";
import membersImg from "../../Assets/images/members_img.png";
import membersGrpImg from "../../Assets/images/member-groupimg.svg";

const Banner = () => {
  return (
    <section className="banner">
        <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="banner-txt">
                  <h4 className="sub-title">The Best kitty platform</h4>
                  <h1 className="banner-heading">Create a kitty group and ask to join your friends across the world...</h1>
                  <p className="banner-desc">Lorem Ipsum is simply dummy text of the printing typesetting industry lorem Ipsum has been the industry.</p>
                  <div className="banner-btns">
                    <Link className="btn-getSt" to="#">Get Started</Link>
                    <Link className="btn-readMore" to="#">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="banner-image">
        <div className="overlay"></div>
          <img src={mainImg} className="main-image" />
          <div className="members-div">
            <img src={membersImg} className="members-img" />
            <p className="member-txt">Kitty Groups</p>
            <h2 className="member-count">15K</h2>
            <img src={membersGrpImg} className="members-group-img" />
          </div>                  
        </div>
    </section>
  )
}

export default Banner