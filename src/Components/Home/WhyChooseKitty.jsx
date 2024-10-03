import arrowCircle from "../../Assets/images/arrow-cirlcle.png";
import mission from "../../Assets/images/mission.svg";
import vision from "../../Assets/images/vision.svg";
import focus from "../../Assets/images/focus.svg";

const WhyChooseKitty = () => {
  return (
    <section className="whyChooseUs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <div className="wcu_box">
              <h5 className="sub-title">Get to Know Us</h5>
              <h2 className="title">
                Why Should You Choose Kitty Among Others?
              </h2>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the and typesetting industry
                the industry's unknown printer took a galley of type Ipsum is
                simply dummy text of the and typesetting industry the industry's
                unknown printer took a galley of type description here.
              </p>
              <ul className="list">
                <li>
                  <img src={arrowCircle} className="arrowCircle" /> Caption text
                  will be shown here
                </li>
                <li>
                  <img src={arrowCircle} className="arrowCircle" /> Some heading
                  text
                </li>
                <li>
                  <img src={arrowCircle} className="arrowCircle" /> Abc
                  information text will be shown here
                </li>
                <li>
                  <img src={arrowCircle} className="arrowCircle" /> Text will be
                  shown here
                </li>
              </ul>
              <button className="readmore">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="wcu-right">
        <div className="wcu-rbox d-flex justify-content-end">
          <div className="card-box">
            <img
              src={mission}
              className="card-img-top mx-auto"
              alt="Our Mission"
            />
            <h5 className="card-title">Our Mission</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and caption types etting lorem Ipsum is simply.
            </p>
          </div>
          <div className="card-box wcu_card_sm">
            <img
              src={vision}
              className="card-img-top mx-auto"
              alt="Our Vision"
            />
            <h5 className="card-title">Our Vision</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and caption types etting lorem Ipsum is simply.
            </p>
          </div>
          <div className="card-box wcu_card_sm">
            <img
              src={focus}
              className="card-img-top mx-auto"
              alt="Our Focus"
            />
            <h5 className="card-title">Our Focus</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and caption types etting lorem Ipsum is simply.
            </p>
          </div>
        </div>
        <div className="wcu-rbox d-flex justify-content-end flex-wrap gap-3 wcu_card_lg">
          <div className="card-box">
            <img
              src={vision}
              className="card-img-top mx-auto"
              alt="Our Vision"
            />
            <h5 className="card-title">Our Vision</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and caption types etting lorem Ipsum is simply.
            </p>
          </div>
          <div className="card-box">
            <img
              src={focus}
              className="card-img-top mx-auto"
              alt="Our Focus"
            />
            <h5 className="card-title">Our Focus</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and caption types etting lorem Ipsum is simply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKitty;
