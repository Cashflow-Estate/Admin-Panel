import React, { Fragment, useContext, useState } from "react";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import ProjectContext from "../../_helper/Project";
import { Add, Cancel } from "../../Constant";

import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import CustomizerContext from "../../_helper/Customizer";
import ProjectRateClass from "./comp/ProjectRate";
import UploadProjectFileClass from "./comp/UploadProjectFile";
import IssueClass from "./comp/IssueClass";
import SimpleMdeReact from "react-simplemde-editor";
import LocationDetail from "./comp/LocationDetail";
import DealForm from "./comp/DealForm";
import DealAddress from "./comp/DealAddress";

const CreateDeal = () => {
  const [client, setClient] = useState(false);
  console.log("🚀 ~ CreateDeal ~ client:", client);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  console.log("🚀 ~ CreateDeal ~ formSubmitted:", formSubmitted);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const AddProject = (data) => {
    setClient(true);
    setFormSubmitted(true); // Set form submission state to true when Add button is clicked
  };

  const [text, setText] = useState(``);
  const handleChange = () => {
    setText(
      "Enter text in the area on the left. For more info, click the ? (help) icon in the menu."
    );
  };

  // Sample array of objects with member and city fields
  const data = [
    { id: 1, member: true, city: "New York", name: "John" },
    { id: 2, member: false, city: "Los Angeles", name: "Alice" },
    { id: 3, member: true, city: "Chicago", name: "Bob" },
    { id: 4, member: false, city: "Houston", name: "Carol" },
    // More data...
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const filteredOptions = selectedCity
    ? data.filter((item) => item.city === selectedCity)
    : data;

  return (
    <Fragment>
      <Breadcrumbs
        parent="Deals"
        title="Create Deals"
        mainTitle="Create Deals"
      />
      {!client ? (
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <Form
                    className="theme-form"
                    onSubmit={handleSubmit(AddProject)}
                  >
                    <DealForm register={register} errors={errors} />
                    <IssueClass register={register} />
                    <LocationDetail register={register} errors={errors} />
                   
                    <SimpleMdeReact
                     id="editor_container_description"
                     onChange={handleChange}
                     value={text}
                     options={{
                       spellChecker: false,
                     }}
                   />
                    <UploadProjectFileClass
                      register={register}
                      errors={errors}
                    />
                    <Row>
                      <Col>
                        <div className="text-end">
                          <Btn
                            attrBtn={{ color: "success", className: "me-3" }}
                            onClick={AddProject}
                          >
                            {Add}
                          </Btn>

                          <Btn attrBtn={{ color: "danger" }}>{Cancel}</Btn>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        formSubmitted && ( // Render user selection part only if form is submitted
          <Container fluid={true}>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="selectCity">Select City:</Label>
                  <Input
                    type="select"
                    name="selectCity"
                    id="selectCity"
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    <option value="">All Cities</option>
                    {Array.from(new Set(data.map((item) => item.city))).map(
                      (city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      )
                    )}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="selectUser">Select User:</Label>
                  <Input type="select" name="selectUser" id="selectUser">
                    <option value="">Select User</option>
                    {filteredOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Container>
        )
      )}
    </Fragment>
  );
};

export default CreateDeal;
