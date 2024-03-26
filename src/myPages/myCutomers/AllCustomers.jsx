import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { supportColumns, supportData } from "../../Data/SupportTicket";
import {
  Badge,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Breadcrumbs, H3 } from "../../AbstractElements";

const AllCustomers = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetailsModalOpen, setUserDetailsModalOpen] = useState(false);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);

  const FilterIcon = () => (
    <span>
      <i className="icofont icofont-filter"></i>
    </span>
  );

  const RoundedDropdowns = ({ item }) => {
    return (
      <Dropdown isOpen={item.isOpen} toggle={item.toggle}>
        <ButtonGroup className="mb-0">
          <Button
            className="dropbtn rounded-pill"
            color="info"
            onClick={item.toggle}
          >
            {item.btnText} <FilterIcon />
          </Button>
          <DropdownMenu className="dropdown-content">
            {item.items.map((itm) => (
              <DropdownItem
                href="#"
                key={itm.id}
                onClick={() => handleFilterChange(itm.filterValue)}
              >
                {itm.item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonGroup>
      </Dropdown>
    );
  };

  const filteredData = supportData.filter((user) => {
    if (filter === "All") {
      return user?.email?.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return (
      user.client === filter &&
      user?.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
    setFilterOpen(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderClientBadge = (client) => {
    let color;
    switch (client) {
      case "Members":
        color = "warning";
        break;
      case "Customers":
        color = "success";

        break;
      case "Free":
        color = "danger";
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
        <Button color={""} onClick={() => handleViewDetails(row)}>
          <i className="icon-more-alt"></i>
        </Button>
      ),
      button: true,
      center: true,
    },
  ];

  const history = useNavigate();
  const handleViewDetails = (user) => {
    history(`/user-details/${user.id}`); 
  };

  return (
    <Fragment>
      <style>
        {`
          .primary-color {
            background-color: #427b01;
            border-color: #427b01;
            color: #fff;
          }
          .secondary-color {
            background-color: #000000;
            border-color: #000000;
            color: #fff;
          }
          .success-color {
            background-color: #28a745;
            border-color: #28a745;
            color: #fff;
          }
          .info-color {
            background-color: #17a2b8;
            border-color: #17a2b8;
            color: #fff;
          }
          .danger-color {
            background-color: #dc3545;
            border-color: #dc3545;
            color: #fff;
          }
        `}
      </style>
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
          <div className="col-md-6 text-right">
            <RoundedDropdowns
              item={{
                btnText: filter === "All" ? "All" : filter,
                isOpen: filterOpen,
                toggle: () => setFilterOpen(!filterOpen),
                items: [
                  { id: 1, item: "All", filterValue: "All" },
                  { id: 2, item: "Paid Member", filterValue: "Members" },
                  {
                    id: 3,
                    item: "Paid Customer",
                    filterValue: "Customers",
                  },
                  {
                    id: 4,
                    item: "Free Trial Member",
                    filterValue: "Free",
                  },
                ],
              }}
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
          responsive={true} 
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

export default AllCustomers;
