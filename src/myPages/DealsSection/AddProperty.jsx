import React, { Fragment, useState } from 'react';
import { Tab, Tabs, Card, Form, Button, Container, Col, Row } from 'react-bootstrap';
import { Breadcrumbs } from '../../AbstractElements';
import { BsHouse, BsBuilding, BsFillPeopleFill } from 'react-icons/bs'; // Import icons for property types

const AddProperty = () => {
  const [propertyType, setPropertyType] = useState('single_family_home');
  const [address, setAddress] = useState('');
  const [totalUnits, setTotalUnits] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handlePropertyTypeChange = (type) => {
    setPropertyType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields
    if (!address.trim()) {
      setFormErrors({ address: 'Address is required' });
      return;
    }
    if (propertyType === 'apartment' && !totalUnits.trim()) {
      setFormErrors({ totalUnits: 'Total units is required' });
      return;
    }
    // Clear any previous form errors
    setFormErrors({});
    // Handle form submission here
    console.log({
      propertyType,
      address,
      totalUnits
    });
  };

  const handleAddProperty = () => {
    console.log('Add Property button clicked');
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Create a New Property" parent="Property" title="Add Property" />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Tabs defaultActiveKey="single_family_home" onSelect={handlePropertyTypeChange} className="justify-content-center">
              <Tab eventKey="single_family_home" title={<><BsHouse /> Single Family Home</>}>
                <Card className="mt-4">
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formPropertyAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          isInvalid={!!formErrors.address}
                        />
                        <Form.Control.Feedback type="invalid">{formErrors.address}</Form.Control.Feedback>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab>
              <Tab eventKey="condo" title={<><BsBuilding /> Condo</>}>
                <Card className="mt-4">
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formPropertyAddressCondo">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          isInvalid={!!formErrors.address}
                        />
                        <Form.Control.Feedback type="invalid">{formErrors.address}</Form.Control.Feedback>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab>
              <Tab eventKey="apartment" title={<><BsFillPeopleFill /> Apartment</>}>
                <Card className="mt-4">
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formPropertyAddressApartment">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          isInvalid={!!formErrors.address}
                        />
                        <Form.Control.Feedback type="invalid">{formErrors.address}</Form.Control.Feedback>
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
                        <Form.Control.Feedback type="invalid">{formErrors.totalUnits}</Form.Control.Feedback>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab>
            </Tabs>
            <div className="d-flex justify-content-center mt-4">
              <Button variant="primary" onClick={handleAddProperty}>Add Property</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddProperty;
