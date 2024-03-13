import React, { Fragment, useRef } from "react";
import { Btn, H4, H5, H6, Image, P } from "../../../AbstractElements";
import { useForm } from "react-hook-form";
import { FaPencilAlt } from 'react-icons/fa';
import {
  Row,
  Col,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import {
  EditProfile,
  UpdateProfile,
  FirstName,
  LastName,
  EmailAddress,
  Password,
  ChangePassword,
  ProfileImage,
  Address,
  City,
  PostalCode,
  Country,
} from "../../../Constant";
import { Link } from "react-router-dom";

const EditMyProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onEditSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    // Trigger click on file input when image is clicked
    fileInputRef.current.click();
  };

  return (
    <Fragment>
      <Form className="card" onSubmit={handleSubmit(onEditSubmit)}>
        <CardHeader>
          <H4 attrH4={{ className: "card-title mb-0" }}>{EditProfile}</H4>
          <div className="card-options">
            <a className="card-options-collapse" href="#javascript">
              <i className="fe fe-chevron-up"></i>
            </a>
            <a className="card-options-remove" href="#javascript">
              <i className="fe fe-x"></i>
            </a>
          </div>
        </CardHeader>
        <CardBody>
        <Row className="mb-2">
  <div className="profile-title">
    <div  style={{cursor:"pointer"}} className="media">
      <Image
        attrImage={{
          className: "img-70 m-0 rounded-circle",
          alt: "",
          src: `${require("../../../assets/images/user/1.jpg")}`,
          onClick: handleImageClick, // Add onClick handler to image
        }}
      />
      <div className="media-body">
        <Link>
          <H5 attrH5={{ className: "mb-1" }}>MARK JECNO</H5>
        </Link>
        <P>DESIGNER</P>
      </div>
    </div>
  </div>
</Row>

          {/* File input for uploading new image */}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <Row>
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{FirstName}</H6>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="text-danger">
                    {errors.firstName.message}
                  </span>
                )}
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{LastName}</H6>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className="text-danger">{errors.lastName.message}</span>
                )}
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{EmailAddress}</H6>
                <Input
                  className="form-control"
                  type="email"
                  placeholder="Email Address"
                  {...register("emailAddress", { required: true })}
                />
                {errors.emailAddress && (
                  <span className="text-danger">
                    {errors.emailAddress.message}
                  </span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
         
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{City}</H6>
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
                <H6 className="form-label">{Country}</H6>
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
              <FormGroup>
                <H6 className="form-label">{PostalCode}</H6>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Postal Code"
                  {...register("postalCode", { required: true })}
                />
                {errors.postalCode && (
                  <span className="text-danger">{errors.postalCode.message}</span>
                )}
              </FormGroup>
            </Col>
          </Row> */}
        </CardBody>
        <CardFooter className="text-end">
          <Btn attrBtn={{ color: "success", type: "submit" }}>
            {UpdateProfile}
          </Btn>
        </CardFooter>
      </Form>
    </Fragment>
  );
};

export default EditMyProfile;
