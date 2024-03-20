import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { supportColumns, supportData } from "../../Data/SupportTicket";
import {
  Badge,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Breadcrumbs, H3 } from "../../AbstractElements";

const CRM = () => {
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

  const customColumns = [
    ...supportColumns,
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            color={""}
            onClick={() => handleViewDetails(row)}
            style={{ margin: "0 5px" }}
          >
            <i className="icon-more-alt"></i>
          </Button>
        </div>
      ),
      button: true,
      width: "20%",
      center: true,
    },
  ];

  const filteredData = supportData.filter((user) => {
    return (
      user.client === "Customers" &&
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const history = useNavigate();
  const handleViewDetails = (user) => {
history("/user-details/1")
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="All Users" parent="Users" title="View Users" />

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
