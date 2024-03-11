import React, { Fragment, useState } from 'react';
import { Col, FormGroup, Input, Row } from 'reactstrap';
import { Big, Comment, Issues, Medium, Resolved, Small } from '../../../Constant';
import DatePicker from 'react-datepicker';
import { H6 } from '../../../AbstractElements';
import { End, Start } from '../../../myConstants';

const IssueClass = ({ register }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [comment, setComment] = useState('');

    const handleStartDateChange = date => {
        setStartDate(date);
    };

    const handleEndDateChange = date => {
        setEndDate(date);
    };

    const handleCommentChange = event => {
        setComment(event.target.value);
    };

    return (
        <Fragment>
            <Row>
                <Col sm="4">
                    <FormGroup>
                        <H6>{Start}</H6>
                        <Col xl="5" sm="9">
                        <DatePicker className="form-control digits" selected={startDate} onChange={handleStartDateChange} />
                    </Col>
                    </FormGroup>
                </Col>
                <Col sm="4">
                    <FormGroup>
                        <H6>{"Monthly Cash Flow Range"}</H6>
                        <input className="form-control" type="text" name="monthly_cash" placeholder="Approximate monthly cashflow" {...register('monthly_cash', { required: true })} />
                        {/* <span style={{ color: 'red' }}>{errors.monthly_cash && 'Client Name is required'}</span> */}
                    </FormGroup>
                </Col>
                <Col sm="4">
                    <FormGroup>
                        <H6>{"Approx 20%-22%  Annual Return"}</H6>
                        <input className="form-control" type="text" name="annually_cash" placeholder="Enter annually profit " {...register('annually_cash', { required: true })} />
                        {/* <span style={{ color: 'red' }}>{errors.client_name && 'Client Name is required'}</span> */}
                    </FormGroup>
                </Col>
               
            </Row>
        </Fragment>
    );
};

export default IssueClass;