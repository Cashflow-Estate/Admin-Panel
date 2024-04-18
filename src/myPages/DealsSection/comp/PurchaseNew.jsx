import React, { Fragment, useState } from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { Breadcrumbs, Image } from "../../../AbstractElements";
import { FaPencilAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import UploadProjectFileClass from "./UploadProjectFile";

const PurchaseNew = () => {
  const { register: registerOccupant, handleSubmit: handleSubmitOccupant } =
    useForm();
  const [url, setUrl] = useState("");

  const readUrl = (event) => {
    if (event.target.files.length === 0) return;
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setUrl(reader.result);
    };
  };

  const onOccupantSubmit = async (data) => {
    // Save occupant data
    console.log(data);
    // Move to the next step
    // For example, display property selection form
  };

  // Dummy array data for street addresses
  const streetAddresses = [
    "123 Main Street",
    "456 Elm Street",
    "789 Oak Avenue",
    "101 Pine Road",
    "202 Maple Lane",
    "303 Cedar Drive",
    "404 Birch Court",
    "505 Walnut Circle",
    "606 Chestnut Avenue",
    "707 Spruce Street",
    "808 Aspen Lane",
    "909 Willow Road",
  ];

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Rent a New Property"
        parent="Rent"
        title="Rent a New Property"
      />
      <form onSubmit={handleSubmitOccupant(onOccupantSubmit)}>
        <Row>
          {" "}
          <Col sm={3}>
            <FormGroup>
              <div style={{ cursor: "pointer" }} className="media">
                <Image
                  attrImage={{
                    className: "img-70 m-0 rounded-circle",
                    alt: "",
                    src: url
                      ? url
                      : require("../../../assets/images/user/1.jpg"),
                  }}
                  onClick={() =>
                    document.getElementById("profile-image-input").click()
                  }
                />
                <label
                  htmlFor="profile-image-input"
                  style={{ display: "none" }}
                >
                  <FaPencilAlt className="edit-icon" />
                </label>
                <input
                  id="profile-image-input"
                  style={{ display: "none" }}
                  className="upload"
                  type="file"
                  onChange={(e) => readUrl(e)}
                />
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <h6>Occupant Name</h6>
              <Input
                className="form-control"
                type="text"
                {...registerOccupant("name")}
                placeholder="Name"
                defaultValue={"Abid"}
              />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <h6>Email</h6>
              <Input
                className="form-control"
                type="email"
                {...registerOccupant("email")}
                placeholder="Email"
                defaultValue={"zaidi@gmail.com"}

              />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <h6>Phone</h6>
              <Input
                className="form-control"
                type="tel"
                {...registerOccupant("phone")}
                placeholder="Phone"
                defaultValue={"91 325874 954"}

              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <h6>Secondary Name</h6>
              <Input
                className="form-control"
                type="text"
                {...registerOccupant("name")}
                placeholder="Name"
              />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <h6>Email</h6>
              <Input
                className="form-control"
                type="email"
                {...registerOccupant("email")}
                placeholder="Email"
              />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <h6>Phone</h6>
              <Input
                className="form-control"
                type="tel"
                {...registerOccupant("phone")}
                placeholder="Phone"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
       
              <Col sm={4}>
                <FormGroup>
                  <h6>Rate per month</h6>
                  <Input
                    className="form-control"
                    type="rent"
                    {...registerOccupant("rent")}
                    placeholder="Monthly Rate"
                  />
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <h6>Deadline</h6>
                  <Input
                    className="form-control"
                    type="deadline"
                    {...registerOccupant("deadline")}
                    defaultValue={"10 of every month"}
                  />
                </FormGroup>
              </Col>

              <Col sm={4}>
                <FormGroup>
              <h6>Late Fees Fine in %</h6>
              <Input
                className="form-control"
                type="fine"
                {...registerOccupant("fine")}
                defaultValue={"10%"}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col sm={12}>
            <FormGroup>
              <h6>Property</h6>
              <Input type="select" {...registerOccupant("property")}>
                {streetAddresses.map((address, index) => (
                  <option key={index} value={address}>
                    {address}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <UploadProjectFileClass property={"true"} />

        <button type="submit" className="btn btn-primary mr-2">
          Save
        </button>
      </form>
    </Fragment>
  );
};

export default PurchaseNew;
