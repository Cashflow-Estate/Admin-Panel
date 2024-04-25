import React from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { P } from '../../AbstractElements';

const Footer = () => {
  //  footer-fix
  return (
    <Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md="12" className="footer-copyright text-center">
            <P attrPara={{ className: "mb-0" }}>
        <span style={{ color: "black" }}>©</span> 
        <span style={{ color: "black" }}>Copyright 2024</span>-- 
        <span style={{ color: "green" }}>Cash-Flow-Innovator</span>
      </P>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

export default Footer;