import React, { Fragment } from 'react';
import { Col, FormGroup, Input,  Row } from 'reactstrap';
import { Doing, Done, ProgressLevel, ProjectRate, ProjectStatus } from '../../../Constant';
import { H6 } from '../../../AbstractElements';

const ProjectRateClass = ({ register }) => {
    return (
        <Fragment>
            <Row>
                <Col sm="4">
                    <FormGroup>
                        <H6>{ProjectRate}</H6>
                        <input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" {...register('rate',{ required: true })} />
                    </FormGroup>
                </Col>
            
                <Col sm="4">
                    <FormGroup>
                        <H6>{ProjectStatus}</H6>
                        <Input type="select" name="badge" placeholder="Select Status" className="form-control digits" required>
                            <option value="Done">{Done}</option>
                            <option value="Doing">{Doing}</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ProjectRateClass;