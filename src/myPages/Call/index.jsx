import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, CardBody, Form, Input, Row, Col, FormGroup, Button } from "reactstrap";
import HeaderCard from "../../myComponents/HeaderCard";
import { Breadcrumbs, H6 } from "../../AbstractElements";
import SimpleMdeReact from "react-simplemde-editor";

const Call = () => {
  const [description, setDescription] = useState(""); // State to hold rich text description

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted!");
  };
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Call" parent="Call" title="Schedule a Meet" />

      <Card>
      
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="4">
                <FormGroup>
                  <H6 for="name">Name</H6>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <H6 for="email">Email</H6>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
              </Col>
              {/* <Col md="4">
                <FormGroup>
                  <H6 for="phoneNumber">Phone Number</H6>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </FormGroup>
              </Col> */}
            </Row>
            <Row>
              
            <Col md="4">
                <FormGroup>
                  <H6 for="time">Time</H6>
                  <Input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <H6 for="time">Time</H6>
                  <Input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
        
            <Row>
            <Col md="8">
            <FormGroup>

                <H6>{"Description"}</H6>
                <SimpleMdeReact
             
             id="editor_container"
             options={{
               spellChecker: false,
             }}
             onChange={handleDescriptionChange}
           />
             
                </FormGroup>

              </Col>
            </Row>
            <Row>
              <Col>
                <Button color="success" type="submit">Schedule Call</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default Call;
