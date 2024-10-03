import React from "react";
import FormRight from "../Components/Auth/FormRight";
import LoginForm from "../Components/Auth/LoginForm";

const Login = () => {
  return (
    <section className="signup">
      <div className="container">
        {/* <div className="row"> */}
          <div className="row signup_box">
            <LoginForm />
            <FormRight />
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Login;
