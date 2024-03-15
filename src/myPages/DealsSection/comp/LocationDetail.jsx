import React, { Fragment } from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { Doing, Done, ProjectRate, ProjectStatus } from "../../../Constant";
import { H6 } from "../../../AbstractElements";

const LocationDetail = ({ register,errors }) => {
  return (
    <Fragment>
         <Row>
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{"Street"}</H6>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Street"
                  {...register("Street", { required: true })}
                />
                {errors.street && (
                  <span className="text-danger">{errors.street.message}</span>
                )}
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{"City"}</H6>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="City"
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <span className="text-danger">{errors.city.message}</span>
                )}
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{"State"}</H6>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="State"
                  {...register("state", { required: true })}
                />
                {errors.state && (
                  <span className="text-danger">{errors.state.message}</span>
                )}
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{"Zip"}</H6>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Zip"
                  {...register("zip", { required: true })}
                />
                {errors.zip && (
                  <span className="text-danger">{errors.zip.message}</span>
                )}
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{"Country"}</H6>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Country"
                  {...register("country", { required: true })}
                />
                {errors.country && (
                  <span className="text-danger">{errors.country.message}</span>
                )}
              </FormGroup>
            </Col>
          </Row>
      {/* <Row>
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
      </Row> */}
    </Fragment>
  );
};

export default LocationDetail;
