import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikErrorFocus from "formik-error-focus";
import logo from "../../Assets/images/signup_logo.png";
import * as Yup from "yup";
import axios from "../../ApiSetup/axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import {
  toggleLoader,
  updateToken,
  updateUser,
} from "../../redux/slices/userSlice";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    phone: "",
    password: "",
    eye1: false,
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .required("Please enter your Mobile number or Email address!"),
    //   .matches(/^([0-9\s\-+()]*)$/, "Invalid Mobile number!")
    //   .min(10, "Mobile number must be at least 10 digits!")
    //   .max(10, "Mobile number contains maximum 10 digits!"),
    // password: Yup.string()
    //   .required("Please enter your password!")
    //   .min(8, "Password must be at least 8 characters!"),
  });

  const handleSubmit = async (values, actions) => {
    const data = {
      params: {
        phone: values.phone,
        password: values.password,
      },
    };

    dispatch(toggleLoader());
    axios.post("login", data).then((res) => {
      dispatch(toggleLoader());
      if (
        res.data.result &&
        res.data.result.token &&
        res.data.result.userdata
      ) {
        Cookies.set("phone", values.phone);
        Cookies.set("password", values.password);

        dispatch(updateToken(res.data.result.token));
        dispatch(updateUser(res.data.result.userdata));
        navigate("/");
        toast.success("You're successfully logged in!");
      } else if (res.data.error) {
        // Assuming the API returns errors in the format provided
        const apiErrors = res.data.error;
        const formikErrors = {};

        Object.keys(apiErrors).forEach((field) => {
          // Take the first error message from each field's error array
          formikErrors[field] = apiErrors[field][0];
        });

        actions.setErrors(formikErrors);
        toast.error(res?.data?.error?.meaning);
      }
    });
  };

  return (
    <div className="col-lg-6 col-sm-12 sdivl">
      <div className="form_area login">
        <div className="logo_area">
          <Link to="/">
            <img src={logo} className="signup_logo" alt="Logo" />
          </Link>
        </div>
        <h1 className="form_title">LOG IN</h1>
        <p className="form_subtitle">
          Enter your credentials to access your account
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="formTag">
              <div className="field_area">
                <label htmlFor="phone">Email/Mobile No.</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter Here"
                  name="phone"
                />
                <p className="error text-danger">
                  <ErrorMessage name="phone" />
                </p>
                <div className="clearfix" />
              </div>
              <div className="row">
                <div className="password-in col field_area">
                  <label htmlFor="password">Password</label>
                  <Field
                    id="password-field"
                    type={values.eye1 ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter Here"
                    name="password"
                  />
                  <span
                    toggle="#password-field"
                    name="eye1"
                    className={
                      !values.eye1
                        ? "field-icon fa fa-fw fa-eye toggle-password"
                        : "field-icon fa fa-fw fa-eye-slash toggle-password"
                    }
                    onClick={() => setFieldValue("eye1", !values.eye1)}
                  />
                  <p className="error text-danger">
                    <ErrorMessage name="password" />
                  </p>
                </div>
              </div>
              <div className="frgtpsw text-right">
                <Link to="/">Forgot Password?</Link>
              </div>
              <div className="signup_bottom d-flex justify-content-between">
                <div className="signup_btns">
                  <button type="submit" className="login-submit">
                    Login
                  </button>
                </div>
                <div className="signup_text logintext">
                  <p>Don’t have an Account? </p>
                  <Link to="/signup">Signup</Link>
                </div>
              </div>
              <FormikErrorFocus
                offset={0}
                align={"top"}
                focusDelay={200}
                ease={"linear"}
                duration={500}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
