import React, { Fragment, useState, useEffect } from 'react';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Btn, H4 } from '../../AbstractElements';
import axios from 'axios';

const OTP = ({ logoClassMain }) => {
  const [otpValues, setOTPValues] = useState(['', '', '', '']);

  useEffect(() => {
    const storedData = localStorage.getItem('signupData');
    if (storedData) {
      const { email, username, password, phoneNumber } = JSON.parse(storedData);
      // You can perform any necessary actions with the stored data here
    }
  }, []);

  const handleOTPChange = (index, e) => {
    const value = e.target.value;
    const newOTPValues = [...otpValues];
    newOTPValues[index] = value;
    setOTPValues(newOTPValues);

    if (value === '' && e.nativeEvent.inputType === 'deleteContentBackward') {
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
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('text');
    const otpValues = pasteData.split('').filter((char) => !isNaN(parseInt(char)));
    otpValues.forEach((value, index) => {
      if (index < 4) {
        const input = document.getElementById(`otp-${index}`);
        if (input) {
          input.value = value;
          handleOTPChange(index, { target: { value } });
        }
      }
    });
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otp = otpValues.join('');
    const storedData = localStorage.getItem('signupData');
    if (storedData && otp.length === 4) {
      const { email, userName, password, phoneNumber } = JSON.parse(storedData);
      const requestBody = {
        email,
        userName, 
        password,
        phoneNumber,
        otp,
      };

      try {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/otp`, requestBody);

        // Assuming the response contains necessary information about success/error
        if (response.status === 200) {
          console.log('OTP verified successfully');
        } else {
          console.error('Failed to verify OTP');
        }
      } catch (error) {
        console.error('Error occurred while verifying OTP:', error);
      }
    } else {
      console.error('Invalid OTP or signup data is missing');
    }
  };

  return (
    <Fragment>
      <section>
        <Container className="p-0 login-page" fluid={true}>
          <Row className="m-0">
            <Col className="p-0">
              <div className="login-card">
                <div>
                  <div className="login-main">
                    <Form className="theme-form login-form" onSubmit={handleSubmit}>
                      <FormGroup className="mb-4 mt-4">
                        <span className="reset-password-link">
                          If don't receive OTP?{' '}
                          <a className="btn-link text-danger" href="#javascript">
                            Resend
                          </a>
                        </span>
                      </FormGroup>
                      <FormGroup>
                        <Label>Enter OTP</Label>
                        <Row>
                          {otpValues.map((value, index) => (
                            <Col key={index}>
                              <Input
                                id={`otp-${index}`}
                                className="form-control text-center opt-text"
                                type="text"
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleOTPChange(index, e)}
                                onPaste={handlePaste}
                              />
                            </Col>
                          ))}
                        </Row>
                      </FormGroup>
                      <Btn  type="submit" className="btn-solid btn-custom success">
                        Verify OTP
                      </Btn>
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

export default OTP;
