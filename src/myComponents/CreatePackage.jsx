import React, { Fragment, useState } from "react";
import { Card, CardBody, Form,  Input, Row, Col } from 'reactstrap';
import HeaderCard from "./HeaderCard";
import {H6, Btn } from "../AbstractElements";

const CreatePackage = () => {
    const [planType, setPlanType] = useState('basic'); // Default plan type is 'basic'
    const [billingCycle, setBillingCycle] = useState('monthly'); // Default billing cycle is 'monthly'

    const handlePlanTypeChange = (e) => {
        setPlanType(e.target.value);
    };

    const handleBillingCycleChange = (e) => {
        setBillingCycle(e.target.value);
    };

    return (
        <Fragment>
            <Card>
                <HeaderCard span1="Create a new plan" parent="Packages" title="New Plan" />
                <CardBody>
                    <Form>
                        <Row>
                            <Col md="4">
                                <H6>{'Package Name'}</H6>
                                <Input className="form-control" placeholder="Package Name" />
                            </Col>
                            <Col md="4">
                                <H6>{'Price'}</H6>
                                <Input className="form-control" type="number" placeholder="Package Price" />
                            </Col>
                            <Col md="4">
                                <H6>{'Plan Type'}</H6>
                                <Input type="select" value={planType} onChange={handlePlanTypeChange}>
                                    <option value="basic">Basic</option>
                                    <option value="pro">Pro</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row className="pt-4">
                            <Col md="4">
                                <H6>{'Billing Cycle'}</H6>
                                <div className="pt-2">
                                    <H6 check>
                                        <Input type="radio" name="billingCycle" value="monthly" checked={billingCycle === 'monthly'} onChange={handleBillingCycleChange} />{' '}
                                        Monthly
                                    </H6>
                                </div>
                                <div className="pt-2">
                                    <H6 check>
                                        <Input type="radio" name="billingCycle" value="yearly" checked={billingCycle === 'yearly'} onChange={handleBillingCycleChange} />{' '}
                                        Yearly
                                    </H6>
                                </div>
                            </Col>
                            <Col md="8" >
                                <H6>{'Description'}</H6>
                                <Input type="textarea" placeholder='Enter package details' className="form-control" rows="3" />
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
                <CardBody className="text-end">
                    <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }}>Create</Btn>
                    <Btn attrBtn={{ color: "secondary", type: "submit" }}>Cancel</Btn>
                </CardBody>
            </Card>
        </Fragment>
    );
};

export default CreatePackage;
