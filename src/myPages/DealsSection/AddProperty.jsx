import React, { Fragment, useState } from "react";
import {
  Tab,
  Tabs,
  Card,
  Form,
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import { Breadcrumbs } from "../../AbstractElements";
import { BsHouse, BsBuilding, BsFillPeopleFill } from "react-icons/bs";
import SimpleMdeReact from "react-simplemde-editor";
import UploadProjectFileClass from "./comp/UploadProjectFile";

const AddProperty = () => {
  const [propertyType, setPropertyType] = useState("single_family_home");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [totalUnits, setTotalUnits] = useState("");
  const [amountPerMonth, setAmountPerMonth] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [description, setDescription] = useState("");

  const handleChange = (value) => {
    setDescription(value);
  };

  const handlePropertyTypeChange = (type) => {
    setPropertyType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!city.trim()) {
      errors.city = "City is required";
    }
    if (!state.trim()) {
      errors.state = "State is required";
    }
    if (!country.trim()) {
      errors.country = "Country is required";
    }
    if (!zip.trim()) {
      errors.zip = "ZIP code is required";
    }

    if (propertyType === "apartment" && !totalUnits.trim()) {
      errors.totalUnits = "Total units is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    console.log({ propertyType, city, state, country, zip, totalUnits, description, amountPerMonth });
  };

  const handleAddProperty = () => {
    console.log("Add Property button clicked");
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Create a New Property"
        parent="Property"
        title="Add Property"
      />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Tabs
              defaultActiveKey="single_family_home"
              onSelect={handlePropertyTypeChange}
              className="justify-content-center"
            >
              <Tab
                eventKey="single_family_home"
                title={
                  <>
                    <BsHouse /> Single Family Home
                  </>
                }
              >
                <Card className="mt-4">
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formPropertyCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          isInvalid={!!formErrors.city}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formPropertyState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          isInvalid={!!formErrors.state}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formPropertyCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          isInvalid={!!formErrors.country}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.country}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formPropertyZip">
                        <Form.Label>ZIP Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter ZIP code"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                          isInvalid={!!formErrors.zip}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.zip}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formAmountPerMonth">
                        <Form.Label>Amount per Month</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter amount"
                          value={amountPerMonth}
                          onChange={(e) => setAmountPerMonth(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab>
              <Tab
                eventKey="condo"
                title={
                  <>
                    <BsBuilding /> Condo
                  </>
                }
              >
                <Card className="mt-4">
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formPropertyCityCondo">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          isInvalid={!!formErrors.city}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formPropertyStateCondo">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          isInvalid={!!formErrors.state}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formPropertyCountryCondo">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          isInvalid={!!formErrors.country}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.country}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formPropertyZipCondo">
                        <Form.Label>ZIP Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter ZIP code"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                          isInvalid={!!formErrors.zip}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.zip}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formAmountPerMonthCondo">
                        <Form.Label>Amount per Month</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter amount"
                          value={amountPerMonth}
                          onChange={(e) => setAmountPerMonth(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab>
              <Tab
                eventKey="apartment"
                title={
                  <>
                    <BsFillPeopleFill /> Apartment
                  </>
                }
              >
                <Card className="mt-4">
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formPropertyCityApartment">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          isInvalid={!!formErrors.city}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formPropertyStateApartment">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          isInvalid={!!formErrors.state}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formPropertyCountryApartment">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          isInvalid={!!formErrors.country}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.country}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formPropertyZipApartment">
                        <Form.Label>ZIP Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter ZIP code"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                          isInvalid={!!formErrors.zip}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.zip}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formTotalUnitsApartment">
                        <Form.Label>Total number of units</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter total units"
                          value={totalUnits}
                          onChange={(e) => setTotalUnits(e.target.value)}
                          isInvalid={!!formErrors.totalUnits}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.totalUnits}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formAmountPerMonthApartment">
                        <Form.Label>Amount per Month</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter amount"
                          value={amountPerMonth}
                          onChange={(e) => setAmountPerMonth(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab>
            </Tabs>
            <SimpleMdeReact
              id="editor_container_description"
              onChange={handleChange}
              value={description}
              options={{
                spellChecker: false,
              }}
            />
            <UploadProjectFileClass />
            <div className="d-flex justify-content-center mt-4">
              <Button variant="primary" onClick={handleAddProperty}>
                Add Property
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddProperty;
