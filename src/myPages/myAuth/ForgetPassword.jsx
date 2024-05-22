import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, H6, P, Image } from "../../AbstractElements";
import logoWhite from "../../assets/images/logo/logo.png";
import logoDark from "../../assets/images/logo/logo_dark.png";
import { SignIn } from "../../myConstants";
import axios from 'axios';
import styled from "styled-components";

const ForgetPassword = ({ logoClassMain }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOTPChange = (index, e) => {
    const value = e.target.value;
    if (value === "" && e.nativeEvent.inputType === "deleteContentBackward") {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    } else if (value.length === 1 && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text");
    const otpValues = pasteData.split("").filter((char) => !isNaN(parseInt(char)));
    document.querySelectorAll('.opt-text').forEach((input, index) => {
      if (otpValues[index]) {
        input.value = otpValues[index];
        handleOTPChange(index, { target: { value: otpValues[index] } });
      }
    });
    e.preventDefault();
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/forgot-password/request-otp`, { email })
      .then(response => {
        if (response.data.statusCode === 200) {
          setStep(2);
        } else {
          alert("Error sending email");
        }
      })
      .catch(error => {
        alert("Error sending email");
      });
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/forgot-password/verify-otp`, { email, otp: otp.join('') })
      .then(response => {
        if (response.data.statusCode === 200) {
          setStep(3);
        } else {
          alert("Error verifying OTP");
        }
      })
      .catch(error => {
        alert("Error verifying OTP");
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/forgot-password/reset-password`, { email, otp: otp.join(''), newPassword: password })
      .then(response => {
        if (response.data.statusCode === 200) {
          alert("Password reset successfully");
        } else {
          alert("Error resetting password");
        }
      })
      .catch(error => {
        alert("Error resetting password");
      });
  };

  return (
    <Fragment>
      <section>
        <Container className="p-0 login-page" fluid={true}>
          <Row className="m-0">
            <Col className="p-0">
              <div className="login-card">
                <div>
                  <div>
                    <Link
                      className={`logo ${logoClassMain ? logoClassMain : ""}`}
                      to={process.env.PUBLIC_URL}
                    >
                      <Image
                        attrImage={{
                          className: "img-fluid for-light",
                          src: logoWhite,
                          alt: "loginpage",
                          style: { width: "30%" }
                        }}
                      />
                      <Image
                        attrImage={{
                          className: "img-fluid for-dark",
                          src: logoDark,
                          alt: "loginpage",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="login-main">
                    <Form className="theme-form login-form">
                      {step === 1 && (
                        <>
                          <H4>Reset Your Password</H4>
                          <FormGroup>
                            <Label className="m-0 col-form-label">
                              Enter Your Email
                            </Label>
                            <Input
                              className="form-control"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </FormGroup>
                          <FormGroup className="text-end">
                            <Btn
                              attrBtn={{
                                className: "btn-block",
                                color: "success",
                                type: "submit",
                              }}
                              onClick={handleSendEmail}
                            >
                              Send
                            </Btn>
                          </FormGroup>
                        </>
                      )}
                      {step === 2 && (
                        <>
                          <FormGroup>
                            <Label>Enter OTP</Label>
                            <Row>
                              {[0, 1, 2, 3].map((index) => (
                                <Col key={index}>
                                  <Input
                                    id={`otp-${index}`}
                                    className="form-control text-center opt-text"
                                    type="text"
                                    maxLength="1"
                                    onChange={(e) => handleOTPChange(index, e)}
                                    onPaste={handlePaste}
                                  />
                                </Col>
                              ))}
                            </Row>
                          </FormGroup>
                          <FormGroup className="text-end">
                            <Btn
                              attrBtn={{
                                className: "btn-block",
                                color: "success",
                                type: "submit",
                              }}
                              onClick={handleVerifyOTP}
                            >
                              Verify OTP
                            </Btn>
                          </FormGroup>
                        </>
                      )}
                      {step === 3 && (
                        <>
                          <H6 attrH6={{ className: "mt-4" }}>
                            Create Your Password
                          </H6>
                          <FormGroup className="position-relative">
                            <Label className="col-form-label m-0">
                              New Password
                            </Label>
                            <div className="position-relative">
                              <Input
                                className="form-control"
                                type={togglePassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="*********"
                              />
                              <div
                                className="show-hide"
                                onClick={() => setTogglePassword(!togglePassword)}
                              >
                                <span className={togglePassword ? "" : "show"}></span>
                              </div>
                            </div>
                          </FormGroup>
                          <FormGroup>
                            <Label className="col-form-label m-0">
                              Retype Password
                            </Label>
                            <Input
                              className="form-control"
                              type="password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              required
                              placeholder="*********"
                            />
                          </FormGroup>
                          <FormGroup className="text-end">
                            <Btn
                              attrBtn={{
                                className: "btn-block",
                                color: "success",
                                type: "submit",
                              }}
                              onClick={handleResetPassword}
                            >
                              Done
                            </Btn>
                          </FormGroup>
                        </>
                      )}
                      <P attrPara={{ className: "text-start" }}>
                        Already have a password?
                        <Link to={`/`}>{SignIn}</Link>
                      </P>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ForgetPassword;