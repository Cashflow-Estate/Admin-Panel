import React, { Fragment } from 'react';
import { Col, FormGroup, Input, Row } from 'reactstrap';
import { Doing, Done, ProgressLevel, ProjectRate, ProjectStatus } from '../../../Constant';
import { H6 } from '../../../AbstractElements';

const ProjectRateClass = ({ register }) => {
 
    const customers= [
        { id: 1, item: "All", filterValue: "All" },
        { id: 2, item: "Paid Member", filterValue: "Members" },
        {
          id: 3,
          item: "Paid Customer",
          filterValue: "Customers",
        },
        {
          id: 4,
          item: "Free Trial Member",
          filterValue: "Free",
        },
      ]
      const customersOptions = customers.map(customer => (
        <option key={customer.id} value={customer.filterValue}>{customer.item}</option>
    ));
    return (
        <Fragment>
            <Row>
                <Col sm="4">
                    <FormGroup>
                        <H6>{ProjectRate}</H6>
                        <input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" {...register('rate', { required: true })} />
                    </FormGroup>
                </Col>
                <Col sm="4">
                    <FormGroup>
                        <H6>{ProjectStatus}</H6>
                        <Input type="select" name="badge" placeholder="Select Status" className="form-control digits" required>
                            {customersOptions}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ProjectRateClass;



 
