import React, { Fragment } from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { Doing, Done, ProjectRate, ProjectStatus } from "../../../Constant";
import { H6 } from "../../../AbstractElements";

const LocationDetail = ({ register }) => {
  return (
    <Fragment>
      <Row>
        <Col sm="4">
          <H6>{"Total Bed Rooms"}</H6>
          <FormGroup>
            <input
              className="form-control"
              type="number"
              name="bedRooms"
              placeholder="Total Bed Rooms"
              {...register("bedRooms", { required: true })}
            />
          </FormGroup>
        </Col>
        <Col sm="4">
          <H6>{"Area in Sqft"}</H6>
          <FormGroup>
            <input
              className="form-control"
              type="number"
              name="area"
              placeholder="Area in Sqft"
              {...register("area", { required: true })}
            />
          </FormGroup>
        </Col>
        <Col sm="4">
          <H6>{"Total Baths"}</H6>
          <FormGroup>
            <input
              className="form-control"
              type="number"
              name="baths"
              placeholder="Total Baths"
              {...register("baths", { required: true })}
            />
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LocationDetail;
