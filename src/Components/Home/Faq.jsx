import crossimg from "../../Assets/images/croses.svg";
import faq_main_img from "../../Assets/images/faq_main_img.png";
import faq_small_img from "../../Assets/images/faq_small_img.png";
import faq_after from "../../Assets/images/faq_after.svg";

const Faq = () => {
  return (
    <section className="faq faq-padding position-relative">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 position-relative">
          <div className="faq-sm">
              <p className="rotate-text">Read Some <span>FAQ</span></p>
            </div>
          <img
              src={crossimg}
              className="cross-img"
              alt="Cross Image"
            />
            <div className="faq-text faq-lg">
              <p className="rotate-text">Read Some <span>FAQ</span></p>
            </div>
            <div className="main-img">
            <img
              src={faq_main_img}
              className="main-img img-fluid"
              alt="Main Image"
            />
            </div>
            
            <div className="small-img">
              <img
                src={faq_small_img}
                className="img-fluid"
                alt="Small Image"
              />
            </div>
            <div className="after-img">
              <img
                src={faq_after}
                className="img-fluid"
                alt="After Image"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="faq-right">
              <div className="faq-right-head">
                <h2>Frequently Asked Questions</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the and typesetting industry
                  the industry's R printer took a galley of type Ipsum is simply
                  dummy text of the.
                </p>
              </div>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="text-danger query">Q</span> Lorem ipsum dolor sit
                      amet the consectetur it incididunt?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
                      Lorem ipsum dolor sit amet, adipiscing eiusmod tempor
                      incididunt labore tempor labore dummy aliqua. consectetur
                      adipiscing eiusmod.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="text-danger">Q</span> Lorem ipsum dolor sit
                      amet the consectetur it adipiscing?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
                      Lorem ipsum dolor sit amet, adipiscing eiusmod tempor
                      incididunt labore tempor labore dummy aliqua. consectetur
                      adipiscing eiusmod.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span className="text-danger">Q</span> Lorem ipsum dolor sit
                      amet the consectetur?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
                      Lorem ipsum dolor sit amet, adipiscing eiusmod tempor
                      incididunt labore tempor labore dummy aliqua. consectetur
                      adipiscing eiusmod.
                    </div>
                  </div>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
