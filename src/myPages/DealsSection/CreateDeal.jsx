import Dropzone from "react-dropzone";

import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumbs, Btn, H4, H6 } from "../../AbstractElements";
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
import { FaTrash } from "react-icons/fa";
import "./comp/multi.css";
import axios from "axios";
const CreateDeal = () => {
  const [client, setClient] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const AddProject = (data) => {
    setClient(true);
    setFormSubmitted(true); 
  };

  const [text, setText] = useState(``);
  const handleChange = (e) => {
    setText(e?.target?.value);
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

  const [selectedOptions, setSelectedOptions] = useState([]); // State to store selected options
  const [images, setImages] = useState([]); // State to store uploaded images
  const [selectedSendTo, setSelectedSendTo] = useState(""); // State to store the selected send to option

  // Fixed options for the searchable dropdown
  const options = [
    { value: "all", label: "All Users" },
    { value: "paid", label: "Paid Customers" },
    { value: "members", label: "Paid Members" },
    { value: "free", label: "Free Customer" },
  ];

  // Handler for selected options change
  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  // Handler for send to dropdown change
  const handleSendToChange = (selectedOption) => {
    setSelectedSendTo(selectedOption.value);
  };

  // Handler for uploading images
  const handleDrop = (acceptedFiles) => {
    setImages([...images, ...acceptedFiles]);
  };

  // Handler for deleting an uploaded image
  const handleDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  //
  const [monthlyCashMin, setMonthlyCashMin] = useState("");
  const [monthlyCashMax, setMonthlyCashMax] = useState("");
  const [annualCashMin, setAnnualCashMin] = useState("");

  const [useEmail, setUseEmail] = useState(false); // State to track whether email is used

  const handleEmailChange = (e) => {
    const email = e.target.value;
    // If email is entered, disable the React Select
    if (email.trim() !== "") {
      setUseEmail(true);
    } else {
      setUseEmail(false);
    }
  };
  const [addressOptions, setAddressOptions] = useState([]);
  console.log("🚀 ~ CreateDeal ~ addressOptions:", addressOptions)
  const handleAddressChange = async (inputAddress) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/places?input=${inputAddress}`
      );
      const candidates = response.data.candidates;
      const formattedOptions = candidates.map((candidate) => ({
        value: candidate.formatted_address,
        label: `${candidate.name}: ${candidate.formatted_address}`,
      }));
      setAddressOptions(formattedOptions); // Directly set addressOptions here
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };
  

  const handleChangee = (selectedOption) => {
    // Handle selected option here
    console.log("Selected option:", selectedOption);
  };
  return (
    <Fragment>
      <Breadcrumbs
        parent="Slow Flip Deals"
        title="Create Slow Flip Deals"
        mainTitle="Slow Flip Deals"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                  onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col sm={4}>
                      <FormGroup>
                        <h6 style={{ color: "black" }}>{"Title"}</h6>
                        <input
                          className="form-control"
                          type="text"
                          name="title"
                          placeholder="Deal name *"
                          {...register("title", { required: true })}
                        />
                        <span style={{ color: "red" }}>
                          {errors.title && "Title is required"}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col sm={4}>
                      <FormGroup>
                        <h6 style={{ color: "black" }}>{"Price"}</h6>
                        <input
                          className="form-control"
                          type="number"
                          name="price"
                          placeholder="Deal price *"
                          {...register("price", { required: true })}
                        />
                        <span style={{ color: "red" }}>
                          {errors.price && "Price is required"}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <H6>{"Slow Flip Total Price"}</H6>
                        <Input
                          className="form-control"
                          type="number"
                          name="approxPrice"
                          placeholder="Total Price"
                          {...register("approxPrice", { required: true })}
                        />
                        <span style={{ color: "red" }}>
                          {errors.approxPrice && "Total Price is required"}
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="4">
                      <FormGroup>
                        <H6>{"Interest"}</H6>
                        <Input
                          className="form-control"
                          type="number"
                          name="upfrontDown"
                          placeholder="Upfront Down"
                          {...register("upfrontDown", { required: true })}
                        />
                        <span style={{ color: "red" }}>
                          {errors.upfrontDown && "Interest is required"}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <H6>{"Monthly Cash Flow Minimum"}</H6>
                        <Input
                          className="form-control"
                          type="number"
                          name="monthly_cash"
                          placeholder="Approximate monthly cashflow minimum"
                          {...register("monthly_cash", { required: true })}
                        />
                        <span style={{ color: "red" }}>
                          {errors.monthly_cash &&
                            "Monthly Cash Flow Minimum is required"}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <H6>{"Monthly Cash Flow Maximum"}</H6>
                        <Input
                          className="form-control"
                          type="number"
                          name="monthly_cash_max"
                          placeholder="Approximate monthly cashflow maximum"
                          {...register("monthly_cash_max", { required: true })}
                        />
                        <span style={{ color: "red" }}>
                          {errors.monthly_cash_max &&
                            "Monthly Cash Flow Maximum is required"}
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="4">
                      <FormGroup>
                        <H6>{"Approx Annual Minimum Return(%)"}</H6>
                        <Input
                          className="form-control"
                          type="text"
                          name="annually_cash"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <H6>{"Approx Annual Maximum Return(%)"}</H6>
                        <Input
                          className="form-control"
                          type="text"
                          name="annually_cash_max"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <H6>{"Closing Date"}</H6>
                        <input
                          className="form-control"
                          type="date"
                          name="closing_date"
                          {...register("closing_date", { required: true })}
                        />
                        <span style={{ color: "red" }}>
                          {errors.closing_date && "Closing Date is required"}
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
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
                        <span style={{ color: "red" }}>
                          {errors.bedRooms && "Total Bed Rooms is required"}
                        </span>
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
                        <span style={{ color: "red" }}>
                          {errors.area && "Area in Sqft is required"}
                        </span>
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
                        <span style={{ color: "red" }}>
                          {errors.baths && "Total Baths is required"}
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <FormGroup>
                        <H6 className="form-label">{"Address"}</H6>
                        <Input
                          type="text"
                          name="address"
                          placeholder="Type to search for an address"
                          onChange={(e) => handleAddressChange(e.target.value)}
                        />
                            <span className="text-danger">
                          {errors.address && errors.address.message}
                        </span>
                        <div>
                          {addressOptions.map((option, index) => (
                            <div key={index}>
                              {option.label}
                            </div>
                          ))}
                        </div>

                    
                      </FormGroup>
                    </Col>
 
                  </Row>
                  <Row>
                    <Col sm="12">
                      <FormGroup>
                        <Label for="sendTo">Send To:</Label>
                        <Select
                          options={options}
                          isMulti
                          onChange={handleSelectChange}
                          isDisabled={useEmail}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup>
                        <Label for="email">OR Send By Email:</Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          onChange={handleEmailChange}
                          disabled={selectedOptions.length}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <MultiDropzone />
                  <Row>
                    <Col>
                      <div className="text-end">
                        {/* <Btn attrBtn={{ color: "success", className: "me-3" }} onClick={AddProject}>Add</Btn> */}
                        <Btn attrBtn={{ color: "success" }}>Add</Btn>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreateDeal;

const MultiDropzone = (prop) => {
  const [images, setImages] = useState([]);
  const handleDrop = (acceptedFiles) => {
    setImages([...images, ...acceptedFiles]);
    prop.setImageData([...images, ...acceptedFiles]);
  };
  const handleDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  return (
    <div className="App2">
      {/* <h1>Multi Image Upload</h1> */}
      <Dropzone onDrop={handleDrop} accept="image/*" multiple>
        {({ getRootProps, getInputProps }) => (
          <div
            className="dropzone"
            {...getRootProps()}
            style={{ border: `2px dashed var(--theme-deafult)` }}
          >
            <input {...getInputProps()} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="green"
              class="bi bi-cloud-upload"
              viewBox="0 0 16 16"
              style={{ color: `var(--theme-secondary)` }}
            >
              <path
                fill-rule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
              />
            </svg>
            <p style={{ color: `var(--theme-deafult)` }}>
              Drag & drop some files here, or click to select files
            </p>
          </div>
        )}
      </Dropzone>
      <div className="image-preview">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={URL.createObjectURL(image)} alt={`Image-${index}`} />
            <div className="image-delete" onClick={() => handleDelete(index)}>
              <FaTrash />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
