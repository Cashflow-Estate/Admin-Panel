import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import user3 from "../../assets/images/user/1.jpg";

import {
  Badge,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Breadcrumbs, H3 } from "../../AbstractElements";
import SvgIcon from "../../Components/Common/Component/SvgIcon";

const CRM = () => {
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
            {row.client === "Member" && (
              <div className="edit-icon">
                <SvgIcon iconId={"profile-check"} />
              </div>
            )}
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
      name: "Investment",
      selector: (row) => row["investment"],
      sortable: true,
      center: false,
    },
    {
      name: "Package",
      selector: (row) => row["packageName"],
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
      name: "Client",
      selector: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderClientBadge(row.client)}
        </div>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            color={row.blocked ? "danger" : "success"}
            onClick={() => handleToggleModal(row)}
            style={{ padding: "0.5rem", minWidth: "40px" }}
          >
            {row.blocked ? (
              <i className="icon-unlock"></i>
            ) : (
              <i className="icon-lock"></i>
            )}
          </Button>
        </div>
      ),
      center: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          {" "}
          <Button
            color={""}
            onClick={() => handleViewDetails(row)}
            style={{ padding: "0.6rem", minWidth: "40px" }}
          >
            <i
              class="icofont icofont-info-circle"
              style={{ fontSize: "20px", height: "30px" }}
            ></i>
          </Button>
          <Button
            color={""}
            onClick={() => handleZoom(row)}
            style={{ padding: "0.6rem", minWidth: "40px" }}
          >
            <i
              class="icofont icofont-meeting-add"
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
      image: user3, // Placeholder for image
      position: "System Architect",
      client: "Customers",
      investment: "$320,800",
      location: "Edinburgh",
      skill: null, // Placeholder for skill
      extn: 5421,
      email: "twst@gmail.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "2",
      name: "John",
      image: user3, // Placeholder for image
      position: "System Architect",
      client: "Customers",
      investment: "$320,800",
      location: "Edinburgh",
      skill: null, // Placeholder for skill
      extn: 5421,
      email: "t.nixon@datatables.net",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "3",
      name: "Luca Smith",
      image: user3, // Placeholder for image
      position: "Junior Technical Author",
      client: "Customers",
      investment: "$86,000",
      location: "San Francisco",
      skill: null, // Placeholder for skill
      extn: 1562,
      email: "a.cox@datatables.net",
      packageName: "basic",
      blockUser: true,
    },
    {
      id: "4",
      name: "ABid",
      image: user3, // Placeholder for image
      position: "Senior Developer",
      client: "Free",
      investment: "$100,000",
      location: "New York",
      skill: null, // Placeholder for skill
      extn: 1234,
      email: "john.doe@example.com",
      packageName: "premium",
      blockUser: false,
    },
    // Additional data entries
    {
      id: "5",
      name: "Emily Watson",
      image: user3, // Placeholder for image
      position: "UX Designer",
      client: "Members",
      investment: "$250,000",
      location: "London",
      skill: null, // Placeholder for skill
      extn: 7890,
      email: "emily.watson@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "6",
      name: "Michael Brown",
      image: user3, // Placeholder for image
      position: "Project Manager",
      client: "Customers",
      investment: "$420,000",
      location: "Los Angeles",
      skill: null, // Placeholder for skill
      extn: 2468,
      email: "m.brown@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "7",
      name: "Sophia Lee",
      image: user3, // Placeholder for image
      position: "Software Engineer",
      client: "Members",
      investment: "$180,000",
      location: "Chicago",
      skill: null, // Placeholder for skill
      extn: 1357,
      email: "s.lee@example.com",
      packageName: "basic",
      blockUser: false,
    },
    {
      id: "8",
      name: "David Green",
      image: user3, // Placeholder for image
      position: "Data Analyst",
      client: "Free",
      investment: "$150,000",
      location: "Houston",
      skill: null, // Placeholder for skill
      extn: 9753,
      email: "d.green@example.com",
      packageName: "premium",
      blockUser: true,
    },
    {
      id: "9",
      name: "Emma Johnson",
      image: user3, // Placeholder for image
      position: "Marketing Manager",
      client: "Customers",
      investment: "$300,000",
      location: "Toronto",
      skill: null, // Placeholder for skill
      extn: 3579,
      email: "emma.johnson@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "10",
      name: "Daniel Kim",
      image: user3, // Placeholder for image
      position: "Senior Software Developer",
      client: "Customers",
      investment: "$280,000",
      location: "Seoul",
      skill: null, // Placeholder for skill
      extn: 8642,
      email: "d.kim@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "11",
      name: "Olivia Chen",
      image: user3, // Placeholder for image
      position: "UI/UX Designer",
      client: "Members",
      investment: "$200,000",
      location: "Tokyo",
      skill: null, // Placeholder for skill
      extn: 1593,
      email: "o.chen@example.com",
      packageName: "basic",
      blockUser: false,
    },
    {
      id: "12",
      name: "Samuel Brown",
      image: user3, // Placeholder for image
      position: "IT Support Specialist",
      client: "Free",
      investment: "$120,000",
      location: "Sydney",
      skill: null, // Placeholder for skill
      extn: 7531,
      email: "s.brown@example.com",
      packageName: "basic",
      blockUser: true,
    },
    {
      id: "13",
      name: "Grace Lee",
      image: user3, // Placeholder for image
      position: "Frontend Developer",
      client: "Customers",
      investment: "$220,000",
      location: "San Francisco",
      skill: null, // Placeholder for skill
      extn: 2468,
      email: "grace.lee@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "14",
      name: "William Johnson",
      image: user3, // Placeholder for image
      position: "Software Engineer",
      client: "Customers",
      investment: "$320,000",
      location: "New York",
      skill: null, // Placeholder for skill
      extn: 3579,
      email: "w.johnson@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "15",
      name: "Ethan Wilson",
      image: user3, // Placeholder for image
      position: "Database Administrator",
      client: "Customers",
      investment: "$280,000",
      location: "Los Angeles",
      skill: null, // Placeholder for skill
      extn: 8642,
      email: "e.wilson@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "16",
      name: "Nora Miller",
      image: user3, // Placeholder for image
      position: "UI/UX Designer",
      client: "Customers",
      investment: "$180,000",
      location: "Chicago",
      skill: null, // Placeholder for skill
      extn: 1593,
      email: "n.miller@example.com",
      packageName: "basic",
      blockUser: false,
    },
    {
      id: "17",
      name: "Liam Martinez",
      image: user3, // Placeholder for image
      position: "Project Manager",
      client: "Free",
      investment: "$150,000",
      location: "Houston",
      skill: null, // Placeholder for skill
      extn: 7531,
      email: "liam.martinez@example.com",
      packageName: "basic",
      blockUser: true,
    },
    {
      id: "18",
      name: "Chloe Garcia",
      image: user3, // Placeholder for image
      position: "Marketing Specialist",
      client: "Customers",
      investment: "$300,000",
      location: "Miami",
      skill: null, // Placeholder for skill
      extn: 9512,
      email: "chloe.garcia@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "19",
      name: "Alexander Taylor",
      image: user3, // Placeholder for image
      position: "System Analyst",
      client: "Customers",
      investment: "$250,000",
      location: "Dallas",
      skill: null, // Placeholder for skill
      extn: 1478,
      email: "a.taylor@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "20",
      name: "Madison Clark",
      image: user3, // Placeholder for image
      position: "Quality Assurance Analyst",
      client: "Customers",
      investment: "$280,000",
      location: "Boston",
      skill: null, // Placeholder for skill
      extn: 3698,
      email: "madison.clark@example.com",
      packageName: "basic",
      blockUser: false,
    },
    {
      id: "21",
      name: "Oliver White",
      image: user3, // Placeholder for image
      position: "Network Administrator",
      client: "Free",
      investment: "$120,000",
      location: "Seattle",
      skill: null, // Placeholder for skill
      extn: 7854,
      email: "oliver.white@example.com",
      packageName: "basic",
      blockUser: true,
    },
    {
      id: "22",
      name: "Ava Hall",
      image: user3, // Placeholder for image
      position: "Technical Writer",
      client: "Customers",
      investment: "$220,000",
      location: "San Diego",
      skill: null, // Placeholder for skill
      extn: 2369,
      email: "ava.hall@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "23",
      name: "Noah Martinez",
      image: user3, // Placeholder for image
      position: "Software Developer",
      client: "Customers",
      investment: "$320,000",
      location: "Austin",
      skill: null, // Placeholder for skill
      extn: 4152,
      email: "noah.martinez@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "24",
      name: "Isabella Rodriguez",
      image: user3, // Placeholder for image
      position: "Business Analyst",
      client: "Customers",
      investment: "$180,000",
      location: "Denver",
      skill: null, // Placeholder for skill
      extn: 3698,
      email: "isabella.rodriguez@example.com",
      packageName: "basic",
      blockUser: false,
    },
    {
      id: "25",
      name: "James Lopez",
      image: user3, // Placeholder for image
      position: "Technical Support Engineer",
      client: "Free",
      investment: "$150,000",
      location: "Phoenix",
      skill: null, // Placeholder for skill
      extn: 7854,
      email: "james.lopez@example.com",
      packageName: "basic",
      blockUser: true,
    },
    {
      id: "26",
      name: "Mia Perez",
      image: user3, // Placeholder for image
      position: "Systems Administrator",
      client: "Customers",
      investment: "$300,000",
      location: "Philadelphia",
      skill: null, // Placeholder for skill
      extn: 2154,
      email: "mia.perez@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "27",
      name: "Benjamin Sanchez",
      image: user3, // Placeholder for image
      position: "UI Designer",
      client: "Customers",
      investment: "$280,000",
      location: "Portland",
      skill: null, // Placeholder for skill
      extn: 9632,
      email: "benjamin.sanchez@example.com",
      packageName: "basic",
      blockUser: false,
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetailsModalOpen, setUserDetailsModalOpen] = useState(false);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderClientBadge = (client) => {
    let color;
    switch (client) {
      case "Customers":
        color = "success";
        break;
      default:
        color = "secondary";
    }
    return <Badge color={color}>{client}</Badge>;
  };

  const handleToggleModal = (user) => {
    setSelectedUser(user);
    setModalOpen(!modalOpen);
  };

  const filteredData = supportData.filter((user) => {
    return (
      user.client === "Customers" &&
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const history = useNavigate();
  const handleViewDetails = (user) => {
    history("/user-details/1");
  };
  const handleZoom = (user) => {
    history(`/upcoming-call`);
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="CRM" parent="Users" title="View Users" />

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
        />
      </div>
      <Modal isOpen={modalOpen} toggle={handleToggleModal}>
        <ModalBody>
          Are you sure you want to {selectedUser?.blocked ? "unblock" : "block"}{" "}
          this user?
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
      </Modal>
      {/* User Details Modal */}
      <Modal
        isOpen={userDetailsModalOpen}
        toggle={() => setUserDetailsModalOpen(false)}
      >
        <Button color={"black"} onClick={() => setUserDetailsModalOpen(false)}>
          <i
            className="icofont icofont-close d-flex justify-content-end pt-3"
            style={{ fontSize: "24px" }}
          ></i>{" "}
        </Button>
        <ModalBody>
          <p>User ID: {selectedUserDetails?.id}</p>
          <p>Email: {selectedUserDetails?.email}</p>
          <p>Block: {selectedUserDetails?.blockUser}</p>
          <p>Client: {selectedUserDetails?.client}</p>
          <p>Location: {selectedUserDetails?.location}</p>
          <p>PackageName: {selectedUserDetails?.packageName}</p>
          <p>Position: {selectedUserDetails?.position}</p>
          <p>Investment: {selectedUserDetails?.investment}</p>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default CRM;
