import React, { Fragment, useState } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, CardFooter } from 'reactstrap';
import HeaderCard from './HeaderCard';
import { Breadcrumbs, Btn, H6 } from '../AbstractElements';

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
            <Breadcrumbs mainTitle="Create a new plan" parent="Packages" title="New Plan" />

            <Card>
                <Form className="form theme-form">
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <H6 htmlFor="exampleFormControlInput1">Package Name</H6>
                                    <Input className="form-control" placeholder="Package Name" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <H6 htmlFor="exampleFormControlInput1">Price</H6>
                                    <Input className="form-control" placeholder="Package Price" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <H6>Plan Type</H6>
                                    <Input type="select" value={planType} onChange={handlePlanTypeChange}>
                                        <option value="basic">Basic</option>
                                        <option value="pro">Pro</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <H6>Billing Cycle</H6>
                                    <div>
                                        <Label check>
                                            <Input type="radio" name="billingCycle" value="monthly" checked={billingCycle === 'monthly'} onChange={handleBillingCycleChange} />{' '}
                                            Monthly
                                        </Label>
                                    </div>
                                    <div>
                                        <Label check>
                                            <Input type="radio" name="billingCycle" value="yearly" checked={billingCycle === 'yearly'} onChange={handleBillingCycleChange} />{' '}
                                            Yearly
                                        </Label>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <H6>Description</H6>
                                    <Input type="textarea" placeholder='Enter package deatils' className="form-control" rows="3" />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter className="text-end">
                        <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }}>Create</Btn>
                        <Btn attrBtn={{ color: "secondary", type: "submit" }}>Cancel</Btn>
                    </CardFooter>
                </Form>
            </Card>
        </Fragment>
    );
};

export default CreatePackage;
