import Dropzone from "react-dropzone";
import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, Btn, H6 } from "../../AbstractElements";
import { useForm, Controller } from "react-hook-form";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  FormLabel,
  Spinner,
} from "react-bootstrap";

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
import ReactGoogleAutocomplete from "react-google-autocomplete";

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
  const [propertyType, setPropertyType] = useState(""); // State to hold selected property type
  console.log("🚀 ~ CreateDeal ~ propertyType:", propertyType);

  const handlePropertyTypeChange = (selectedType) => {
    setPropertyType(selectedType);
  };

  const [dealData, setDealData] = useState(null);

  const validatePropertyType = () => {
    return propertyType !== "" || "Property type is required";
  };
  const onSubmit = (data) => {
    // If property type is not selected, prevent form submission
    if (!validatePropertyType()) {
      return;
    }
    // Proceed with form submission logic
    // For example, call AddProject function
    AddProject(data);
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
  function handleImageUpload(event) {
    const file = event.target.files[0];
    setFeatureImages(file)
  }

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
    setPriceError1("Price is require");
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
  const [sendToALLCheckbox, setSendToALLCheckbox] = useState(false);
  const [sendToSpecificExistingCustomer, setSendToSpecificExistingCustomer] =
    useState(false);
  const [sendByEmail, setSendByEmail] = useState(false);
  const [emails, setEmails] = useState([]);

  const handleSendByEmailToggle = () => {
    setSendByEmail(!sendByEmail);
  };

  const handleAddEmail = () => {
    if (email.trim() !== "") {
      setEmails([...emails, email]);
      setEmail(""); // Clear the input field after adding email
    }
  };

  const handleRemoveEmail = (index) => {
    setEmails(emails.filter((_, i) => i !== index));
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

  // Validation function to ensure either "Send To" or email is provided
  const validateSendOptions = () => {
    if (!sendByEmail && selectedOptions.length === 0 && !email) {
      return "Please select either 'Send To' or provide an email";
    }
    return true;
  };
  const [bedError, setBedError] = useState("");
  const [areaError, setAreaError] = useState("");
  const [bathError, setBathError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [priceError1, setPriceError1] = useState("");
  const [titleError, setTitleError] = useState("");
  const [approxPriceError, setapproxPriceError] = useState("");
  const [monthMaxError, setMonMaxErr] = useState("");
  const [monthMinError, setMonMinErr] = useState("");
  // State to manage form submission
  // State to manage form data
  const [fomDat, setFormData] = useState({
    title: "",
    price: "",
    approxPrice: "",
    monthly_cash_max: "",
    monthly_cash_min: "",
    bedRooms: "",
    baths: "",
    area: "",

    // Add other form fields here
  });

  const handleTitleChange = (e) => {
    const price = parseFloat(e.target.value);
    // Validate price
    if (price <= 0) {
      setTitleError("Value must be greater than 0");
      setFormData({ ...fomDat, title: "" });
    } else {
      setTitleError("");
      setFormData({ ...fomDat, title: e.target.value });
    }
  };
  const handleAreaChange = (e) => {
    const price = parseFloat(e.target.value);
    // Validate price
    if (price <= 0) {
      setAreaError("Value must be greater than 0");
      setFormData({ ...fomDat, area: "" });
    } else {
      setAreaError("");
      setFormData({ ...fomDat, area: e.target.value });
    }
  };
  const handleapproxPriceErrorChange = (e) => {
    const price = parseFloat(e.target.value);
    // Validate price
    if (price <= 0) {
      setapproxPriceError("Value must be greater than 0");
      setFormData({ ...fomDat, approxPrice: "" });
    } else {
      setapproxPriceError("");
      setFormData({ ...fomDat, approxPrice: e.target.value });
    }
  };

  const handleBathChange = (e) => {
    const price = parseFloat(e.target.value);
    // Validate price
    if (price <= 0) {
      setBathError("Value must be greater than 0");
      setFormData({ ...fomDat, baths: "" });
    } else {
      setBathError("");
      setFormData({ ...fomDat, baths: e.target.value });
    }
  };
  const handleBedChange = (e) => {
    const price = parseFloat(e.target.value);
    // Validate price
    if (price <= 0) {
      setBedError("Value must be greater than 0");
      setFormData({ ...fomDat, bedRooms: "" });
    } else {
      setBedError("");
      setFormData({ ...fomDat, bedRooms: e.target.value });
    }
  };
  const handlePriceChange = (e) => {
    const price = parseFloat(e.target.value);
    // Validate price
    if (price <= 0) {
      setPriceError("Price must be greater than 0");
      setFormData({ ...fomDat, price: "" });
    } else {
      setPriceError("");
      setFormData({ ...fomDat, price: e.target.value });
    }
  };
  const handleMonthMAxErrorChange = (e) => {
    const price = parseFloat(e.target.value);
    // Validate price
    if (price <= 0) {
      setMonMaxErr("Value must be greater than 0");
      setFormData({ ...fomDat, monthly_cash_max: "" });
    } else {
      setMonMaxErr("");
      setFormData({ ...fomDat, monthly_cash_max: e.target.value });
    }
  };
  const handleMonthMinErrorChange = (e) => {
    const price = parseFloat(e.target.value);
    // Validate price
    if (price <= 0) {
      setMonMinErr("Value must be greater than 0");
      setFormData({ ...fomDat, monthly_cash_min: "" });
    } else {
      setMonMinErr("");
      setFormData({ ...fomDat, monthly_cash_min: e.target.value });
    }
  };

  // const handleapproxPriceErrorChange = (e) => {
  //   const price = parseFloat(e.target.value);
  //   // Validate price
  //   if (price <= 0) {
  //     setapproxPriceError("Total price must be greater than 0");
  //     setFormData({ ...fomDat, approxPrice: "" });
  //   } else {
  //     setPriceError("");
  //     setFormData({ ...fomDat, approxPrice: e.target.value });
  //   }
  // };

  return (
    <Fragment>
      <Breadcrumbs
        back="/deals/view"
        parent="Slow Flip Deals"
        title="Create Slow Flip Deals"
        mainTitle="Create Slow Flip Deal"
      />
      <Container fluid={true}>
        {!formSubmitted ? (
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <Form
                    className="theme-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Row>
                      <Col sm="12">
                        <FormGroup>
                          <h6 style={{ color: "black" }}>Address</h6>
                          {id ? (
                            <ReactGoogleAutocomplete
                              apiKey={"AIzaSyA2m2ueygCpSjOTT2FSIl9YbZj2zGaNqRA"}
                              onPlaceSelected={(place) =>
                                setAddressSearch(place.formatted_address)
                              }
                              value={addressSearch}
                              onChange={(e) => setAddressSearch(e.target.value)}
                              style={{ width: "100%" }}
                              className="form-control"
                            />
                          ) : (
                            <ReactGoogleAutocomplete
                              apiKey={"AIzaSyA2m2ueygCpSjOTT2FSIl9YbZj2zGaNqRA"}
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
                    <Row>
                      <Col sm={4}>
                        <FormGroup>
                          <h6 style={{ color: "black" }}>{"Title"}</h6>
                          <input
                            className="form-control"
                            type="text"
                            name="title"
                            placeholder="Deal name *"
                            value={
                              fomDat?.title?.length > 0 ? fomDat.title : ""
                            }
                            onChange={handleTitleChange}
                          />
                          <span style={{ color: "red" }}>
                            {" "}
                            {!fomDat.title.length && "Title is required"}
                          </span>
                          <br />
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
                            value={fomDat.price > 0 ? fomDat.price : ""}
                            onChange={handlePriceChange}
                          />
                          <span style={{ color: "red" }}>
                            {" "}
                            {!fomDat.price && "Price is required"}
                          </span>
                          <br />
                          {fomDat.price < 1 && priceError && (
                            <span style={{ color: "red" }}>
                              {" "}
                              {priceError.length &&
                                "Price must be greater than 0"}
                            </span>
                          )}
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
                            value={
                              fomDat.approxPrice > 0 ? fomDat.approxPrice : ""
                            }
                            onChange={handleapproxPriceErrorChange}
                          />

                          <span style={{ color: "red" }}>
                            {!fomDat.approxPrice &&
                              "Slow Flip Total is required"}
                          </span>
                          <br />
                          {fomDat.approxPrice < 1 && approxPriceError && (
                            <span style={{ color: "red" }}>
                              {" "}
                              {approxPriceError.length &&
                                "Value must be greater than 0"}
                            </span>
                          )}
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
                            placeholder="Approximate monthly cashflow Minimum"
                            value={
                              fomDat.monthly_cash_min > 0
                                ? fomDat.monthly_cash_min
                                : ""
                            }
                            onChange={handleMonthMinErrorChange}
                          />

                          <span style={{ color: "red" }}>
                            {!fomDat.monthly_cash_min &&
                              "Monthly Cash Min is required"}
                          </span>
                          <br />
                          {fomDat.monthly_cash_min < 1 && monthMinError && (
                            <span style={{ color: "red" }}>
                              {" "}
                              {monthMinError.length &&
                                "Value must be greater than 0"}
                            </span>
                          )}

                          {/* {fomDat.approxPrice < 1 && approxPriceError && (
                            <span style={{ color: "red" }}>
                              {" "}
                              {approxPriceError.length &&
                                "Value must be greater than 0"}
                            </span>
                          )} */}
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <H6>{"Monthly Cash Flow Maximum"}</H6>
                          <input
                            className="form-control"
                            type="number"
                            name="monthly_cash_max"
                            placeholder="Approximate monthly cashflow Maximum"
                            value={
                              fomDat.monthly_cash_max > 0
                                ? fomDat.monthly_cash_max
                                : ""
                            }
                            onChange={handleMonthMAxErrorChange}
                          />

                          <span style={{ color: "red" }}>
                            {!fomDat.monthly_cash_max &&
                              "Monthly Cash Max is required"}
                          </span>
                          <br />

                          {fomDat.monthly_cash_max < 1 && monthMaxError && (
                            <span style={{ color: "red" }}>
                              {" "}
                              {monthMaxError.length &&
                                "Value must be greater than 0"}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <H6>{"Property Type"}</H6>

                          <Dropdown
                            className="dropdown"
                            onSelect={handlePropertyTypeChange}
                            isInvalid={!!errors.propertyType}
                          >
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
                          <span style={{ color: "red" }}>
                            {" "}
                            {!propertyType.length && "plz Select Property Type"}
                          </span>
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
                      <Col sm={4}>
                        <FormGroup>
                          <h6 style={{ color: "black" }}>{"Bedooms"}</h6>
                          <input
                            className="form-control"
                            type="number"
                            name="bedRooms"
                            placeholder="Total Bedrooms"
                            value={fomDat.bedRooms > 0 ? fomDat.bedRooms : ""}
                            onChange={handleBedChange}
                          />
                          <span style={{ color: "red" }}>
                            {!fomDat.bedRooms && "Bedroom is required"}
                          </span>
                          <br />
                          {fomDat.bedRooms < 1 && bedError && (
                            <span style={{ color: "red" }}>
                              {" "}
                              {bedError.length &&
                                "Value must be greater than 0"}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col sm={4}>
                        <FormGroup>
                          <h6 style={{ color: "black" }}>{"Total Baths"}</h6>
                          <input
                            className="form-control"
                            type="number"
                            name="baths"
                            placeholder="Total Baths"
                            value={fomDat.baths > 0 ? fomDat.baths : ""}
                            onChange={handleBathChange}
                          />
                          <span style={{ color: "red" }}>
                            {!fomDat.baths && "Bedroom is required"}
                          </span>
                          <br />
                          {fomDat.baths < 1 && bathError && (
                            <span style={{ color: "red" }}>
                              {" "}
                              {bathError.length &&
                                "Value must be greater than 0"}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col sm={4}>
                        <FormGroup>
                          <h6 style={{ color: "black" }}>{"Area in Sqft"}</h6>
                          <input
                            className="form-control"
                            type="number"
                            name="area"
                            placeholder="Total Area in Sqft"
                            value={fomDat.area > 0 ? fomDat.area : ""}
                            onChange={handleAreaChange}
                          />
                          <span style={{ color: "red" }}>
                            {!fomDat.area && "Area is required"}
                          </span>
                          <br />
                          {fomDat.area < 1 && areaError && (
                            <span style={{ color: "red" }}>
                              {" "}
                              {areaError.length &&
                                "Value must be greater than 0"}
                            </span>
                          )}
                        </FormGroup>
                      </Col>

                      <Row>
                        <Col sm="12">
                          <input type="file" onChange={handleImageUpload} />
                        </Col>

                        {featureimage.length === 0 && (
                          <p style={{ color: "red" }}>
                            Please upload primary image.
                          </p>
                        )}
                      </Row>
                    </Row>

                    <Col sm="12">
                      <MultiDropzone
                        images={images}
                        setImages={setImages}
                        dealData={dealData}
                      />
                    </Col>
                    {images.length === 0 && (
                      <p style={{ color: "red" }}>
                        Please upload at least one gallery image.
                      </p>
                    )}

                    <Label className="d-block" for="chk-ani">
                      <Input
                        className="checkbox_animated"
                        id="sendToALLCheckbox"
                        type="checkbox"
                        defaultChecked
                        checked={sendToALLCheckbox}
                        onChange={handleSendToALLCheckbox}
                      />
                      {Option} {"Send to specific customer type"}
                    </Label>

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

                    <Label className="d-block" for="chk-ani">
                      <Input
                        className="checkbox_animated"
                        id="sendToSpecificExistingCustomer"
                        type="checkbox"
                        defaultChecked
                        checked={sendToSpecificExistingCustomer}
                        onChange={handleSpecificExistingCustomer}
                      />
                      {Option} {" Send To Specific Existing Customer"}
                    </Label>
                    {sendToSpecificExistingCustomer && (
                      <>
                        {" "}
                        <CustomSelect name="sendToSpecificExistingCustomer" />
                      </>
                    )}
                    <br></br>

                    <Label className="d-block" for="chk-ani">
                      <Input
                        className="checkbox_animated"
                        id="sendByEmailCheckbox"
                        type="checkbox"
                        defaultChecked
                        checked={sendByEmail}
                        onChange={handleSendByEmailToggle}
                      />
                      {Option} {" Send to new customers"}
                    </Label>
                    {sendByEmail && (
                      <div>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter email"
                          onChange={handleEmailChange}
                          value={email}
                        />
                        <br></br>
                        <Button color="success" onClick={handleAddEmail}>
                          Add Email
                        </Button>
                      </div>
                    )}
                    <br></br>
                    {emails.length > 0 && (
                      <div>
                        {emails.length > 0 && (
                          <div>
                            <h5>Added Emails:</h5>
                            <ul>
                              {emails.map((email, index) => (
                                <li
                                  key={index}
                                  style={{
                                    margin: "5px 0",
                                    padding: "5px",
                                    fontFamily: "Arial, sans-serif",
                                    fontSize: "16px",
                                  }}
                                >
                                  {email}
                                  <span
                                    style={{
                                      color: "red",
                                      marginLeft: "5px",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => handleRemoveEmail(index)}
                                  >
                                    <i className="fa fa-trash-o"></i>
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    <Row>
                      <Col>
                        <div className="text-end">
                          <Button
                            color="success"
                            // disabled={
                            //   !addressSearch.length && images.length === 0
                            // }
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

const CustomSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };

  const options = [
    { value: "1", label: "John Doe || john@example.com", color: "green" },
    { value: "2", label: "Jane Smith || jane@example.com", color: "red" },
    {
      value: "3",
      label: "Michael Johnson || michael@example.com",
      color: "green",
    },
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
                  <i className="fa fa-trash-o"></i>
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
