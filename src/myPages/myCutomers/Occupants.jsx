import React, { Fragment, useState } from "react";
import {
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
} from "reactstrap";
import DataTable from "react-data-table-component";
import { Breadcrumbs } from "../../AbstractElements";
import user3 from "../../assets/images/user/1.jpg";
import { Link, useNavigate } from "react-router-dom";

const Occupants = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [propertyCategory, setPropertyCategory] = useState(""); // To track selected property category
  const [selectedProperty, setSelectedProperty] = useState(""); // To track selected property

  const customColumns = [
    {
      name: "Image",
      cell: (row) => (
        <div className="social-img-wrap">
          <div>
            <img
              className="img-60 m-0 rounded-circle"
              src={row.image}
              alt="User"
              style={{ width: "100px" }}
            />
          </div>
        </div>
      ),
      center: false,
    },
    {
      name: "Name",
      selector: (row) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: "Email",
      selector: (row) => row["email"],
      sortable: true,
      center: false,
      minWidth: "200px",
      maxWidth: "300px",
    },
    {
      name: "Location",
      selector: (row) => row["location"],
      sortable: true,
      center: false,
    },
    {
      name: "Property",
      selector: (row) => row["propertyType"],
      sortable: true,
      center: false,
      cell: (row) => (
        <span
          style={{
            color:
              row.propertyType === "singleFamilyHome"
                ? "green"
                : row.propertyType === "condo"
                ? "blue"
                : row.propertyType === "apartment"
                ? "orange"
                : "purple",
          }}
        >
          {row.propertyType.toUpperCase()}
        </span>
      ),
    },
    {
      name: "Status",
      selector: (row) => row["blocked"],
      center: true,
      cell: (row) => (
        <span style={{ color: row.blocked ? "red" : "green" }}>
          {row.blocked ? "Inactive" : "Active"}
        </span>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Button
            color=""
            onClick={() => handleAssignProperty(row)}
            style={{ padding: "0.6rem", minWidth: "20px" }}
          >
            <i
              className="icofont icofont-plus"
              style={{ fontSize: "20px", height: "30px" }}
            ></i>
          </Button>
          <Button
            color=""
            onClick={() => handleViewDetails(row)}
            style={{ padding: "0.6rem", minWidth: "20px" }}
          >
            <i
              className="icofont icofont-info-circle"
              style={{ fontSize: "20px", height: "30px" }}
            ></i>
          </Button>
          <Button
            color=""
            // onClick={() => handleViewDetails(row)}
            style={{ padding: "0.6rem", minWidth: "20px" }}
          >
            <i
              className="icofont icofont-trash"
              style={{ fontSize: "20px", height: "30px" }}
            ></i>
          </Button>
        </>
      ),
      button: true,
      center: true,
    },
  ];

  const supportData = [
    {
      id: "1",
      name: "Alice Smith",
      image: user3,
      email: "twst@gmail.com",
      location: "Edinburgh",
      blocked: false,
      propertyType: "singleFamilyHome",
    },
    {
      id: "2",
      name: "John Doe",
      image: user3,
      email: "john.doe@example.com",
      location: "New York",
      blocked: true,
      propertyType: "singleFamilyHome",
    },
    {
      id: "3",
      name: "Emma Johnson",
      image: user3,
      email: "emma.johnson@example.com",
      location: "Toronto",
      blocked: false,
      propertyType: "condo",
    },
    {
      id: "4",
      name: "Michael Brown",
      image: user3,
      email: "m.brown@example.com",
      location: "Los Angeles",
      blocked: false,
      propertyType: "condo",
    },
    {
      id: "5",
      name: "Sophia Lee",
      image: user3,
      email: "s.lee@example.com",
      location: "Chicago",
      blocked: false,
      propertyType: "apartment",
    },
    {
      id: "6",
      name: "David Green",
      image: user3,
      email: "d.green@example.com",
      location: "Houston",
      blocked: true,
      propertyType: "apartment",
    },
    {
      id: "7",
      name: "Oliver White",
      image: user3,
      email: "oliver.white@example.com",
      location: "Seattle",
      blocked: false,
      propertyType: "townhome",
    },
    {
      id: "8",
      name: "Chloe Garcia",
      image: user3,
      email: "chloe.garcia@example.com",
      location: "Miami",
      blocked: false,
      propertyType: "townhome",
    },
    // Add more data entries if needed
  ];

  const filteredData = supportData.filter((user) => {
    const nameMatches = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (filter === "All") {
      return nameMatches;
    } else {
      return user.propertyType === filter && nameMatches;
    }
  });

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAssignProperty = (user) => {
    // setSelectedUser(user);
    // setModalOpen(true);
    history(`/purchase-new/${user.id}`);
  };

  const handleViewDetails = (user) => {
    console.log("View details for:", user);
    // Add your logic for viewing details here
  };

  const history = useNavigate();
  const handleAddOccupant = () => {
    history("/new-occupant");
  };

  const handlePropertyCategoryChange = (category) => {
    setPropertyCategory(category);
    setSelectedProperty(""); // Reset selected property when category changes
  };

  const handleAssign = () => {
    // Here you can implement the logic for assigning the selected property to the selected user
    console.log(
      "Assigned property:",
      selectedProperty,
      "to user:",
      selectedUser
    );
    setModalOpen(false);
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="All Occupants"
        parent="Occupants"
        title="View Occupants"
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Button color="success" onClick={handleAddOccupant}>
              Create new occupant
            </Button>
          </div>
          <div className="col-md-5">
            <Input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
              className="p-2"
            />
          </div>
          <div className="col-md-4 text-right">
            <Input
              type="select"
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="All">All</option>
              <option value="singleFamilyHome">Single Family Home</option>
              <option value="condo">Condo</option>
              <option value="apartment">Apartment</option>
              <option value="townhome">Townhome</option>
            </Input>
          </div>
        </div>
      </div>

      <div className="table-responsive support-table mt-3">
        <DataTable
          columns={customColumns}
          data={filteredData}
          striped={true}
          center={true}
          pagination
          className="p-2"
          responsive={true}
        />
      </div>

      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalBody>
          <FormGroup>
            <Label for="propertyCategorySelect">
              Select Property Category:
            </Label>
            <Input
              type="select"
              name="propertyCategorySelect"
              id="propertyCategorySelect"
              value={propertyCategory}
              onChange={(e) => handlePropertyCategoryChange(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="singleFamilyHome">Single Family Home</option>
              <option value="condo">Condo</option>
              <option value="apartment">Apartment</option>
              <option value="townhome">Townhome</option>
            </Input>
          </FormGroup>
          {propertyCategory && (
            <FormGroup>
              <Label for="propertySelect">Assign Property:</Label>
              <Input
                type="select"
                name="propertySelect"
                id="propertySelect"
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
              >
                <option value="">Select Property</option>
                {propertyCategory === "singleFamilyHome" ? (
                  <>
                    <option value="singleFamilyHome1">
                      Single Family Home 1
                    </option>
                    <option value="singleFamilyHome2">
                      Single Family Home 2
                    </option>
                  </>
                ) : propertyCategory === "condo" ? (
                  <>
                    <option value="condo1">Condo 1</option>
                    <option value="condo2">Condo 2</option>
                  </>
                ) : propertyCategory === "apartment" ? (
                  <>
                    <option value="apartment1">Apartment 1</option>
                    <option value="apartment2">Apartment 2</option>
                  </>
                ) : (
                  <>
                    <option value="townhome1">Townhome 1</option>
                    <option value="townhome2">Townhome 2</option> 
                  </>
                )}
              </Input>
            </FormGroup>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModalOpen(!modalOpen)}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={handleAssign}
            disabled={!selectedProperty}
          >
            Assign
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default Occupants;
