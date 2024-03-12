import React, { Fragment } from 'react';
import { Col, FormGroup, Row } from 'reactstrap';
import { H6 } from '../../../AbstractElements';

const DealAddress = ({ register, errors }) => {
    return (
        <Fragment>
            <Row>
                <Col sm={4}>
                    <FormGroup>
                        <h6 style={{color: "black"}}>{"City"}</h6>
                        <input className="form-control" type="text" name="city" placeholder="City name *" {...register('city',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.city && 'city is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <h6 style={{color: "black"}}>{"Contry"}</h6>
                        <input className="form-control" type="test" name="country" placeholder="Country name*" {...register('country',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.country && 'country is required'}</span>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <H6>{"Zip"}</H6>
                        <input className="form-control" type="number" name="zip" placeholder="Postal Code" {...register('zip', { required: true })} />
                        {/* <span style={{ color: 'red' }}>{errors.client_name && 'Client Name is required'}</span> */}
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default DealAddress;
