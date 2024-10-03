import React, { useState } from "react";
import Layout from "../Layout/Layout";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../ApiSetup/axios";
import { useDispatch } from "react-redux";
import { toggleLoader } from "../redux/slices/userSlice";
import { toast } from "react-toastify";

const Otp = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const phone = location?.state?.phone;
  const temp = location?.state?.otp;
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    if (otp && otp.length == 6) {
      const data = {
        params: {
          phone: phone,
          otp: otp,
        },
      };

      dispatch(toggleLoader());
      setOtp("");
      axios.post("register-verify-otp", data).then((res) => {
        dispatch(toggleLoader());
        if (
          res.data.result &&
          res.data.result.token &&
          res.data.result.userdata
        ) {
          navigate("/login");
          toast.success("Verification completed! Please login.");
        } else {
          toast.error(res?.data?.error?.meaning);
        }
      });
    } else {
      toast.error("Please enter valid and 6 digits");
    }
  };

  const resendOtp = () => {
    const data = {
      params: {
        phone: phone,
      },
    };

    dispatch(toggleLoader());
    setOtp("");
    axios.post("register-resend-otp", data).then((res) => {
      dispatch(toggleLoader());
      if (res.data.result && res.data.result.phone && res.data.result.otp) {
        //alert("OTP resent.");

        toast.success("OTP successfully resent!");
      } else {
        toast.error(res?.data?.error?.meaning);
      }
    });
  };

  return (
    <Layout>
      <section className="otp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="otp_area">
                <h1>otp VERIFICATION</h1>
                <p className={`subtitle ${temp}`}>
                  Code has been sent! <span>mobile no. +91 {phone}</span>
                </p>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderInput={(props) => (
                    <input {...props} className="otpField" />
                  )}
                  inputType="number"
                  shouldAutoFocus="true"
                />
                <div className="otpBtn text-center">
                  <button type="submit" onClick={handleSubmit}>
                    Submit
                  </button>
                  <p>
                    Didn’t receive the OTP?{" "}
                    <span
                      className="cursorPointer resendbtn"
                      onClick={resendOtp}
                    >
                      Resend OTP
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Otp;
