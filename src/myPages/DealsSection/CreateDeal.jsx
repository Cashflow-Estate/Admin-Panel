import Dropzone from "react-dropzone";
import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, Btn, H6 } from "../../AbstractElements";
import { useForm, Controller } from "react-hook-form";
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

import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import "./comp/multi.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const CreateDeal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    control,
    reset,
  } = useForm(); // Initialize form
  const { id } = useParams(); // Get the ID parameter from the URL

  const [dealData, setDealData] = useState(null); // State to store deal details
  console.log("🚀 ~ CreateDeal ~ dealData:", dealData);

  useEffect(() => {
    const fetchDealById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/deals/${id}`
        );
        setDealData(response.data); // Update dealData state with fetched data
      } catch (error) {
        console.error("Error fetching deal by ID:", error);
      }
    };

    if (id) {
      // If ID parameter exists, fetch deal details
      fetchDealById();
    }
  }, [id]);

  const formData = watch();
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  console.log("🚀 ~ :::: ~ images:", files)
  
  useEffect(() => {
    const fetchFiles = async () => {
      const fileObjects = await Promise.all(images.map(async file => {
        if (file instanceof File) {
          return file; // If already a File object, return as is
        } else if (typeof file === 'object' && 'url' in file && 'filename' in file) {
          // If it's a Cloudinary object, create a new File object from it
          const response = await fetch(file.url);
          const blob = await response.blob();
          return new File([blob], file.filename, { type: file.format });
        } else {
          // For other cases (e.g., already a Blob), return as is
          return file;
        }
      }));
      console.log("🚀 ~ fileObjects ~ fileObjects:", fileObjects);
      setFiles(fileObjects)
    };
  
    fetchFiles();
  }, [images]);
  
  
  const [client, setClient] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const [selectedOptions, setSelectedOptions] = useState([]); // State to store selected options
  const [useEmail, setUseEmail] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    if (event.target.value?.trim() !== "") {
      setUseEmail(true);
      setEmail(event.target.value);
    } else {
      setUseEmail(false);
    }
  };

  const [addressOptions, setAddressOptions] = useState([]);
  const [address, setAddress] = useState("");
  const [addressSearch, setAddressSearch] = useState("");
  console.log("🚀 ~ CreateDeal ~ addressSearch:", addressSearch)
  const [monthlyCashMin, setMonthlyCashMin] = useState(""); // State for Monthly Cash Flow Minimum
  const [monthlyCashMax, setMonthlyCashMax] = useState(""); // State for Monthly Cash Flow Maximum
  const [approxAnnualMinReturn, setApproxAnnualMinReturn] = useState(""); // State for Approx Annual Minimum Return(%)
  const [approxAnnualMaxReturn, setApproxAnnualMaxReturn] = useState(""); // State for Approx Annual Maximum Return(%)

  // Function to calculate Approx Annual Minimum and Maximum Returns
  const calculateAnnualReturns = () => {
    if (monthlyCashMin && monthlyCashMax) {
      const minReturn =
        ((monthlyCashMin * 12) / parseFloat(formData.price)) * 100;
      const maxReturn =
        ((monthlyCashMax * 12) / parseFloat(formData.price)) * 100;
      setApproxAnnualMinReturn(Math.ceil(minReturn.toFixed(2))); // Round to 2 decimal places
      setApproxAnnualMaxReturn(Math.ceil(maxReturn.toFixed(2))); // Round to 2 decimal places
    }
  };

  useEffect(() => {
    calculateAnnualReturns();
  }, [monthlyCashMin, monthlyCashMax, formData.price]); // Add formData.price to dependency array

  useEffect(() => {
    if (dealData) {
      // Update form fields with dealData
      reset({
        title: dealData.data.title || "",
        price: dealData.data.price || "",
        approxPrice: dealData.data.approxPrice || "",
        upfrontDown: dealData.data.upfrontDown || "",
        monthly_cash_min: dealData.data.monthly_cash_min || "",
        monthly_cash_max: dealData.data.monthly_cash_max || "",
        closing_date: dealData.data.closing_date
          ? dealData.data.closing_date.split("T")[0]
          : "", // Format closing date if available
        bedRooms: dealData.data.bedRooms || "",
        area: dealData.data.area || "",
        baths: dealData.data.baths || "",
        address: dealData.data.address || "",
        sendTo:
          dealData.data.sendTo.map((value) => ({ value, label: value })) || [],
        sendByEmail: dealData.data.sendByEmail || "", // Fill sendByEmail field
      });
setSelectedOptions(dealData.data.sendTo.map((value) => ({ value, label: value })))
      setEmail(dealData.data.sendByEmail);

      // Update other relevant states if needed
      setMonthlyCashMin(dealData.data.monthly_cash_min || "");
      setMonthlyCashMax(dealData.data.monthly_cash_max || "");
      setApproxAnnualMinReturn(dealData.data.annually_return_min || "");
      setApproxAnnualMaxReturn(dealData.data.annually_return_max || "");
      // Add other relevant state updates here

      setImages(dealData.data.images); // Assuming images are fetched as well
      setMonthlyCashMin(dealData.data.monthly_cash_min); // Set monthlyCashMin state
      setMonthlyCashMax(dealData.data.monthly_cash_max); // Set monthlyCashMax state
      setAddressSearch(dealData.data.address); // Set addressSearch state
    }
  }, [dealData, reset]);

  
  const AddProject = async (data) => {
    setClient(true);
    setFormSubmitted(true);
    await trigger();

    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    // Ensure addressSearch is an array
    const selectedAddress = Array.isArray(addressSearch) ? addressSearch : [addressSearch];

    const dealData = new FormData(); // Create a FormData object to send mixed content (text and files)
    dealData.append("title", data.title);
    dealData.append("price", data.price);
    dealData.append("approxPrice", data.approxPrice);
    dealData.append("upfrontDown", data.upfrontDown);
    dealData.append("monthly_cash_min", data.monthly_cash_min);
    dealData.append("monthly_cash_max", data.monthly_cash_max);
    dealData.append("closing_date", data.closing_date);
    dealData.append("bedRooms", data.bedRooms);
    dealData.append("area", data.area);
    dealData.append("baths", data.baths);
    dealData.append("address", selectedAddress.join(", ")); // Convert selectedAddress to a comma-separated string
    dealData.append("sendTo", JSON.stringify(selectedOptions.map((option) => option.value))); // Convert selectedOptions to JSON string
    dealData.append("sendByEmail", useEmail ? email : ""); // Send email only if useEmail is true
    files.forEach((image) => {
      dealData.append("images", image); // Append each image to FormData
    });

    const apiUrl = id ? `http://localhost:5000/api/v1/deals/${id}` : 'http://localhost:5000/api/v1/deals';

    try {
      const response = id ? await axios.patch(apiUrl, dealData) : await axios.post(apiUrl, dealData);
      if (response.data.statusCode === 200) {
        // Handle success
        toast.success(response.data.message);
      }
    } catch (error) {
      // Handle error
      toast.error("Failed to create/update deal.");
    }
  };

  const options = [
    { value: "all", label: "All Users" },
    { value: "paid", label: "Paid Customers" },
    { value: "members", label: "Paid Members" },
    { value: "free", label: "Free Customer" },
  ];

  // Function to handle changes in "Send By Email" input
  // const handleEmailChange = (e) => {
  //   const email = e.target.value;
  //   if (email.trim() !== "") {
  //     setUseEmail(true);
  //     setSelectedOptions([]); // Clear selected options when using email
  //   } else {
  //     setUseEmail(false);
  //   }
  // };
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
  const [debouncedAddressSearch, setDebouncedAddressSearch] = useState("");

  // Debounce address search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedAddressSearch(addressSearch);
    }, 800); // Adjust the debounce delay as needed
    return () => {
      clearTimeout(timer);
    };
  }, [addressSearch]); // Run the effect whenever addressSearch changes

  useEffect(() => {
    if (
      Array.isArray(debouncedAddressSearch)
        ? ""
        : debouncedAddressSearch?.trim() !== ""
    ) {
      // Check if the search query is not empty
      handleAddressChange(debouncedAddressSearch);
    }
  }, [debouncedAddressSearch]);
  return (
    <Fragment>
      <Breadcrumbs
        parent="Slow Flip Deals"
        title="Create Slow Flip Deals"
        mainTitle="Slow Flip Deals"
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
                          <H6>{"Interest"}</H6>
                          <input
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
                      <Col sm="12">
                        <FormGroup>
                          <H6 className="form-label">{"Address"}</H6>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Type to search for an address"
                            onChange={(e) => setAddressSearch(e.target.value)}
                            value={
                              Array.isArray(addressSearch)
                                ? addressSearch?.map(
                                    (val) => `${val.label}:${val.value}`
                                  )
                                : addressSearch
                            } // Bind the address search value to state
                          />

                          <span className="text-danger">
                            {errors.address && errors.address.message}
                          </span>
                          <div>
                            {addressOptions.map((option, index, arr) => (
                              <div
                                key={index}
                                onClick={() => setAddressSearch(arr)} // Set the selected address on click
                                style={{ cursor: "pointer" }} // Change cursor to pointer for clickable effect
                              >
                                {option.label}
                              </div>
                            ))}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col sm="12">
                        <FormGroup>
                          <Label for="sendTo">Send To:</Label>
                          <Controller
                            name="sendTo"
                            control={control}
                            rules={{
                              validate: () => {
                                if (!useEmail && !selectedOptions.length) {
                                  return "Please select either 'Send To' or provide an email";
                                }
                                return true;
                              },
                            }}
                            render={({ field }) => (
                              <Select
                                {...field}
                                options={options}
                                isMulti
                                onChange={(value) => {
                                  field.onChange(value);
                                  setSelectedOptions(value);
                                  setUseEmail(false); // Reset useEmail when 'Send To' is selected
                                }}
                                isDisabled={useEmail}
                              />
                            )}
                          />

                          {errors.sendTo && (
                            <span className="text-danger">
                              {errors.sendTo.message}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup>
                          <h6 style={{ color: "black" }}>OR Send By Email:</h6>
                          <input
                            className="form-control"
                            type="email"
                            name="sendByEmail"
                            id="sendByEmail"
                            placeholder="Enter email"
                            disabled={selectedOptions?.length}
                            onChange={handleEmailChange}
                            value={email}
                          />
                          {errors.sendByEmail && (
                            <span className="text-danger">
                              {errors.sendByEmail.message}
                            </span>
                          )}
                        </FormGroup>
                      </Col>

                      <Col sm="12">
                        <MultiDropzone
                        images={images}
                          setImages={setImages}
                          dealData={dealData}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="text-end">
                          {/* <Btn attrBtn={{ color: "success", className: "me-3" }} onClick={AddProject}>Add</Btn> */}
                          <Btn attrBtn={{ color: "success" }}>{id?"Edit":"Add"}</Btn>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ) : (
          "Loading..........."
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
      const updatedDealData = [ ...images ];
      console.log("🚀 ~ handleDelete ~ updatedDealData:", updatedDealData)
      updatedDealData.splice(index, 1);
      setImages(updatedDealData); // Assuming you have a setDealData function
    } else {
      // Update images if dealData is not available
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
                <img src={image.url || URL.createObjectURL(image)} alt={`Image-${index}`} />
                <div className="image-delete" onClick={() => handleDelete(index)}>
                  <FaTrash />
                </div>
              </div>
            ))
          : images.map((image, index) => (
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


