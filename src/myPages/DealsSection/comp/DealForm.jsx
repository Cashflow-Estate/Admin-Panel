import React, { Fragment } from 'react';
import { Col, FormGroup, Row } from 'reactstrap';
import { H6 } from '../../../AbstractElements';

const DealForm = ({ register, errors }) => {
    return (
        <Fragment>
            <Row>
                <Col sm={4}>
                    <FormGroup>
                        <h6 style={{color: "black"}}>{"Deal Title"}</h6>
                        <input className="form-control" type="text" name="title" placeholder="Deal name *" {...register('title',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <h6 style={{color: "black"}}>{"Deal Price"}</h6>
                        <input className="form-control" type="number" name="price" placeholder="Deal price *" {...register('price',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.price && 'Price is required'}</span>
                    </FormGroup>
                </Col>
             
            </Row>
        </Fragment>
    );
};

export default DealForm;
