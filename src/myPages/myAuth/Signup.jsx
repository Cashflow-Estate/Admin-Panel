import React, { Fragment, useState } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P } from "../../AbstractElements";
import {
  AlreadyHaveAccount,
  ConfirmPassword,
  EmailAddress,
  Password,
  PhoneNumber,
} from "../../myConstants";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = ({ selected }) => {
  const [email, setEmail] = useState("zaidiabid51472@gmail.com");
  const [userName, setUsername] = useState("Abid Zaidi");
  const [password, setPassword] = useState("test123");
  const [confirmPassword, setConfirmPassword] = useState("test123");
  const [phoneNumber, setPhoneNumber] = useState("+92123456789");
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/users/register`,
        {
          email,
          userName,
          password,
          phoneNumber,
        }
      );
      // Handle success, maybe redirect or show a success message
      console.log(response.data); // Log response data
      // Store body in local storage
      if (response.data.statusCode === 200) {
        navigate("/otp-verification");
        localStorage.setItem(
          "signupData",
          JSON.stringify({
            email,
            userName,
            password,
            phoneNumber,
          })
        );
      }
    } catch (error) {
      // Handle error, maybe show an error message
      console.error("Error:", error);
    }
  };

  return (
    <Fragment>
      <Container fluid={true} className="p-0 login-page">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form" onSubmit={handleSignup}>
                  <H4>{selected === "simpleLogin" ? "" : "Sign Up Form"}</H4>
                  <P>{"Enter all required fields to signup"}</P>
                  <FormGroup>
                    <Label className="col-form-label">{"User Name"}</Label>
                    <Input
                      className="form-control"
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      value={userName}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input
                      className="form-control"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{PhoneNumber}</Label>
                    <Input
                      className="form-control"
                      type="text"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
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
                  <FormGroup className="position-relative">
                    <Label className="col-form-label">{ConfirmPassword}</Label>
                    <div className="position-relative">
                      <Input
                        className="form-control"
                        type={togglePassword ? "text" : "password"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
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
                    <Btn
                      attrBtn={{
                        color: "success",
                        className: "btn d-block w-100",
                        type: "submit",
                      }}
                    >
                      Done
                    </Btn>
                  </FormGroup>
                  <div className="position-relative form-group mb-0 mt-2 link">
                    <Link to={`/`}>{AlreadyHaveAccount}?</Link>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Signup;

// import React, { Fragment, useState, useEffect, useContext } from "react";
// import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
// import { Btn, H4, P } from "../../AbstractElements";
// import {
//   AlreadyHaveAccount,
//   ConfirmPassword,
//   EmailAddress,
//   Password,
//   PhoneNumber
// } from "../../myConstants";

// import { Link, useNavigate } from "react-router-dom";
// import man from "../../assets/images/dashboard/profile.png";

// import CustomizerContext from "../../_helper/Customizer";
// // import OtherWay from "./OtherWay";
// import { ToastContainer, toast } from "react-toastify";

// const Signup = ({ selected }) => {
//   const [email, setEmail] = useState("test@gmail.com");
//   const [username, setUsername] = useState("Abid Zaidi");
//   const [password, setPassword] = useState("test123");
//   const [confirmPassword, setConfirmPassword] = useState("test123");
//   const [phoneNumber, setPhoneNumber] = useState("+92123456789");
//   const [togglePassword, setTogglePassword] = useState(false);

//   return (
//     <Fragment>
//       <Container fluid={true} className="p-0 login-page">
//         <Row>
//           <Col xs="12">
//             <div className="login-card">
//               <div className="login-main login-tab">
//                 <Form className="theme-form">
//                   <H4>{selected === "simpleLogin" ? "" : "Sign Up Form"}</H4>
//                   <P>{"Enter all required fields to signup"}</P>
//                   <FormGroup>
//                     <Label className="col-form-label">{"User Name"}</Label>
//                     <Input
//                       className="form-control"
//                       type="text"
//                       onChange={(e) => setUsername(e.target.value)}
//                       value={username}
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label className="col-form-label">{EmailAddress}</Label>
//                     <Input
//                       className="form-control"
//                       type="email"
//                       onChange={(e) => setEmail(e.target.value)}
//                       value={email}
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label className="col-form-label">{PhoneNumber}</Label>
//                     <Input
//                       className="form-control"
//                       type="email"
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                       value={phoneNumber}
//                     />
//                   </FormGroup>
//                   <FormGroup className="position-relative">
//                     <Label className="col-form-label">{Password}</Label>
//                     <div className="position-relative">
//                       <Input
//                         className="form-control"
//                         type={togglePassword ? "text" : "password"}
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                       />
//                       <div
//                         className="show-hide"
//                         onClick={() => setTogglePassword(!togglePassword)}
//                       >
//                         <span className={togglePassword ? "" : "show"}></span>
//                       </div>
//                     </div>
//                   </FormGroup>
//                   <FormGroup className="position-relative">
//                     <Label className="col-form-label">{ConfirmPassword}</Label>
//                     <div className="position-relative">
//                       <Input
//                         className="form-control"
//                         type={togglePassword ? "text" : "password"}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         value={confirmPassword}
//                       />
//                       <div
//                         className="show-hide"
//                         onClick={() => setTogglePassword(!togglePassword)}
//                       >
//                         <span className={togglePassword ? "" : "show"}></span>
//                       </div>
//                     </div>
//                   </FormGroup>
//                   <FormGroup>
//                     <Btn attrBtn={{ color: 'success', className: 'btn d-block w-100', type: 'submit' }}>Done</Btn>
//                   </FormGroup>
//                   <div className="position-relative form-group mb-0 mt-2 link">
//                     <Link to={`/`}>
//                       {AlreadyHaveAccount}?
//                     </Link>
//                   </div>
//                 </Form>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <ToastContainer />
//     </Fragment>
//   );
// };

// export default Signup;
