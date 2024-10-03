import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikErrorFocus from "formik-error-focus";
import logo from "../../Assets/images/signup_logo.png";
import * as Yup from "yup";
import axios from "../../ApiSetup/axios";
import { useDispatch } from "react-redux";
import { toggleLoader } from "../../redux/slices/userSlice";
import { toast } from "react-toastify";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    eye1: false,
    eye2: false,
    acceptTerms: false,
  };

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .required("Please enter your full name!")
      .matches(
        /^([A-Za-z\s]*)$/,
        "Full name must contain only letters and spaces!"
      )
      .min(3, "Full name must be at least 3 characters!")
      .max(50, "Full name must not be more than 50 characters!"),
    lastname: Yup.string()
      .required("Please enter your full name!")
      .matches(
        /^([A-Za-z\s]*)$/,
        "Full name must contain only letters and spaces!"
      )
      .min(3, "Full name must be at least 3 characters!")
      .max(50, "Full name must not be more than 50 characters!"),
    email: Yup.string()
      .required("Please enter your email!")
      .email("Please enter a valid email!"),
    phone: Yup.string()
      .trim()
      .required("Please enter your Mobile number!")
      .matches(/^([0-9\s\-+()]*)$/, "Invalid Mobile number!")
      .min(10, "Mobile number must be at least 10 digits!")
      .max(10, "Mobile number contains maximum 10 digits!"),
    password: Yup.string()
      .required("Please enter your password!")
      .min(8, "Password must be at least 8 characters!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    acceptTerms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("Required"),
  });

  const handleSubmit = async (values, actions) => {
    const data = {
      params: {
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        phone: values.phone.toString(),
        password: values.password,
      },
    };

    dispatch(toggleLoader());
    axios.post("register", data).then((res) => {
      dispatch(toggleLoader());
      
      if (res.data.result && res.data.result.otp) {
        navigate("/otp", {
          state: {
            phone: res?.data?.result?.phone,
            otp: res?.data?.result?.otp,
          },
        });
        toast.success(
          "Signup Successfully done! Please complete Otp verification."
        );
      } else if (res.data.error) {
        toast.error(res.data.error.message	);
        // Assuming the API returns errors in the format provided
        const apiErrors = res.data.error;
        const formikErrors = {};

        Object.keys(apiErrors).forEach((field) => {
          // Take the first error message from each field's error array
          formikErrors[field] = apiErrors[field][0];
        });

        actions.setErrors(formikErrors);
      }
    });
  };

  return (
    <div className="col-lg-6 col-sm-12 sdivl">
      <div className="form_area">
        <div className="logo_area">
          <Link to="/">
            <img src={logo} className="signup_logo" alt="Logo" />
          </Link>
        </div>
        <h1 className="form_title">CREATE AN ACCOUNT</h1>
        <p className="form_subtitle">
          Please fill in the below fields to create an account
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="formTag">
              <div className="row">
                <div className="col field_area">
                  <label htmlFor="firstname">First name</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="firstname"
                  />
                  <p className="error text-danger">
                    <ErrorMessage name="firstname" />
                  </p>
                  <div className="clearfix" />
                </div>
                <div className="col field_area">
                  <label htmlFor="lastname">Last name</label>
                  <Field type="text" className="form-control" name="lastname" />
                  <p className="error text-danger">
                    <ErrorMessage name="lastname" />
                  </p>
                  <div className="clearfix" />
                </div>
              </div>
              <div className="field_area">
                <label htmlFor="email">Email</label>
                <Field type="text" className="form-control" name="email" />
                <p className="error text-danger">
                  <ErrorMessage name="email" />
                </p>
                <div className="clearfix" />
              </div>
              <div className="field_area">
                <label htmlFor="phone">Mobile</label>
                <Field
                  type="number"
                  className="form-control"
                  placeholder="Mobile number"
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
                <div className="password-in col field_area">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <Field
                    id="confirm-password-field"
                    type={values.eye2 ? "text" : "password"}
                    className="form-control"
                    name="confirmPassword"
                  />
                  <span
                    toggle="#confirm-password-field"
                    name="eye2"
                    className={
                      !values.eye2
                        ? "field-icon fa fa-fw fa-eye toggle-password"
                        : "field-icon fa fa-fw fa-eye-slash toggle-password"
                    }
                    onClick={() => setFieldValue("eye2", !values.eye2)}
                  />
                  <p className="error text-danger">
                    <ErrorMessage name="confirmPassword" />
                  </p>
                </div>
              </div>
              <div className="position-relative">
                <div className="field_area agree_area">
                  <Field type="checkbox" name="acceptTerms" />
                  <label htmlFor="acceptTerms">I agree Terms & Condition</label>
                  <p className="error text-danger mt-2">
                    <ErrorMessage name="acceptTerms" />
                  </p>
                  <div className="clearfix" />
                </div>
              </div>
              <div className="signup_bottom d-flex justify-content-between">
                <div className="signup_btns">
                  <button type="submit" className="login-submit">
                    Sign up
                  </button>
                </div>
                <div className="signup_text">
                  <p>Already have an Account?</p>
                  <Link to="/login">Log In</Link>
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

export default SignupForm;
