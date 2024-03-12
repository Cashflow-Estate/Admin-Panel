import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, P, Image } from '../../AbstractElements';
import logoWhite from '../../assets/images/logo/logo.png';
import logoDark from '../../assets/images/logo/logo_dark.png';

const ResetPassword = ({ logoClassMain }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleRetypePassword, setToggleRetypePassword] = useState(false);

  return (
    <Fragment>
      <section>
        <Container fluid={true} className='p-0 login-page'>
          <Row className='m-0'>
            <Col xl='12 p-0'>
              <div className='login-card'>
                <div>
                  <div>
                    <Link className={`logo ${logoClassMain ? logoClassMain : ''}`} to={process.env.PUBLIC_URL}>
                      <Image attrImage={{ className: 'img-fluid for-light', src: logoWhite, alt: 'looginpage' }} />
                      <Image attrImage={{ className: 'img-fluid for-dark', src: logoDark, alt: 'looginpage' }} />
                    </Link>
                  </div>
                  <div className='login-main'>
                    <Form className='theme-form login-form'>
                      <H4>Create Your Password</H4>
                      <FormGroup className='position-relative'>
                        <Label className='m-0 col-form-label'>New Password</Label>
                        <div className='position-relative'>
                          <Input className='form-control' type={togglePassword ? 'text' : 'password'} name='login[password]' required placeholder='*********' />
                          <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                            <span className={togglePassword ? '' : 'show'}></span>
                          </div>
                        </div>
                      </FormGroup>
                      <FormGroup className='position-relative'>
                        <Label className='m-0 col-form-label'>Retype Password</Label>
                        <div className='position-relative'>
                          <Input className='form-control' type={toggleRetypePassword ? 'text' : 'password'} name='login[retypePassword]' required='' placeholder='*********' />
                          <div className='show-hide' onClick={() => setToggleRetypePassword(!toggleRetypePassword)}>
                            <span className={toggleRetypePassword ? '' : 'show'}></span>
                          </div>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Btn attrBtn={{ className: 'd-block w-100', color: 'primary', type: 'submit' }}>Done</Btn>
                      </FormGroup>
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

export default ResetPassword;
