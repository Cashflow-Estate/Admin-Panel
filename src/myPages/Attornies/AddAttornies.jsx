import React, { useState } from "react";
import { Fragment } from "react";
import { Col, FormGroup, Input, Row, Button } from "reactstrap";
import { Breadcrumbs, H6 } from "../../AbstractElements";

const AddNewAttorney = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log(formData); // For example, logging the form data
  };

  return (
    <Fragment>
      <Breadcrumbs  mainTitle="Create a new attorney" parent="Attorneys" title="Create Attorney" />

      <form onSubmit={handleSubmit}>
        <Row>
          <Col sm="4">
            <FormGroup>
              <H6 className="form-label">{"Name"}</H6>
              <Input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <H6 className="form-label">{"Email"}</H6>
              <Input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <H6 className="form-label">{"Phone"}</H6>
              <Input
                className="form-control"
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <H6 className="form-label">{"Company Name"}</H6>
              <Input
                className="form-control"
                type="text"
                placeholder="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <H6 className="form-label">{"Street"}</H6>
              <Input
                className="form-control"
                type="text"
                placeholder="Street"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <H6 className="form-label">{"City"}</H6>
              <Input
                className="form-control"
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <H6 className="form-label">{"State"}</H6>
              <Input
                className="form-control"
                type="text"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <H6 className="form-label">{"Zip"}</H6>
              <Input
                className="form-control"
                type="text"
                placeholder="Zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <H6 className="form-label">{"Country"}</H6>
              <Input
                className="form-control"
                type="text"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="success" type="submit">Submit</Button>
      </form>
    </Fragment>
  );
};

export default AddNewAttorney;
