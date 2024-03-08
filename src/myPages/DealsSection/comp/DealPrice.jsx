import React, { Fragment } from 'react';
import { Col, FormGroup,  Label, Row } from 'reactstrap';

const DealPrice = ({ register, errors }) => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <FormGroup>
                    <h6 style={{color: "black"}}>{"Deal Price"}</h6>

                        <input className="form-control" type="number" name="title" placeholder="Deal price *" {...register('price',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.title && 'Price is required'}</span>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default DealPrice;