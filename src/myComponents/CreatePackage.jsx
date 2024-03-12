import React, { Fragment, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Card, CardBody, Form, Input, Row, Col } from "reactstrap";
import HeaderCard from "./HeaderCard";
import { H6, Btn } from "../AbstractElements";

const CreatePackage = () => {
  const [planType, setPlanType] = useState("basic"); // Default plan type is 'basic'
  const [billingCycle, setBillingCycle] = useState("monthly"); // Default billing cycle is 'monthly'
  const [customBillingCycle, setCustomBillingCycle] = useState("");
  const [customBillingCycleValue, setCustomBillingCycleValue] = useState(1);
  const [description, setDescription] = useState(""); // State to hold rich text description

  const handlePlanTypeChange = (e) => {
    setPlanType(e.target.value);
  };

  const handleBillingCycleChange = (e) => {
    setBillingCycle(e.target.value);
  };

  const handleCustomBillingCycleChange = (e) => {
    setCustomBillingCycle(e.target.value);
  };

  const handleCustomBillingCycleValueChange = (e) => {
    setCustomBillingCycleValue(e.target.value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <Fragment>
      <Card>
        <HeaderCard
          span1="Create a new plan"
          parent="Packages"
          title="New Plan"
        />
        <CardBody>
          <Form>
            <Row>
              <Col md="4">
                <H6>{"Package Name"}</H6>
                <Input className="form-control" placeholder="Package Name" />
              </Col>
              <Col md="4">
                <H6>{"Price"}</H6>
                <Input
                  className="form-control"
                  type="number"
                  placeholder="Package Price"
                />
              </Col>
            </Row>
            <Row className="pt-4">
              <Col md="4">
                <H6>{"Billing Cycle"}</H6>
                <div className="pt-2">
                  <Input
                    type="select"
                    value={billingCycle}
                    onChange={handleBillingCycleChange}
                  >
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                    <option value="monthly">Monthly</option>
                    <option value="bi-monthly">Bi-Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="semi-annually">Semi-Annually</option>
                    <option value="annually">Annually</option>
                  </Input>
                </div>
        
              </Col>
              <Col md="8">
                <H6>{"Description"}</H6>
                <ReactQuill 
                  value={description} 
                  onChange={handleDescriptionChange} 
                  theme="snow" // You can change the theme if needed
                />
              </Col>
            </Row>
          </Form>
        </CardBody>
        <CardBody className="text-end">
          <Btn
            attrBtn={{ color: "success", className: "m-r-15", type: "submit" }}
          >
            Create
          </Btn>
          <Btn attrBtn={{ color: "secondary", type: "submit" }}>Cancel</Btn>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default CreatePackage;
