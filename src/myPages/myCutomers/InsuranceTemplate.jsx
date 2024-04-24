import React, { useState } from 'react';
import { Fragment } from 'react';
import { Col, FormGroup, Input, Row, Button, Card, CardHeader, CardBody, Form } from 'reactstrap';
import { Breadcrumbs, H4 } from '../../AbstractElements';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const InsuranceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    ownerName: '',
    primaryContact: '',
    ownerPhone: '',
    ownerEmail: '',
    ownerAddress: '',
    propertyAddress: '',
    roofAge: '',
    renovations: '',
    rentalTerm: '',
  });

  const onSubmit = (data) => {
    console.log(data); // Here, you can handle the submission logic
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigation = useNavigate();
  const handleAddAgent = () => {
    navigation("/add-agent");
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Insurance Form" parent="CRM" title="Insurance" />
      <Button color="success" onClick={handleAddAgent}>
       Create Agent
      </Button>{" "}
      <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm={4}>
                <FormGroup>
                  <h6 style={{ color: 'black' }}>Owner Name(s)</h6>
                  <Input
                    type="text"
                    name="ownerName"
                    placeholder="Owner Name"
                    onChange={handleChange}
                    {...register('ownerName', { required: true })}
                    value={formData.ownerName}
                  />
                  {errors.ownerName && <span style={{ color: 'red' }}>This field is required</span>}
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <h6 style={{ color: 'black' }}>Primary Contact for Entity</h6>
                  <Input
                    type="text"
                    name="primaryContact"
                    placeholder="Primary Contact"
                    onChange={handleChange}
                    {...register('primaryContact')}
                    value={formData.primaryContact}
                  />
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <h6 style={{ color: 'black' }}>Owner's Phone</h6>
                  <Input
                    type="tel"
                    name="ownerPhone"
                    placeholder="Owner's Phone"
                    onChange={handleChange}
                    {...register('ownerPhone', { required: true })}
                    value={formData.ownerPhone}
                  />
                  {errors.ownerPhone && <span style={{ color: 'red' }}>This field is required</span>}
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <h6 style={{ color: 'black' }}>Owner's Email Address</h6>
                  <Input
                    type="email"
                    name="ownerEmail"
                    placeholder="Owner's Email Address"
                    onChange={handleChange}
                    {...register('ownerEmail', { required: true })}
                    value={formData.ownerEmail}
                  />
                  {errors.ownerEmail && <span style={{ color: 'red' }}>This field is required</span>}
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <h6 style={{ color: 'black' }}>Owner's Mailing Address</h6>
                  <Input
                    type="text"
                    name="ownerAddress"
                    placeholder="Owner's Mailing Address"
                    onChange={handleChange}
                    {...register('ownerAddress', { required: true })}
                    value={formData.ownerAddress}
                  />
                  {errors.ownerAddress && <span style={{ color: 'red' }}>This field is required</span>}
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <h6 style={{ color: 'black' }}>Property Location Address</h6>
                  <Input
                    type="text"
                    name="propertyAddress"
                    placeholder="Property Location Address"
                    onChange={handleChange}
                    {...register('propertyAddress', { required: true })}
                    value={formData.propertyAddress}
                  />
                  {errors.propertyAddress && <span style={{ color: 'red' }}>This field is required</span>}
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <h6 style={{ color: 'black' }}>Age of Roof</h6>
                  <Input
                    type="text"
                    name="roofAge"
                    placeholder="Age of Roof"
                    onChange={handleChange}
                    {...register('roofAge')}
                    value={formData.roofAge}
                  />
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <h6 style={{ color: 'black' }}>Any Immediate Renovations?</h6>
                  <Input
                    type="textarea"
                    name="renovations"
                    placeholder="Any Immediate Renovations Prior to Renting Home?"
                    onChange={handleChange}
                    {...register('renovations')}
                    value={formData.renovations}
                  />
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <h6 style={{ color: 'black' }}>Rental Term</h6>
                  <Input
                    type="select"
                    name="rentalTerm"
                    onChange={handleChange}
                    {...register('rentalTerm')}
                    value={formData.rentalTerm}
                  >
                    <option value="">Select Rental Term</option>
                    <option value="annual">Annual Rental</option>
                    <option value="weekly">Weekly Rental</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <div className="mt-3">
              <Button type="submit" color="primary">
                Submit
              </Button>{' '}
              <Button type="button" color="warning">
                Cancel
              </Button>
            </div>
          </CardBody>
        </Card>
      </Form>
    </Fragment>
  );
};

export default InsuranceForm;
