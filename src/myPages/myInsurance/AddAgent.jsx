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

const AddAgent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const AddAgent = (data) => {
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
      back="/user-details/1"
        mainTitle="Create a new insurance agent"
        parent="Insurance Agents"
        title="Create Insurance Agent"
      />
      <Form className="theme-form" onSubmit={handleSubmit(AddAgent)}>
        <Card>
          <CardHeader>
            <H4>Add Insurance Agent</H4>
          </CardHeader>
          <CardBody>
            <AgentForm
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

const AgentForm = ({ formData, handleChange, register, errors }) => {
  return (
    <Fragment>
      <Row>
        <Col sm={6}>
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

        <Col sm="6">
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
        
        <Col sm="6">
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

        <Col sm="6">
          <FormGroup>
            <h6 className="form-label">{"Company"}</h6>
            <Input
              className="form-control"
              type="text"
              name="company"
              placeholder="Company"
              onChange={handleChange}
              {...register("company", { required: true })}
              value={formData.company}
            />
            {errors.company && (
              <span className="text-danger">{errors.company.message}</span>
            )}
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AddAgent;
