import Dropzone from "react-dropzone";
import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, Btn, H6 } from "../../AbstractElements";
import { useForm, Controller } from "react-hook-form";
import { Dropdown, FormLabel, Spinner } from "react-bootstrap";

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
  Button,
} from "reactstrap";

import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import "./comp/multi.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import ReactGoogleAutocomplete, {
  Autocomplete,
} from "react-google-autocomplete";

const CreateDeal = () => {
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    control,
    reset,
  } = useForm();
  const { id } = useParams();

  const [dealData, setDealData] = useState(null);
  const [propertyType, setPropertyType] = useState(""); // State to hold selected property type

  const handlePropertyTypeChange = (selectedType) => {
    setPropertyType(selectedType);
  };
  useEffect(() => {
    const fetchDealById = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/deals/${id}`
        );
        setDealData(response.data);
        setAddress(false);
      } catch (error) {
        console.error("Error fetching deal by ID:", error);
      }
    };

    if (id) {
      fetchDealById();
    }
  }, [id]);

  const formData = watch();
  const [images, setImages] = useState([]);
  const [featureimage, setFeatureImages] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const fileObjects = await Promise.all(
        images.map(async (file) => {
          if (file instanceof File) {
            return file;
          } else if (
            typeof file === "object" &&
            "url" in file &&
            "filename" in file
          ) {
            const response = await fetch(file.url);
            const blob = await response.blob();
            return new File([blob], file.filename, { type: file.format });
          } else {
            return file;
          }
        })
      );
      setFiles(fileObjects);
    };

    fetchFiles();
  }, [images]);

  const [client, setClient] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log("🚀 ~ CreateDeal ~ selectedOptions:", selectedOptions);
  let opt = selectedOptions.map((val) => val.label);

  const [useEmail, setUseEmail] = useState(false);
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const [addressOptions, setAddressOptions] = useState([]);
  const [address, setAddress] = useState(true);
  const [addressSearch, setAddressSearch] = useState("");
  const [monthlyCashMin, setMonthlyCashMin] = useState("");
  const [monthlyCashMax, setMonthlyCashMax] = useState("");
  const [approxAnnualMinReturn, setApproxAnnualMinReturn] = useState("");
  const [approxAnnualMaxReturn, setApproxAnnualMaxReturn] = useState("");
  const [addressError, setAddressError] = useState("");

  const calculateAnnualReturns = () => {
    if (monthlyCashMin && monthlyCashMax) {
      const minReturn =
        ((monthlyCashMin * 12) / parseFloat(formData.price)) * 100;
      const maxReturn =
        ((monthlyCashMax * 12) / parseFloat(formData.price)) * 100;
      setApproxAnnualMinReturn(Math.ceil(minReturn.toFixed(2)));
      setApproxAnnualMaxReturn(Math.ceil(maxReturn.toFixed(2)));
    }
  };

  useEffect(() => {
    calculateAnnualReturns();
  }, [monthlyCashMin, monthlyCashMax, formData.price]);

  useEffect(() => {
    if (dealData) {
      reset({
        title: dealData.data.title || "",
        price: dealData.data.price || "",
        approxPrice: dealData.data.approxPrice || "",
        upfrontDown: dealData.data.upfrontDown || "",
        monthly_cash_min: dealData.data.monthly_cash_min || "",
        monthly_cash_max: dealData.data.monthly_cash_max || "",
        closing_date: dealData.data.closing_date
          ? dealData.data.closing_date.split("T")[0]
          : "",
        bedRooms: dealData.data.bedRooms || "",
        area: dealData.data.area || "",
        baths: dealData.data.baths || "",
        address: dealData.data.address || "",
        sendTo:
          dealData.data.sendTo.map((value) => ({ value, label: value })) || [],
        sendByEmail: dealData.data.sendByEmail || "",
      });
      setSelectedOptions(
        dealData.data.sendTo.map((value) => ({ value, label: value }))
      );

      setEmail(dealData.data.sendByEmail);

      setMonthlyCashMin(dealData.data.monthly_cash_min || "");
      setMonthlyCashMax(dealData.data.monthly_cash_max || "");
      setApproxAnnualMinReturn(dealData.data.annually_return_min || "");
      setApproxAnnualMaxReturn(dealData.data.annually_return_max || "");

      setFeatureImages(dealData?.data?.featureimage);
      setImages(dealData.data.images);
      setMonthlyCashMin(dealData.data.monthly_cash_min);
      setMonthlyCashMax(dealData.data.monthly_cash_max);
      setAddressSearch(dealData.data.address);
    }
  }, [dealData, reset]);

  const AddProject = async (data) => {
    setFormSubmitted(true);
    setClient(true);

    await trigger();

    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    const selectedAddress = Array.isArray(addressSearch)
      ? addressSearch?.map((val) => `${val.label}`)
      : [addressSearch];

    const dealData = new FormData();
    dealData.append("title", data.title);
    dealData.append("price", data.price);
    dealData.append("approxPrice", data.approxPrice);
    dealData.append("upfrontDown", data.upfrontDown);
    dealData.append("monthly_cash_min", data.monthly_cash_min);
    dealData.append("monthly_cash_max", data.monthly_cash_max);
    dealData.append("annually_return_min", approxAnnualMinReturn);
    dealData.append("annually_return_max", approxAnnualMaxReturn);
    dealData.append("closing_date", data.closing_date);
    dealData.append("bedRooms", data.bedRooms);
    dealData.append("area", data.area);
    dealData.append("baths", data.baths);
    dealData.append("address", addressSearch);
    if (opt.length > 0 && selectedOptions.length) {
      dealData.append("sendTo", opt);
    }

    dealData.append("sendByEmail", email ? email : "");
    files.forEach((image) => {
      dealData.append("images", image);
    });

    const apiUrl = id
      ? `${process.env.REACT_APP_API_BASE_URL}/deals/${id}`
      : `${process.env.REACT_APP_API_BASE_URL}/deals`;

    try {
      const response = id
        ? await axios.patch(apiUrl, dealData)
        : await axios.post(apiUrl, dealData);
      if (response.data.statusCode === 200) {
        setFormSubmitted(false);
        toast.success(response.data.message);
        history("/deals/view");
      }
    } catch (error) {
      toast.error("Failed to create/update deal.");
    }
  };

  const options = [
    { value: "all", label: "All Users" },
    { value: "paid", label: "Paid Customers" },
    { value: "members", label: "Paid Members" },
    { value: "free", label: "Free Customer" },
  ];

  const handleAddressChange = async (inputAddress) => {
    setAddress(true);

    try {
      const response = await axios.get(
        `http://localhost:5000/places?input=${inputAddress}`
      );
      const candidates = response.data.candidates;
      const formattedOptions = candidates.map((candidate) => ({
        value: candidate.formatted_address,
        label: `${candidate.name}: ${candidate.formatted_address}`,
      }));
      setAddressOptions(formattedOptions);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };
  const [debouncedAddressSearch, setDebouncedAddressSearch] = useState("");

  // Debounce address search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedAddressSearch(addressSearch);
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, [addressSearch]);

  useEffect(() => {
    if (
      Array.isArray(debouncedAddressSearch)
        ? ""
        : debouncedAddressSearch?.trim() !== ""
    ) {
      handleAddressChange(debouncedAddressSearch);
    }
  }, [debouncedAddressSearch]);
  const [sendByEmail, setSendByEmail] = useState(false);
  const [sendToALLCheckbox, setSendToALLCheckbox] = useState(false);
  const [sendToSpecificExistingCustomer, setSendToSpecificExistingCustomer] =
    useState(false);
  const handleSendByEmailToggle = () => {
    setSendByEmail(!sendByEmail);
  };
  const handleSendToALLCheckbox = () => {
    setSendToALLCheckbox(!sendToALLCheckbox);
  };
  const handleSpecificExistingCustomer = () => {
    setSendToSpecificExistingCustomer(!sendToSpecificExistingCustomer);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = async (data) => {
    setFormSubmitted(true);
    try {
      // Submit logic
    } catch (error) {
      toast.error("Failed to create/update deal.");
    } finally {
      setFormSubmitted(false);
    }
  };

  // Validation function to ensure either "Send To" or email is provided
  const validateSendOptions = () => {
    if (!sendByEmail && selectedOptions.length === 0 && !email) {
      return "Please select either 'Send To' or provide an email";
    }
    return true;
  };
  return (
    <Fragment>
      <Breadcrumbs
        back="/deals/view"
        parent="Slow Flip Deals"
        title="Create Slow Flip Deals"
        mainTitle="Create Slow Flip Deals"
      />
      <Container fluid={true}>
        {!formSubmitted ? (
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
                          <input
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
                          <H6>{"Monthly Cash Flow Minimum"}</H6>
                          <input
                            className="form-control"
                            type="number"
                            name="monthly_cash_min"
                            placeholder="Approximate monthly cashflow minimum"
                            {...register("monthly_cash_min", {
                              required: true,
                            })}
                            onChange={(e) => setMonthlyCashMin(e.target.value)}
                          />
                          <span style={{ color: "red" }}>
                            {errors.monthly_cash_min &&
                              "Monthly Cash Flow Minimum is required"}
                          </span>
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <H6>{"Monthly Cash Flow Maximum"}</H6>
                          <input
                            className="form-control"
                            type="number"
                            name="monthly_cash_max"
                            placeholder="Approximate monthly cashflow maximum"
                            {...register("monthly_cash_max", {
                              required: true,
                            })}
                            onChange={(e) => setMonthlyCashMax(e.target.value)}
                          />
                          <span style={{ color: "red" }}>
                            {errors.monthly_cash_max &&
                              "Monthly Cash Flow Maximum is required"}
                          </span>
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <H6>{"Property Type"}</H6>
                          <Dropdown onSelect={handlePropertyTypeChange}>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                              {propertyType
                                ? propertyType
                                : "Select Property Type"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item eventKey="Apartment">
                                Apartment
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="Single Family Home">
                                Single Family Home
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="Condo">
                                Condo
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="Town Home">
                                Town Home
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="4">
                        <FormGroup>
                          <H6>{"Approx Annual Minimum Return(%)"}</H6>
                          <input
                            value={approxAnnualMinReturn}
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
                          <input
                            className="form-control"
                            type="text"
                            name="annually_cash_max"
                            value={approxAnnualMaxReturn}
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
                            {...register("closing_date")}
                          />
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
                      <Row>
                        <Col sm="12">
                          <SingleDropzone
                            images={featureimage}
                            setImages={setFeatureImages}
                            dealData={dealData}
                          />
                        </Col>
                        {images.length === 0 && (
                          <p style={{ color: "red" }}>
                            Please upload feature image.
                          </p>
                        )}
                      </Row>
                      <Row>
                        <Col sm="12">
                          <FormGroup>
                            <h6 style={{ color: "black" }}>Address</h6>
                            {id ? (
                              <ReactGoogleAutocomplete
                                apiKey={
                                  "AIzaSyBDTYrhS8wWe85Z2yBCqMqoIqysRZjYLtE"
                                }
                                onPlaceSelected={(place) =>
                                  setAddressSearch(place.formatted_address)
                                }
                                value={addressSearch}
                                onChange={(e) =>
                                  setAddressSearch(e.target.value)
                                }
                                style={{ width: "100%" }}
                                className="form-control"
                              />
                            ) : (
                              <ReactGoogleAutocomplete
                                apiKey={
                                  "AIzaSyBDTYrhS8wWe85Z2yBCqMqoIqysRZjYLtE"
                                }
                                onPlaceSelected={(place) =>
                                  setAddressSearch(place.formatted_address)
                                }
                                style={{ width: "100%" }}
                                className="form-control"
                              />
                            )}
                            {!addressSearch.length && (
                              <span style={{ color: "red" }}>
                                Address is required
                              </span>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                    </Row>
                    <input
                      type="checkbox"
                      id="sendToALLCheckbox"
                      checked={sendToALLCheckbox}
                      onChange={handleSendToALLCheckbox}
                    />
                    <label htmlFor="
                    sendToALLCheckbox
                    sendToALLCheckbox">
                      Send to specific customer type
                    </label>
                    {sendToALLCheckbox && (
                      <Controller
                        name="sendTo"
                        control={control}
                        rules={{ validate: validateSendOptions }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            options={options}
                            isMulti
                            onChange={(value) => {
                              field.onChange(value);
                              setSelectedOptions(value);
                            }}
                          />
                        )}
                      />
                    )}
                    <br></br>
                    <input
                      type="checkbox"
                      id="sendByEmailCheckbox"
                      checked={sendByEmail}
                      onChange={handleSendByEmailToggle}
                    />
                    <label htmlFor="sendByEmailCheckbox">
                      Send to a new customer
                    </label>
                    {sendByEmail && (
                      <input
                        className="form-control"
                        type="email"
                        name="sendByEmail"
                        placeholder="Enter email"
                        onChange={handleEmailChange}
                        value={email}
                      />
                    )}
                    <br></br>
                    <input
                      type="checkbox"
                      id="sendToSpecificExistingCustomer"
                      checked={sendToSpecificExistingCustomer}
                      onChange={handleSpecificExistingCustomer}
                    />
                    <label htmlFor="sendToSpecificExistingCustomer">
                      Send To Specific Existing Customer
                    </label>
                    {sendToSpecificExistingCustomer && (
                      <>
                        {" "}
                     
                        <CustomSelect  name="sendToSpecificExistingCustomer"/>
                      </>
                    )}
           
                    <Row>
                      <Col>
                        <div className="text-end">
                          <Button
                            color="success"
                            disabled={
                              !addressSearch.length && images.length === 0
                            }
                          >
                            {id ? "Edit" : "Add"}
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ) : (
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
            "Loading..........."
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export default CreateDeal;

const MultiDropzone = ({ setImages, dealData, images }) => {
  const handleDrop = (acceptedFiles) => {
    setImages((prevImages) => [...prevImages, ...acceptedFiles]);
  };

  const handleDelete = (index) => {
    if (dealData) {
      // Update dealData if available
      const updatedDealData = [...images];
      updatedDealData.splice(index, 1);
      setImages(updatedDealData);
    } else {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        newImages.splice(index, 1);
        return newImages;
      });
    }
  };

  return (
    <div className="App2">
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
              className="bi bi-cloud-upload"
              viewBox="0 0 16 16"
              style={{ color: `var(--theme-secondary)` }}
            >
              <path
                fillRule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"
              />
              <path
                fillRule="evenodd"
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
        {dealData
          ? images.map((image, index) => (
              <div key={index} className="image-container">
                <img
                  src={image.url || URL.createObjectURL(image)}
                  alt={`Image-${index}`}
                />
                <div
                  className="image-delete"
                  onClick={() => handleDelete(index)}
                >
                  <FaTrash />
                </div>
              </div>
            ))
          : images.map((image, index) => (
              <div key={index} className="image-container">
                <img src={URL.createObjectURL(image)} alt={`Image-${index}`} />
                <div
                  className="image-delete"
                  onClick={() => handleDelete(index)}
                >
                  <FaTrash />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
const SingleDropzone = ({ setImages, dealData, images }) => {
  const handleDrop = (acceptedFiles) => {
    // Only allow one image to be selected for feature image
    const selectedImage = acceptedFiles[0];
    setImages([selectedImage]);
  };

  const handleDelete = () => {
    setImages([]);
  };

  return (
    <div className="App2">
      <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
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
              className="bi bi-cloud-upload"
              viewBox="0 0 16 16"
              style={{ color: `var(--theme-secondary)` }}
            >
              <path
                fillRule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"
              />
              <path
                fillRule="evenodd"
                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
              />
            </svg>
            <p style={{ color: `var(--theme-deafult)` }}>
              Drag & drop an image here, or click to select a file
            </p>
          </div>
        )}
      </Dropzone>
      <div className="image-preview">
        {images.length > 0 && (
          <div className="image-container">
            <img src={URL.createObjectURL(images[0])} alt="Feature Image" />
            <div className="image-delete" onClick={handleDelete}>
              <FaTrash />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CustomSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };

  const options = [
    { value: '1', label: 'John Doe || john@example.com', color: 'green' },
    { value: '2', label: 'Jane Smith || jane@example.com', color: 'red' },
    { value: '3', label: 'Michael Johnson || michael@example.com', color: 'green' },
    // Add more options as needed
  ];

  return (
    <div>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

// const CustomSelect = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleChange = (selectedValues) => {
//     setSelectedOptions(selectedValues);
//   };

//   const options = [
//     { value: '1', label: 'John Doe || john@example.com', color: 'green' },
//     { value: '2', label: 'Jane Smith || jane@example.com', color: 'red' },
//     { value: '3', label: 'Michael Johnson || michael@example.com', color: 'green' },
//     // Add more options as needed
//   ];

//   const customStyles = {
//     option: (provided, state) => ({
//       ...provided,
//       display: 'flex',
//       alignItems: 'center',
//     }),
//     dot: (color) => ({
//       height: 10,
//       width: 10,
//       borderRadius: '50%',
//       backgroundColor: color,
//       marginRight: 8,
//     }),
//   };

//   const customOptionLabel = ({ label, color }) => (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <span style={customStyles.dot(color)}></span>
//       {label}
//     </div>
//   );

//   return (
//     <div>
//       <Select
//         isMulti
//         options={options}
//         value={selectedOptions}
//         onChange={handleChange}
//         placeholder="Search..."
//         styles={customStyles}
//         getOptionLabel={customOptionLabel}
//         getOptionValue={(option) => option.value}
//         isSearchable={true} // Ensure search functionality is enabled
//       />
//     </div>
//   );
// };