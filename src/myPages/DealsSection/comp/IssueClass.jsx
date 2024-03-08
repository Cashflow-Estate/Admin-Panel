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
               
            </Row>
        </Fragment>
    );
};

export default IssueClass;