import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, CardFooter } from 'reactstrap';
import HeaderCard from './HeaderCard';
import { Btn } from '../AbstractElements';

const CreatePackage = () => {
    return (
        <Fragment>
            <Card>
                <HeaderCard title={"Create a new plan"} />
                <Form className="form theme-form">
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{"Package"}</Label>
                                    <Input className="form-control" placeholder="Package Name" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{"Price"}</Label>
                                    <Input className="form-control" placeholder="Package Price" />
                                </FormGroup>
                            </Col>
                        </Row>
                    
                        <Row>
                            <Col>
                                <div>
                                    <Label>{"Description"}</Label>
                                    <Input type="textarea" className="form-control" rows="3" />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter className="text-end">
                <Btn attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >{"Create"}</Btn>
                <Btn attrBtn={{ color: "secondary", type: "submit" }} >{"Cancel"}</Btn>
            </CardFooter>
                </Form>
            </Card>
        </Fragment>
    );
};

export default CreatePackage;