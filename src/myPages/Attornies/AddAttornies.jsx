import React, { useState } from "react";
import { Fragment } from "react";
import {
  Col,
  FormGroup,
  Input,
  Row,
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
} from "reactstrap";
import { Breadcrumbs, H4 } from "../../AbstractElements";
import { useForm } from "react-hook-form";

const AddNewAttorney = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const AddAttorney = (data) => {
    console.log(data); // Here, you can handle the submission logic
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Create a new attorney"
        parent="Attorneys"
        title="Create Attorney"
      />
      <Form className="theme-form" onSubmit={handleSubmit(AddAttorney)}>
        <Card>
          <CardHeader>
            <H4>Add Attorney</H4>
          </CardHeader>
          <CardBody>
            <AttorneyForm
              formData={formData}
              handleChange={handleChange}
              register={register}
              errors={errors}
            />
            <div className="mt-3">
              <Button type="submit" color="primary">
                Submit
              </Button>{" "}
              <Button type="button" color="warning">
                Cancel
              </Button>
            </div>
          </CardBody>
        </Card>
      </Form>
    </Fragment>
  );
};

const AttorneyForm = ({ formData, handleChange, register, errors }) => {
  return (
    <Fragment>
      <Row>
        <Col sm={4}>
          <FormGroup>
            <h6 style={{ color: "black" }}>{"Name"}</h6>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name *"
              onChange={handleChange}
              {...register("name", { required: true })}
              value={formData.name}
            />
            <span style={{ color: "red" }}>
              {errors.name && "Name is required"}
            </span>
          </FormGroup>
        </Col>

        <Col sm="4">
          <FormGroup>
            <h6 className="form-label">{"Email Address"}</h6>
            <Input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              {...register("email", { required: true })}
              value={formData.email}
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </FormGroup>
        </Col>
        
        <Col sm="4">
          <FormGroup>
            <h6 className="form-label">{"Phone"}</h6>
            <Input
              className="form-control"
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              {...register("phone", { required: true })}
              value={formData.phone}
            />
            {errors.phone && (
              <span className="text-danger">{errors.phone.message}</span>
            )}
          </FormGroup>
        </Col>

        <Col sm="4">
          <FormGroup>
            <h6 className="form-label">{"Street"}</h6>
            <Input
              className="form-control"
              type="text"
              name="street"
              placeholder="Street"
              onChange={handleChange}
              {...register("street", { required: true })}
              value={formData.street}
            />
            {errors.street && (
              <span className="text-danger">{errors.street.message}</span>
            )}
          </FormGroup>
        </Col>
        
        <Col sm="4">
          <FormGroup>
            <h6 className="form-label">{"City"}</h6>
            <Input
              className="form-control"
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              {...register("city", { required: true })}
              value={formData.city}
            />
            {errors.city && (
              <span className="text-danger">{errors.city.message}</span>
            )}
          </FormGroup>
        </Col>

        <Col sm="4">
          <FormGroup>
            <h6 className="form-label">{"State"}</h6>
            <Input
              className="form-control"
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              {...register("state", { required: true })}
              value={formData.state}
            />
            {errors.state && (
              <span className="text-danger">{errors.state.message}</span>
            )}
          </FormGroup>
        </Col>

        <Col sm="4">
          <FormGroup>
            <h6 className="form-label">{"Zip"}</h6>
            <Input
              className="form-control"
              type="text"
              name="zip"
              placeholder="Zip"
              onChange={handleChange}
              {...register("zip", { required: true })}
              value={formData.zip}
            />
            {errors.zip && (
              <span className="text-danger">{errors.zip.message}</span>
            )}
          </FormGroup>
        </Col>

        <Col sm="4">
          <FormGroup>
            <h6 className="form-label">{"Country"}</h6>
            <Input
              className="form-control"
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleChange}
              {...register("country", { required: true })}
              value={formData.country}
            />
            {errors.country && (
              <span className="text-danger">{errors.country.message}</span>
            )}
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AddNewAttorney;
