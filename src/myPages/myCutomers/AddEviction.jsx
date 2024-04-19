import React, { Fragment, useContext, useState } from "react";
import { Breadcrumbs, Btn, H3, H4, H5, H6 } from "../../AbstractElements";
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
  CardHeader,
  Button,
} from "reactstrap";
import UploadProjectFileClass from "../DealsSection/comp/UploadProjectFile";

const AddEviction = () => {
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
  const [sendTo, setSendTo] = useState("");

  const handleAdd = () => {};

  const handleCancel = () => {};

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSendDeal = (sendTo) => {
    console.log("Sending deal to:", sendTo);
  };

  const userOptions = data.map((user) => ({
    value: user.id,
    label: user.name,
  }));
  const [selectedOptions, setSelectedOptions] = useState({
    contactSheriff: "",
    writtenLease: "",
    ledger: "",
    additionalDocuments: "",
    sendNotice: "",
    noticeDeliveryMethod: "",
    lawsuitOption: "",
    acknowledge: "",
  });

  const handleOptionChange = (question, value) => {
    setSelectedOptions({ ...selectedOptions, [question]: value });
  };
  return (
    <Fragment>
    <Breadcrumbs
      mainTitle="Create a New Eviction"
      parent="Eviction"
      title="Add Eviction"
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
                <Card>
                  <CardHeader>
                    <H4>Applicant Details</H4>
                  </CardHeader>
                  <CardBody>
                    <DealForm register={register} errors={errors} />
                  </CardBody>
                </Card>
                <CardHeader>
                  <H4>Occupant Details</H4>
                </CardHeader>
                <Card>
                  <CardBody>
                    <OccupantDetail register={register} errors={errors} />
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <RadioQuestions
                      question="Are you, or do you have, a person the Sheriff's Office should contact in regards to scheduling a set out, if needed?"
                      options={[
                        { value: "yes", label: "Yes" },
                        {
                          value: "yesContactMe",
                          label:
                            "Yes. The Sheriff should contact me at the phone number I provided here.",
                        },
                        { value: "no", label: "No. Not at this time." },
                      ]}
                      onChange={(value) =>
                        handleOptionChange("contactSheriff", value)
                      }
                    />
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <RadioQuestions
                      question="Is there a written lease with the Occupant?"
                      options={[
                        {
                          value: "yes",
                          label: "Yes and I am attaching it below.",
                        },
                        {
                          value: "yesNotAttached",
                          label: "Yes but I am not attaching a copy below.",
                        },
                        {
                          value: "no",
                          label:
                            "No. If my case is in Illinois, I understand that I will need to complete an additional affidavit stating there is no written lease for cases.",
                        },
                      ]}
                      onChange={(value) =>
                        handleOptionChange("writtenLease", value)
                      }
                    />
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <RadioQuestions
                      question="Do you maintain a ledger for the Occupant?"
                      options={[
                        {
                          value: "yes",
                          label:
                            "Yes and a copy of the current ledger is attached below.",
                        },
                        {
                          value: "yesNotAttached",
                          label:
                            "Yes but I was not able to attach a copy of the current ledger.",
                        },
                        { value: "no", label: "No." },
                      ]}
                      onChange={(value) =>
                        handleOptionChange("ledger", value)
                      }
                    />
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <RadioQuestions
                      question="Do you have any additional documents with relevance to this case that you need to attach?"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      onChange={(value) =>
                        handleOptionChange("additionalDocuments", value)
                      }
                    />
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <RadioQuestions
                      question="Are you requesting we send a notice, and if so, which notice are you requesting we send?"
                      options={[
                        { value: "5Day", label: "5-Day Notice" },
                    
                        {
                          value: "noNotice",
                          label: "No, a notice was already served to Occupant.",
                        },
                      ]}
                      onChange={(value) =>
                        handleOptionChange("sendNotice", value)
                      }
                    />
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <RadioQuestions
                      question="Delivering Notice to Occupant: Would you like the notice sent by:"
                      options={[
                        { value: "attorney", label: "Attorney via Certified Mail" },
                        {
                          value: "landlord",
                          label:
                            "Property Manager (delivery must comply with 735 ILCS 5/9-211, and attorney must receive a signed affidavit prior to filing case).",
                        }
                      ]}
                      onChange={(value) =>
                        handleOptionChange("noticeDeliveryMethod", value)
                      }
                    />
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <RadioQuestions
                      question="For cases where a suit is filed, do you want:"
                      options={[
                        { value: "possessionOnly", label: "Possession Only" },
                        {
                          value: "possessionAndMonetary",
                          label:
                            "There can be a Possession and a Monetary Judgment",
                        },
                      ]}
                      onChange={(value) =>
                        handleOptionChange("lawsuitOption", value)
                      }
                    />
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <RadioQuestions
                      question="I hereby acknowledge that I am authorized to enter into an agreement on behalf of the person or entity named above, that I have completed a contract for the fee and expense arrangement with the Firm prior to filling out this form, and that I agree to be bound by the fee and expense arrangement."
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      onChange={(value) =>
                        handleOptionChange("acknowledge", value)
                      }
                    />
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
            <Attorney/>
                
                  </CardBody>
                </Card>
                {/* <UploadProjectFileClass register={register} errors={errors} /> */}
                <Row>
                  <Col>
                    <div className="text-end">
                      <Btn
                        attrBtn={{ color: "success", className: "me-3" }}
                        onClick={AddProject}
                      >
                        {"Submit"}
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
  </Fragment>
  );
};

export default AddEviction;
const RadioQuestions = ({ question, options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [uploadedFile, setUploadedFile] = useState(null);
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      onChange(event.target.value);
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setUploadedFile(file);
    };
  
    return (
      <Fragment>
        <Col sm="12">
          <h5>{question}</h5>
        </Col>
        <Col sm="12">
          <FormGroup className="m-t-15 custom-radio-ml">
            {options.map((option, index) => (
              <div key={index} className="radio radio-primary">
                <Input
                  id={`radio${question}${index}`}
                  type="radio"
                  name={`radio${question}`}
                  value={option.value}
                  onChange={handleOptionChange}
                  checked={selectedOption === option.value}
                />
                <Label htmlFor={`radio${question}${index}`}>
                  {option.label}
                </Label>
              </div>
            ))}
          </FormGroup>
        </Col>
        {(question === "Is there a written lease with the Occupant?" ||
          question === "Do you maintain a ledger for the Occupant?") && (
          <Col sm="12">
            <FormGroup>
         
              <Input
                type="file"
                name="file"
                id={`file${question}`}
                onChange={handleFileChange}
              />
              <Label for={`file${question}`} className="custom-file-upload">
                {uploadedFile ? uploadedFile.name : "Upload Documents"}
              </Label>
 
            </FormGroup>
          </Col>
        )}
      </Fragment>
    );
  };
  















const OccupantDetail = ({ register, errors }) => {
  const dummyOccupants = [
    {
      name: "John Doe",
      streetAddress: "123 Main St",
      unitNumber: "Apt 101",
      city: "New York",
      zipcode: "10001",
      rentCharge: "1200",
    },
    {
      name: "Jane Smith",
      streetAddress: "456 Elm St",
      unitNumber: "Apt 202",
      city: "Los Angeles",
      zipcode: "90001",
      rentCharge: "1500",
    },
  ];

  const [selectedOccupant, setSelectedOccupant] = useState(null);
  console.log("🚀 ~ OccupantDetail ~ selectedOccupant:", selectedOccupant);

  const handleOccupantSelect = (e) => {
    const selectedName = e.target.value;
    const Occupant = dummyOccupants.find(
      (Occupant) => Occupant.name === selectedName
    );
    setSelectedOccupant(Occupant);
  };

  return (
    <Fragment>
      <Row>
        <Col sm={4}>
          <FormGroup>
            <h6 style={{ color: "black" }}>{"Occupant(s) Name(s)"}</h6>
            {/* Dropdown for selecting Occupant name */}
            <select
              className="form-control"
              onChange={handleOccupantSelect}
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select Occupant
              </option>
              {dummyOccupants.map((Occupant) => (
                <option key={Occupant.name} value={Occupant.name}>
                  {Occupant.name}
                </option>
              ))}
            </select>
          </FormGroup>
        </Col>
      </Row>
      {selectedOccupant && (
        <Row>
          <Col sm={4}>
            <FormGroup>
              <h6 style={{ color: "black" }}>{"Occupant(s) Street Address"}</h6>
              <input
                className="form-control"
                type="text"
                name="OccupantStreetAddress"
                placeholder="Enter Occupant(s) street address"
                value={selectedOccupant.streetAddress}
                {...register("OccupantStreetAddress", { required: true })}
              />
              <span style={{ color: "red" }}>
                {errors.OccupantStreetAddress && "Street address is required"}
              </span>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <h6 style={{ color: "black" }}>
                {"Occupant(s) Unit/Apt Number"}
              </h6>
              <input
                className="form-control"
                type="text"
                name="OccupantUnitNumber"
                placeholder="Enter Occupant(s) unit/apt number"
                value={selectedOccupant.unitNumber}
                {...register("OccupantUnitNumber", { required: true })}
              />
              <span style={{ color: "red" }}>
                {errors.OccupantUnitNumber && "Unit/apt number is required"}
              </span>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <h6 style={{ color: "black" }}>{"Occupant(s) City"}</h6>
              <input
                className="form-control"
                type="text"
                name="OccupantCity"
                placeholder="Enter Occupant(s) city"
                value={selectedOccupant.city}
                {...register("OccupantCity", { required: true })}
              />
              <span style={{ color: "red" }}>
                {errors.OccupantCity && "City is required"}
              </span>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <h6 style={{ color: "black" }}>{"Occupant(s) Zipcode"}</h6>
              <input
                className="form-control"
                type="text"
                name="OccupantZipcode"
                placeholder="Enter Occupant(s) zipcode"
                value={selectedOccupant.zipcode}
                {...register("OccupantZipcode", { required: true })}
              />
              <span style={{ color: "red" }}>
                {errors.OccupantZipcode && "Zipcode is required"}
              </span>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <h6 style={{ color: "black" }}>{"Monthly Rent Charge"}</h6>
              <input
                className="form-control"
                type="text"
                name="monthlyRentCharge"
                placeholder="Enter monthly rent charge"
                value={selectedOccupant.rentCharge}
                {...register("monthlyRentCharge", { required: true })}
              />
              <span style={{ color: "red" }}>
                {errors.monthlyRentCharge && "Monthly rent charge is required"}
              </span>
            </FormGroup>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

const DealForm = ({ register, errors }) => {
  return (
    <Fragment>
      <Row>
        <Col sm={3}>
          <FormGroup>
            <h6 style={{ color: "black" }}>{"Prefix"}</h6>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="prefix*"
              {...register("title", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.title && "Prefix is required"}
            </span>
          </FormGroup>
        </Col>
        <Col sm={3}>
          <FormGroup>
            <h6 style={{ color: "black" }}>{"First Name"}</h6>
            <input
              className="form-control"
              type="text"
              name="price"
              placeholder="First Name *"
              {...register("First Name", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.price && "First Name is required"}
            </span>
          </FormGroup>
        </Col>
        <Col sm={3}>
          <FormGroup>
            <h6 style={{ color: "black" }}>{"Middle Name"}</h6>
            <input
              className="form-control"
              type="text"
              name="price"
              placeholder="Middle Name *"
              {...register("Middle Name", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.price && "Middle Name is required"}
            </span>
          </FormGroup>
        </Col>

        <Col sm={3}>
          <FormGroup>
            <h6 style={{ color: "black" }}>{"Last Name"}</h6>
            <input
              className="form-control"
              type="text"
              name="price"
              placeholder="Last Name *"
              {...register("Last Name", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.price && "Last Name is required"}
            </span>
          </FormGroup>
        </Col>
        <Col sm="3">
          <FormGroup>
            <H6 className="form-label">{"Email Address"}</H6>
            <Input
              className="form-control"
              type="email"
              placeholder="Email Address"
              {...register("Email Address", { required: true })}
            />
            {errors.street && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col sm="3">
          <FormGroup>
            <H6 className="form-label">{"Street"}</H6>
            <Input
              className="form-control"
              type="text"
              placeholder="Street"
              {...register("Street", { required: true })}
            />
            {errors.street && (
              <span className="text-danger">{errors.street.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col sm="3">
          <FormGroup>
            <H6 className="form-label">{"City"}</H6>
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
        <Col sm="3">
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
        <Col sm="3">
          <FormGroup>
            <H6 className="form-label">{"Zip"}</H6>
            <Input
              className="form-control"
              type="text"
              placeholder="Zip"
              {...register("zip", { required: true })}
            />
            {errors.zip && (
              <span className="text-danger">{errors.zip.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col sm="3">
          <FormGroup>
            <H6 className="form-label">{"Country"}</H6>
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
        <Col sm="3">
          <FormGroup>
            <H6 className="form-label">{"Office Phone"}</H6>
            <Input
              className="form-control"
              type="tel"
              placeholder="Office Phone"
              {...register("officePhone")}
            />
            {errors.officePhone && (
              <span className="text-danger">{errors.officePhone.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col sm="3">
          <FormGroup>
            <H6 className="form-label">{"Home Phone"}</H6>
            <Input
              className="form-control"
              type="tel"
              placeholder="Home Phone"
              {...register("homePhone")}
            />
            {errors.homePhone && (
              <span className="text-danger">{errors.homePhone.message}</span>
            )}
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

const Attorney = () => {
    const [selectedAttorney, setSelectedAttorney] = useState("");

    const handleAttorneyChange = (e) => {
        setSelectedAttorney(e.target.value);
    };

    return (
        <Fragment>
            <Row>
                <Col sm={12}>
                    <FormGroup>
                        <Label for="attorney">Select Attorney</Label>
                        <Input
                            type="select"
                            name="attorney"
                            id="attorney"
                            value={selectedAttorney}
                            onChange={handleAttorneyChange}
                        >
                            <option value="">Select Attorney</option>
                            {/* Add options for Slow Flip Attorneys */}
                            <option value="slowFlipAttorney1">Slow Flip Attorney </option>
                            <option value="slowFlipAttorney2">My Attorney</option>
                           
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};
