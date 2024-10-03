import dotted_line from "../../Assets/images/dotted_line.png";
import join_with_us from "../../Assets/images/join-with-us.svg";
import create_kitty from "../../Assets/images/create-kitty.svg";
import invite_friends from "../../Assets/images/invite-friends.svg";
import circle_overlaps from "../../Assets/images/circle-overlaps.svg";
import hiw_after from "../../Assets/images/hiw_after.svg";
import hiw_after2 from "../../Assets/images/hiw_after2.svg";

const HowItWorks = () => {
  return (
    <section className="howitworks section-padding">
    <img src={hiw_after} className="hiw_after" />
    <img src={hiw_after2} className="hiw_after2" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="head-area text-center">
              <h2>How It Works</h2>
              <img src={dotted_line} className="dot-line" />
              <p>
              Lorem Ipsum is simply dummy text of the and typesetting industry the industry's unknown printer took a galley of type Ipsum is simply dummy text of the.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center hiw-boxes">
            <img src={circle_overlaps} className="circle_overlaps" />
          <div className="col-md-4 col-sm-4 d-flex align-items-stretch">
            <div className="cards text-left">
              <img
                src={join_with_us}
                className="cards-img-top"
                alt="Join with us"
              />
              <div className="cards-body">
                <h5 className="cards-title">Join with us</h5>
                <p className="cards-text">
                  Lorem Ipsum is simply dummy text of the printing and caption
                  typesetting industry. Lorem Ipsum is simply caption.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 d-flex align-items-stretch">
            <div className="cards text-left">
              <img
                src={create_kitty}
                className="cards-img-top"
                alt="Create a Kitty"
              />
              <div className="cards-body">
                <h5 className="cards-title">Create a Kitty</h5>
                <p className="cards-text">
                  Lorem Ipsum is simply dummy text of the printing and caption
                  typesetting industry. Lorem Ipsum is simply caption.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 d-flex align-items-stretch">
            <div className="cards text-left">
              <img
                src={invite_friends}
                className="cards-img-top"
                alt="Invite your friends"
              />
              <div className="cards-body">
                <h5 className="cards-title">Invite your friends</h5>
                <p className="cards-text">
                  Lorem Ipsum is simply dummy text of the printing and caption
                  typesetting industry. Lorem Ipsum is simply caption.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hiw-bottom text-center">
          <h3>Want To Create Or Join A Group On Kitty?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the and typesetting industry the
            industry's unknown printer took a galley of type Ipsum is simply
            dummy text of the.
          </p>
          <button className="readmore">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
