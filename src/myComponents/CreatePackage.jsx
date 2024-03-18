import React, { Fragment, useState } from "react";
import { Card, CardBody, Form, Input, Row, Col } from "reactstrap";
import HeaderCard from "./HeaderCard";
import { H6, Btn } from "../AbstractElements";
import SimpleMdeReact from "react-simplemde-editor";

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
  const [value, setValue] = useState("");
  const handelChange = (e) => {
    setValue(e);
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
              <Col>
                <H6>{"Billing Cycle"}</H6>
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
              </Col>
            </Row>
            <Row className="pt-4">
              <Col>
                <H6>{"Description"}</H6>
                <SimpleMdeReact
             
                  id="editor_container"
                  options={{
                    spellChecker: false,
                  }}
                  onChange={handelChange}
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
