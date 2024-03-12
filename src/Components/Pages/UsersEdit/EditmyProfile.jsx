import React, { Fragment } from "react";
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
    <div className="media">
      <Image
        attrImage={{
          className: "img-70 m-0 rounded-circle",
          alt: "",
          src: `${require("../../../assets/images/user/1.jpg")}`,
        }}
      />
      <div className="media-body">
        <Link>
          <H5 attrH5={{ className: "mb-1" }}>MARK JECNO</H5>
        </Link>
        <P>DESIGNER <FaPencilAlt style={{ marginLeft: '5px', cursor: 'pointer' }} /></P>
      </div>
    </div>
  </div>
</Row>
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
                <H6 className="form-label">{Password}</H6>
                <Input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{Address}</H6>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className="text-danger">{errors.address.message}</span>
                )}
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <H6 className="form-label">{"DOB"}</H6>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Date of birth"
                  {...register("dateofbirth", { required: true })}
                />
                {errors.dateofbirth && (
                  <span className="text-danger">{errors.dateofbirth.message}</span>
                )}
              </FormGroup>
            </Col>
          </Row>
 
        </CardBody>
        <CardFooter className="text-end">
          <Btn attrBtn={{ color: "primary", type: "submit" }}>
            {UpdateProfile}
          </Btn>
        </CardFooter>
      </Form>
    </Fragment>
  );
};

export default EditMyProfile;
