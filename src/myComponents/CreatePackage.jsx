import React, { Fragment, useState } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, CardFooter } from 'reactstrap';
import HeaderCard from './HeaderCard';
import { Breadcrumbs, Btn } from '../AbstractElements';

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
                                    <Label htmlFor="exampleFormControlInput1">Package Name</Label>
                                    <Input className="form-control" placeholder="Package Name" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">Price</Label>
                                    <Input className="form-control" placeholder="Package Price" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Plan Type</Label>
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
                                    <Label>Billing Cycle</Label>
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
                                    <Label>Description</Label>
                                    <Input type="textarea" className="form-control" rows="3" />
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
