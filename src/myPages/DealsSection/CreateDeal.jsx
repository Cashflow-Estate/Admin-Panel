import React, { Fragment, useContext, useState } from "react";
import { Breadcrumbs, Btn, H4 } from "../../AbstractElements";
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
import Select from "react-select";

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

  const data = [
    { id: 1, member: true, city: "New York", name: "John", client: "customer" },
    {
      id: 2,
      member: false,
      city: "Los Angeles",
      name: "Alice",
      client: "customer",
    },
    { id: 3, member: true, city: "Chicago", name: "Bob", client: "member" },
    { id: 4, member: false, city: "Houston", name: "Carol", client: "free" },
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  const filteredOptions = selectedCity
    ? data.filter((item) => item.city === selectedCity)
    : data;
  const [sendTo, setSendTo] = useState(""); // State to keep track of selected option

  const handleAdd = () => {
    // Implement your logic for handling the Add button click
  };

  const handleCancel = () => {
    // Implement your logic for handling the Cancel button click
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSendDeal = (sendTo) => {
    console.log("Sending deal to:", sendTo);
  };

  // Options for the searchable dropdown
  const userOptions = data.map((user) => ({
    value: user.id,
    label: user.name,
  }));

  return (
    <Fragment>
      <Breadcrumbs
        parent="Deals"
        title="Create Deals"
        mainTitle="Deals"
      />

      <Container fluid={true}>
        <H4>Create Deals</H4>
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
                  <UploadProjectFileClass register={register} errors={errors} />
                  <Row>
                    <Col>
                      <div className="text-end">
                        <Btn
                          attrBtn={{ color: "success", className: "me-3" }}
                          onClick={AddProject}
                        >
                          {Add}
                        </Btn>

                        <Btn attrBtn={{ color: "warning" }}>{Cancel}</Btn>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {formSubmitted &&
        client && ( // Render user selection part only if form is submitted and client state is true
          <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody>
                    <Form className="theme-form">
                      {/* Your existing form elements */}
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
                          {Array.from(
                            new Set(data.map((item) => item.city))
                          ).map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="sendTo">Send To:</Label>
                        <Select
                          options={[
                            { value: "all", label: "All Users" },
                            { value: "paid", label: "Only Paid Customers" },
                            { value: "members", label: "Paid Members" },
                            { value: "specific", label: "Specific Customer" },
                          ]}
                          onChange={(selectedOption) => {
                            setSendTo(selectedOption.value); // Update sendTo state
                            handleSendDeal(selectedOption.value);
                          }}
                        />
                      </FormGroup>
                      {sendTo === "specific" && (
                        <FormGroup>
                          <Label for="specificCustomer">Select Customer:</Label>
                          <Select
                            options={userOptions}
                            isSearchable={true}
                            placeholder="Search for a customer..."
                            onChange={(selectedOption) =>
                              console.log("Selected customer:", selectedOption)
                            }
                          />
                        </FormGroup>
                      )}
                      <Row>
                        <Col>
                          <div className="text-end">
                            <Btn
                              attrBtn={{ color: "success", className: "me-3" }}
                              onClick={handleAdd}
                            >
                              Send
                            </Btn>
                            <Btn
                              attrBtn={{ color: "warning" }}
                              onClick={handleCancel}
                            >
                              Cancel
                            </Btn>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
    </Fragment>
  );
};

export default CreateDeal;
