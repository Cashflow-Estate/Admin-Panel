import React, { Fragment } from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
import {
  Doing,
  Done,
  ProgressLevel,
  ProjectRate,
  ProjectStatus,
} from "../../../Constant";
import { H6 } from "../../../AbstractElements";

const ProjectRateClass = ({ register }) => {
  const customers = [
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
  ];
  const customersOptions = customers.map((customer) => (
    <option key={customer.id} value={customer.filterValue}>
      {customer.item}
    </option>
  ));
  return (
    <Fragment>
      <Row>
  
      
      
      </Row>
    </Fragment>
  );
};

export default ProjectRateClass;
