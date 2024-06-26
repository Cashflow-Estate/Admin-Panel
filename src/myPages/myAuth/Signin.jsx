import React, { Fragment, useState, useEffect, useContext } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, H5, P, Spinner, Image } from "../../AbstractElements";
import {
  CreateNewAccount,
  EmailAddress,
  ForgotPassword,
  Password,
  RememberPassword,
  SignIn,
} from "../../myConstants";

import { Link, useNavigate } from "react-router-dom";
import man from "../../assets/images/dashboard/profile.png";
import CustomizerContext from "../../_helper/Customizer";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { setUserInfo } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import logoWhite from "../../assets/images/logo/logo.png";
import logoDark from "../../assets/images/logo/logo_dark.png";

const Signin = ({ selected, logoClassMain }) => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [togglePassword, setTogglePassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));
  const dispatch = useDispatch();
  const Data = [
    {
      id: 2,
      heading: "Loader 3",
      spinnerClass: "loader-3",
    },
  ];
  useEffect(() => {
    localStorage.setItem("profileURL", man);
    localStorage.setItem("Name", "Emay Walter");
  }, [value, name]);
  const loginAuth = async (e) => {
    e.preventDefault();
    setValue(man);
    setName("Emay Walter");
    setLoader(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/v1/user/signin`,
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        console.log(response)
        dispatch(setUserInfo(response.data.response.data));
        await new Promise((resolve) => setTimeout(resolve, 100));
        toast.success("Successfully logged in!..");
        setLoader(false);
        setTimeout(() => {
          navigate(`/dashboard`);
        }, 2000);
      } else {
        toast.error("You entered the wrong password or username!..");
      }
    } catch (error) {
      toast.error("You entered the wrong password or username!..");

      setLoader(false);
    }
  };

  return (
    <Fragment>
      <ToastContainer position="top-right" />
      <Container fluid={true}>
        {" "}
        <Row>
          <Col xs="12">
            <div className="login-card" style={{flexDirection: "column"}}>
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
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <h4 className="text-center">
                    {selected === "simpleLogin" ? "" : "Sign into your account"}
                  </h4>
                  <div className="position-relative form-group  link text-center">
                    {" "}
                    Or, <br /><Link to={`/signup`}>{CreateNewAccount}</Link>
                  </div>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input
                      className="form-control"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label className="col-form-label">{Password}</Label>
                    <div className="position-relative">
                      <Input
                        className="form-control"
                        type={togglePassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                      <div
                        className="show-hide"
                        onClick={() => setTogglePassword(!togglePassword)}
                      >
                        <span className={togglePassword ? "" : "show"}></span>
                      </div>
                    </div>
                  </FormGroup>
                  <div className="position-relative form-group mb-0">
                    <Link to={`/forgot-password`}>{ForgotPassword}</Link>
                    <Btn
                      attrBtn={{
                        color: "success",
                        className: "d-block w-100 mt-3",
                        onClick: (e) => loginAuth(e),
                      }}
                    >
                      {loader && (
                        <div className="loader-box">
                          <Spinner
                            attrSpinner={{ className: Data[0].spinnerClass }}
                          />
                        </div>
                      )}
                      {SignIn}
                    </Btn>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Signin;
