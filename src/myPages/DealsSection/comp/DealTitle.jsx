import React, { Fragment } from 'react';
import { Col, FormGroup,  Label, Row } from 'reactstrap';

const DealTitle = ({ register, errors }) => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>{"Deal Title"}</Label>
                        <input className="form-control" type="text" name="title" placeholder="Deal name *" {...register('title',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default DealTitle;