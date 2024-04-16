import React, { Fragment, useState, useEffect } from 'react';
import { Col, FormGroup, Input, Row } from 'reactstrap';
import { Breadcrumbs, Image } from '../../../AbstractElements';
import { FaPencilAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";

const AddNewOccupant = () => {
    const { register: registerOccupant, handleSubmit: handleSubmitOccupant, setValue: setOccupantValue, formState: { errors: errorsOccupant } } = useForm();
    const [url, setUrl] = useState("");
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [propertyDetails, setPropertyDetails] = useState(null);

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

    const onPropertySubmit = async (data) => {
        // Save selected property
        setSelectedProperty(data.property);
        // Fetch property details
        const propertyDetails = await fetchPropertyDetails(data.property);
        setPropertyDetails(propertyDetails);
        // Autofill occupant fields
        if (propertyDetails) {
            setOccupantValue("address", propertyDetails.address);
            setOccupantValue("city", propertyDetails.city);
            setOccupantValue("state", propertyDetails.state);
            setOccupantValue("country", propertyDetails.country);
            setOccupantValue("zip", propertyDetails.zip);
            setOccupantValue("monthlyRent", propertyDetails.monthlyRent);
            setOccupantValue("propertyType", propertyDetails.propertyType);
        }
    };

    // Dummy function to fetch property details
    const fetchPropertyDetails = async (propertyId) => {
        // Fetch property details based on propertyId
        // Return dummy data for now
        if (propertyId === 'california_plaza') {
            return {
                address: '123 Main St',
                city: 'Los Angeles',
                state: 'California',
                country: 'USA',
                zip: '90001',
                monthlyRent: 1500,
                propertyType: 'Residential'
            };
        } else if (propertyId === 'new_york_tower') {
            return {
                address: '456 Broadway',
                city: 'New York',
                state: 'New York',
                country: 'USA',
                zip: '10001',
                monthlyRent: 2000,
                propertyType: 'Commercial'
            };
        }
    };

    // Dummy dropdown options
    const dropdownOptions = [
        { label: 'California Plaza', value: 'california_plaza' },
        { label: 'New York Tower', value: 'new_york_tower' },
    ];

    return (
        <Fragment>
            <Breadcrumbs
                mainTitle="Create a New Occupant"
                parent="Occupant"
                title="Add Occupant"
            />
            <form onSubmit={handleSubmitOccupant(onOccupantSubmit)}>
                {/* Property selection */}
                <FormGroup>
                    <h6>Select Property</h6>
                    <select className="form-control" {...registerOccupant("property")} onChange={(e) => onPropertySubmit({ property: e.target.value })}>
                        {dropdownOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </FormGroup>
                {/* Occupant details */}
                <Row>
                    <Col sm={12}>
                        <FormGroup>
                            <div style={{ cursor: "pointer" }} className="media">
                                <Image
                                    attrImage={{
                                        className: "img-70 m-0 rounded-circle",
                                        alt: "",
                                        src: url ? url : require("../../../assets/images/user/1.jpg"),
                                    }}
                                    onClick={() => document.getElementById("profile-image-input").click()}
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
                    <Col sm={4}>
                        <FormGroup>
                            <h6>Name</h6>
                            <Input className="form-control" type="text" {...registerOccupant("name")} placeholder="Name" />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <h6>Email</h6>
                            <Input className="form-control" type="email" {...registerOccupant("email")} placeholder="Email" />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <h6>Phone</h6>
                            <Input className="form-control" type="tel" {...registerOccupant("phone")} placeholder="Phone" />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <h6>Address</h6>
                            <Input className="form-control" type="text" {...registerOccupant("address")} placeholder="Address" value={propertyDetails ? propertyDetails.address : ""} readOnly />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <h6>City</h6>
                            <Input className="form-control" type="text" {...registerOccupant("city")} placeholder="City" value={propertyDetails ? propertyDetails.city : ""} readOnly />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <h6>State</h6>
                            <Input className="form-control" type="text" {...registerOccupant("state")} placeholder="State" value={propertyDetails ? propertyDetails.state : ""} readOnly />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <h6>Country</h6>
                            <Input className="form-control" type="text" {...registerOccupant("country")} placeholder="Country" value={propertyDetails ? propertyDetails.country : ""} readOnly />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <h6>Zip</h6>
                            <Input className="form-control" type="text" {...registerOccupant("zip")} placeholder="Zip" value={propertyDetails ? propertyDetails.zip : ""} readOnly />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <h6>Monthly Rent</h6>
                            <Input className="form-control" type="number" {...registerOccupant("monthlyRent")} placeholder="Monthly Rent" value={propertyDetails ? propertyDetails.monthlyRent : ""} readOnly />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <h6>Property Type</h6>
                            <Input className="form-control" type="text" {...registerOccupant("propertyType")} placeholder="Property Type" value={propertyDetails ? propertyDetails.propertyType : ""} readOnly />
                        </FormGroup>
                    </Col>
                </Row>
                <button type="submit" className="btn btn-primary mr-2">Save</button>
            </form>
        </Fragment>
    );
};

export default AddNewOccupant;
