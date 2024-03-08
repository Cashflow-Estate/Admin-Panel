import React, { Fragment } from 'react';
import { Col, FormGroup, Label, Row } from 'reactstrap';
import { ClientName } from '../../../Constant';
import { H6 } from '../../../AbstractElements';

const ClientNameClass = ({ register, errors }) => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <FormGroup>
                        <H6>{ClientName}</H6>
                        <input className="form-control" type="text" name="client_name" placeholder="Name client or company name" {...register('client_name', { required: true })} />
                        <span style={{ color: 'red' }}>{errors.client_name && 'Client Name is required'}</span>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ClientNameClass;