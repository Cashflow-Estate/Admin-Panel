import React, { Fragment, useEffect, useState } from "react";
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
import { Breadcrumbs, H6 } from "../../AbstractElements";
import { BsHouse, BsBuilding, BsFillPeopleFill } from "react-icons/bs";
import SimpleMdeReact from "react-simplemde-editor";
import UploadProjectFileClass from "./comp/UploadProjectFile";
import { FormGroup, Label } from "reactstrap";

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
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [sqFt, setSqFt] = useState("");
  const [hasGarage, setHasGarage] = useState(false);
  const [hasLawn, setHasLawn] = useState(false);
  useEffect(() => {
    // Scroll to the top of the page whenever the component updates
    window.scrollTo(0, 0);
  }, []);
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
    console.log({
      propertyType,
      city,
      state,
      country,
      zip,
      totalUnits,
      description,
      amountPerMonth,
      beds,
      baths,
      sqFt,
      hasGarage,
      hasLawn,
    });
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
                      <Row>
                        <Col sm="4">
                          <H6>{"Total Bed Rooms"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="bedRooms"
                              placeholder="Total Bed Rooms"
                              // {...register("bedRooms", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <H6>{"Area in Sqft"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="area"
                              placeholder="Area in Sqft"
                              // {...register("area", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <H6>{"Total Baths"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="baths"
                              placeholder="Total Baths"
                              // {...register("baths", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasLawn"
                                defaultChecked
                              />{" "}
                              Has Lawn
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasGarage"
                                defaultChecked
                              />{" "}
                              Has Garage
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasSecurity"
                                defaultChecked
                              />{" "}
                              Has Security
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12}>
                          <FormGroup>
                            <h6 style={{ color: "black" }}>
                              {"Prperty Details"}
                            </h6>
                            <input
                              className="form-control"
                              type="text"
                              name="title"
                              placeholder="Property Address *"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab>
              <Tab
                eventKey="town_home"
                title={
                  <>
                    <BsHouse />
                    Town Home
                  </>
                }
              >
                <Card className="mt-4">
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col sm="4">
                          <H6>{"Total Bed Rooms"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="bedRooms"
                              placeholder="Total Bed Rooms"
                              // {...register("bedRooms", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <H6>{"Area in Sqft"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="area"
                              placeholder="Area in Sqft"
                              // {...register("area", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <H6>{"Total Baths"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="baths"
                              placeholder="Total Baths"
                              // {...register("baths", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasLawn"
                                defaultChecked
                              />{" "}
                              Has Lawn
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasGarage"
                                defaultChecked
                              />{" "}
                              Has Garage
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasSecurity"
                                defaultChecked
                              />{" "}
                              Has Security
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12}>
                          <FormGroup>
                            <h6 style={{ color: "black" }}>
                              {"Prperty Details"}
                            </h6>
                            <input
                              className="form-control"
                              type="text"
                              name="title"
                              placeholder="Property Address *"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
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
                      <Row>
                        <Col sm="4">
                          <H6>{"Total Bed Rooms"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="bedRooms"
                              placeholder="Total Bed Rooms"
                              // {...register("bedRooms", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <H6>{"Area in Sqft"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="area"
                              placeholder="Area in Sqft"
                              // {...register("area", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <H6>{"Total Baths"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="baths"
                              placeholder="Total Baths"
                              // {...register("baths", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasLawn"
                                defaultChecked
                              />{" "}
                              Has Lawn
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasGarage"
                                defaultChecked
                              />{" "}
                              Has Garage
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasSecurity"
                                defaultChecked
                              />{" "}
                              Has Security
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12}>
                          <FormGroup>
                            <h6 style={{ color: "black" }}>
                              {"Prperty Details"}
                            </h6>
                            <input
                              className="form-control"
                              type="text"
                              name="title"
                              placeholder="Property Address *"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
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
                      <Row>
                        <Col sm="4">
                          <H6>{"Total Bed Rooms"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="bedRooms"
                              placeholder="Total Bed Rooms"
                              // {...register("bedRooms", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <H6>{"Area in Sqft"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="area"
                              placeholder="Area in Sqft"
                              // {...register("area", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <H6>{"Total Baths"}</H6>
                          <FormGroup>
                            <input
                              className="form-control"
                              type="number"
                              name="baths"
                              placeholder="Total Baths"
                              // {...register("baths", { required: true })}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasLawn"
                                defaultChecked
                              />{" "}
                              Has Lawn
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasGarage"
                                defaultChecked
                              />{" "}
                              Has Garage
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup check inline>
                            <Label check>
                              <input
                                type="checkbox"
                                name="hasSecurity"
                                defaultChecked
                              />{" "}
                              Has Security
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12}>
                          <FormGroup>
                            <h6 style={{ color: "black" }}>
                              {"Prperty Details"}
                            </h6>
                            <input
                              className="form-control"
                              type="text"
                              name="title"
                              placeholder="Property Address *"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <Form.Group controlId="formTotalUnitsApartment">
                            <Form.Label>Total number of units</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Enter total units *"
                              value={totalUnits}
                              onChange={(e) => setTotalUnits(e.target.value)}
                              isInvalid={!!formErrors.totalUnits}
                            />
                            <Form.Control.Feedback type="invalid">
                              {formErrors.totalUnits}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
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
