import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import testi_img from "../../Assets/images/testi_img.png";
import clients_bg from "../../Assets/images/clients_bg.svg";

const Testimonial = () => {
  const options = {
    margin: 30,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    nav: false,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };

  return (
    <section className="clients-padding position-relative">
      <img className="img-fluid clients_top_img" src={clients_bg} alt="" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 align-items-center">
            <div className="testihead">
              <h1>What’s our Clients say</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 align-items-center">
            <div className="testislider position-relative">
              <OwlCarousel
                id="latest_product_slider"
                className="owl-carousel testimonial-carousel-main rounded_pro"
                {...options}
              >
                <div className="item">
                  <div className="slider_box">
                    <div className="slider_inner">
                      <div className="slider_left">
                        <img className="img-fluid" src={testi_img} alt="" />
                      </div>
                      <div className="slider_right">
                        <h2>Caption text or heading</h2>
                        <p>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry. Ipsum has been the industry's
                          standard dummy text ever since the when caption text
                          ever since the when an unknown.
                        </p>
                        <h4>
                          Maya Rao <br />
                          <span>California</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="slider_box">
                    <div className="slider_inner">
                      <div className="slider_left">
                        <img className="img-fluid" src={testi_img} alt="" />
                      </div>
                      <div className="slider_right">
                        <h2>2Caption text orheading</h2>
                        <p>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry. Ipsum has been the industry's
                          standard dummy text ever since the when caption text
                          ever since the when an unknown.
                        </p>
                        <h4>
                          Maya Rao <br />
                          <span>California</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="slider_box">
                    <div className="slider_inner">
                      <div className="slider_left">
                        <img className="img-fluid" src={testi_img} alt="" />
                      </div>
                      <div className="slider_right">
                        <h2>3Caption text orheading</h2>
                        <p>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry. Ipsum has been the industry's
                          standard dummy text ever since the when caption text
                          ever since the when an unknown.
                        </p>
                        <h4>
                          Maya Rao <br />
                          <span>California</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="slider_box">
                    <div className="slider_inner">
                      <div className="slider_left">
                        <img className="img-fluid" src={testi_img} alt="" />
                      </div>
                      <div className="slider_right">
                        <h2>4Caption text orheading</h2>
                        <p>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry. Ipsum has been the industry's
                          standard dummy text ever since the when caption text
                          ever since the when an unknown.
                        </p>
                        <h4>
                          Maya Rao <br />
                          <span>California</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="slider_box">
                    <div className="slider_inner">
                      <div className="slider_left">
                        <img className="img-fluid" src={testi_img} alt="" />
                      </div>
                      <div className="slider_right">
                        <h2>5Caption text orheading</h2>
                        <p>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry. Ipsum has been the industry's
                          standard dummy text ever since the when caption text
                          ever since the when an unknown.
                        </p>
                        <h4>
                          Maya Rao <br />
                          <span>California</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="slider_box">
                    <div className="slider_inner">
                      <div className="slider_left">
                        <img className="img-fluid" src={testi_img} alt="" />
                      </div>
                      <div className="slider_right">
                        <h2>6Caption text orheading</h2>
                        <p>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry. Ipsum has been the industry's
                          standard dummy text ever since the when caption text
                          ever since the when an unknown.
                        </p>
                        <h4>
                          Maya Rao <br />
                          <span>California</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
