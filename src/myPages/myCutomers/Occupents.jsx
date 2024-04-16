import React, { Fragment, useState } from "react";
import { Input, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import DataTable from "react-data-table-component";
import { Breadcrumbs } from "../../AbstractElements";
import user3 from '../../assets/images/user/1.jpg';

const Occupants = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const customColumns = [
    {
      name: 'Image',
      cell: (row) => (
        <div className="social-img-wrap">
          <div >
            <img className="img-60 m-0 rounded-circle" src={row.image} alt="User" style={{ width: '100px' }} />
          </div>
        </div>
      ),
      center: false,
    },
    {
      name: 'Name',
      selector: (row) => row['name'],
      sortable: true,
      center: false,
    },
    {
      name: 'Email',
      selector: (row) => row['email'],
      sortable: true,
      center: false,
      minWidth: '200px',
      maxWidth: '300px',
    },
    {
      name: 'Location',
      selector: (row) => row['location'],
      sortable: true,
      center: false,
    },
    {
      name: 'Property',
      selector: (row) => row['propertyType'],
      sortable: true,
      center: false,
      cell: (row) => (
        <span style={{ color: row.propertyType === 'commercial' ? 'green' : 'orange' }}>
          {row.propertyType.toUpperCase()}
        </span>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <Button color={""} onClick={() => handleViewDetails(row)} style={{ padding: "0.6rem", minWidth: "40px" }}>
          <i className="icofont icofont-info-circle" style={{fontSize: "20px", height: "30px"}}></i>
        </Button>
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
      email: 'twst@gmail.com',
      location: 'Edinburgh',
      blocked: false,
      propertyType: 'residential',
    },
    {
      id: "2",
      name: "John Doe",
      image: user3,
      email: 'john.doe@example.com',
      location: 'New York',
      blocked: true,
      propertyType: 'residential',
    },
    {
      id: "3",
      name: "Emma Johnson",
      image: user3,
      email: 'emma.johnson@example.com',
      location: 'Toronto',
      blocked: false,
      propertyType: 'commercial',
    },
    {
      id: "4",
      name: "Michael Brown",
      image: user3,
      email: 'm.brown@example.com',
      location: 'Los Angeles',
      blocked: false,
      propertyType: 'commercial',
    },
    {
      id: "5",
      name: "Sophia Lee",
      image: user3,
      email: 's.lee@example.com',
      location: 'Chicago',
      blocked: false,
      propertyType: 'residential',
    },
    {
      id: "6",
      name: "David Green",
      image: user3,
      email: 'd.green@example.com',
      location: 'Houston',
      blocked: true,
      propertyType: 'commercial',
    },
    {
      id: "7",
      name: "Oliver White",
      image: user3,
      email: 'oliver.white@example.com',
      location: 'Seattle',
      blocked: false,
      propertyType: 'residential',
    },
    {
      id: "8",
      name: "Chloe Garcia",
      image: user3,
      email: 'chloe.garcia@example.com',
      location: 'Miami',
      blocked: false,
      propertyType: 'commercial',
    },
    {
      id: "9",
      name: "Alexander Taylor",
      image: user3,
      email: 'a.taylor@example.com',
      location: 'Dallas',
      blocked: false,
      propertyType: 'residential',
    },
    {
      id: "10",
      name: "Madison Clark",
      image: user3,
      email: 'madison.clark@example.com',
      location: 'Boston',
      blocked: false,
      propertyType: 'commercial',
    },
    {
      id: "11",
      name: "Alice Smith",
      image: user3,
      email: 'twst@gmail.com',
      location: 'Edinburgh',
      blocked: false,
      propertyType: 'commercial',
    },
    {
      id: "12",
      name: "John Doe",
      image: user3,
      email: 'john.doe@example.com',
      location: 'New York',
      blocked: true,
      propertyType: 'residential',
    },
    {
      id: "13",
      name: "Emma Johnson",
      image: user3,
      email: 'emma.johnson@example.com',
      location: 'Toronto',
      blocked: false,
      propertyType: 'commercial',
    },
    {
      id: "14",
      name: "Michael Brown",
      image: user3,
      email: 'm.brown@example.com',
      location: 'Los Angeles',
      blocked: false,
      propertyType: 'commercial',
    },
    {
      id: "15",
      name: "Sophia Lee",
      image: user3,
      email: 's.lee@example.com',
      location: 'Chicago',
      blocked: false,
      propertyType: 'residential',
    },
    {
      id: "16",
      name: "David Green",
      image: user3,
      email: 'd.green@example.com',
      location: 'Houston',
      blocked: true,
      propertyType: 'commercial',
    },
    {
      id: "17",
      name: "White",
      image: user3,
      email: 'oliver.white@example.com',
      location: 'Seattle',
      blocked: false,
      propertyType: 'residential',
    }
    // Add more data entries if needed
  ];
  

  const filteredData = supportData.filter((user) => {
    const nameMatches = user.name.toLowerCase().includes(searchTerm.toLowerCase());
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

  const handleToggleModal = (user) => {
    setSelectedUser(user);
    setModalOpen(!modalOpen);
  };

  const handleViewDetails = (user) => {
    console.log("View details for:", user);
    // Add your logic for viewing details here
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="All Occupents" parent="Occupents" title="View Occupents" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
              className="p-2"
            />
          </div>
          <div className="col-md-6 text-right">
            <Input
              type="select"
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="All">All</option>
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
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
      {/* <Modal isOpen={modalOpen} toggle={handleToggleModal}>
        <ModalBody>
          Are you sure you want to {selectedUser?.blocked ? "unblock" : "block"} this user?
        </ModalBody>
        <ModalFooter>
          <Button color={"black"} onClick={handleToggleModal}>
            Cancel
          </Button>
          <Button
            color={selectedUser?.blocked ? "danger" : "success"}
            onClick={() => {
              handleToggleModal(null);
            }}
          >
            {selectedUser?.blocked ? "Unblock" : "Block"}
          </Button>
        </ModalFooter>
      </Modal> */}
    </Fragment>
  );
};

export default Occupants;
