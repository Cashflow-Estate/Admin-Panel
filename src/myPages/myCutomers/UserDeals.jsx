import React, { Fragment, useState } from "react";
import DataTable from "react-data-table-component";
import { Button } from "reactstrap";
import iii from "../../../src/assets/cashflowimg/apartments/a1.png";
import { useNavigate } from "react-router";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Breadcrumbs } from "../../AbstractElements";

const UserDeals = ({ heading }) => {
  const [modal, setModal] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleDelete = (deal) => {
    setSelectedDeal(deal);
    toggleModal();
  };

  const confirmDelete = () => {
    // Perform delete operation
    console.log("Deleting deal:", selectedDeal);
    toggleModal(); // Close the modal after deleting
  };
  const [dealsData] = useState([
    {
      id: 1,
      title: "Deal 1",
      image: "deal1.jpg",
      //   status: "Active",
      queries: <i className="fa fa-rss-square"></i>,
      address: "123 Main St, City, Country",
    },
    {
      id: 2,
      title: "Deal 2",
      image: "deal2.jpg",
      //   status: "Inactive",
      queries: <i className="fa fa-rss-square"></i>,
      address: "456 Elm St, City, Country",
    },
    // Add more deals as needed
  ]);
  const history = useNavigate();

  const handleViewDetails = (user) => {
    history(`/deals/1`);
  };

  const handleEdit = (row) => {
    history(`/deals/create`);
  };

  const handleViewQueries = (deal) => {
    history("/customer/queries");
  };

  const customColumns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      center: false,
    },
    {
      name: "Image",
      cell: (row) => (
        <img src={iii} alt={row.title} style={{ width: "50px" }} />
      ),
      sortable: false,
      center: true,
    },
    // {
    //   name: "Status",
    //   selector: (row) => (
    //     <button
    //       className={`btn badge-light-${
    //         row.status === "Inactive" ? "light" : "primary"
    //       } ${row.status === "Inactive" && "disabled"}`}
    //     >
    //       {row.status}
    //     </button>
    //   ),
    //   sortable: true,
    //   center: false,
    // },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
      center: false,
    },
    {
      name: "Queries",
      cell: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Button color="" onClick={() => handleViewQueries(row)}>
            <i style={{ fontSize: "20px" }} className="icofont icofont-eye"></i>
          </Button>
        </div>
      ),
      sortable: true,
      center: false,
    },
    {
      name: "Details",
      cell: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
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
        </div>
      ),
      button: true,
      width: "20%",
      center: true,
    },
  ];

  return (
    <Fragment>
      <Breadcrumbs mainTitle={heading} parent="Deals" title={heading} />

      <div className="table-responsive support-table mt-2">
        <DataTable
          columns={customColumns}
          data={dealsData}
          striped={true}
          center={true}
          pagination
          className="p-2"
        />
      </div>
      {/* <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Confirm Delete</ModalHeader>
        <ModalBody>
          Are you sure you want to delete the deal titled "{selectedDeal?.title}"?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmDelete}>Delete</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
    </Fragment>
  );
};

export default UserDeals;
