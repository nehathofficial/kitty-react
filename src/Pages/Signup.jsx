import React from "react";
import SignupForm from "../Components/Auth/SignupForm";
import FormRight from "../Components/Auth/FormRight";

const Signup = () => {
  return (
    <section className="signup">
      <div className="container">
        {/* <div className="row"> */}
          <div className="row signup_box">
            <SignupForm />
            <FormRight />
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Signup;
