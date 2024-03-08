import React, { Fragment } from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { Doing, Done, ProjectRate, ProjectStatus } from "../../../Constant";
import { H6 } from "../../../AbstractElements";

const LocationDetail = ({ register }) => {
  return (
    <Fragment>
      <H6>{"Property Details"}</H6>
      <Row>
        <Col sm="4">
          <FormGroup>
            <input
              className="form-control"
              type="number"
              name="rate"
              placeholder="Total Bed Rooms"
              {...register("detail", { required: true })}
            />
          </FormGroup>
        </Col>
        <Col sm="4">
          <FormGroup>
            <input
              className="form-control"
              type="number"
              name="rate"
              placeholder="Are in Sqft"
              {...register("detail", { required: true })}
            />
          </FormGroup>
        </Col>
        <Col sm="4">
          <FormGroup>
            <input
              className="form-control"
              type="number"
              name="rate"
              placeholder="Total Baths"
              {...register("detail", { required: true })}
            />
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LocationDetail;
