import React, { Fragment, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Col, Media, Row } from "reactstrap";
import iii from "../../../../src/assets/cashflowimg/apartments/a1.png";
import { useNavigate } from "react-router";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { H4, H6, Image, LI, P, UL } from "../../../AbstractElements";

const AllInquiryTable = () => {
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
      name:"Abid",
      image: "deal1.jpg",
      title: "Deal 1",
      status: "Inactive",
      Inquiry: <i className="fa fa-rss-square"></i>,
      time: "07:40 am",
    },
    {
      id: 2,
      name:"Abid",
      image: "deal1.jpg",
      title: "Deal 1",
      status: "Active",
      Inquiry: <i className="fa fa-rss-square"></i>,
           time: "07:49 am",

    },
    {
      id: 3,
      name:"Ali",
      image: "deal1.jpg",
      title: "Deal 1",
      status: "Active",
      Inquiry: <i className="fa fa-rss-square"></i>,
           time: "08:40 am",

    },
  
    // Add more deals as needed
  ]);
  const history = useNavigate();

  const handleViewDetails = (user) => {
    history(`/deals/1`);
  };



  const handleViewInquiry = (deal) => {
    history("/customer/Inquiry");
  };

  const customColumns = [
    {
      name: "Image",
      cell: (row) => (
        <img src={iii} alt={row.title} style={{ width: "50px" }} />
      ),
      selector: (row) => row["image"],
    //   sortable: true,
      center: false,
      minWidth: "100px",
      maxWidth: "300px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
    //   sortable: true,
      center: false,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      center: false,
    },
    {
      name: "Status",
      selector: (row) => (
        <button
          className={`btn badge-light-${
            row.status === "Inactive" ? "light" : "primary"
          } ${row.status === "Inactive" && "disabled"}`}
        >
          {row.status}
        </button>
      ),
    //   sortable: true,
      center: true,
    },
    {
        name: "Time",
        selector: (row) => row.time,
        // sortable: true,
        center: false,
      },
    {
      name: "Inquiry",
      cell: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Button
            color=""
            onClick={() => handleViewInquiry(row)}
          >
     <i style={{fontSize:"20px"}} className="icofont icofont-expand"></i>
          </Button>
        </div>
      ),
      sortable: true,
      center: false,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
        
        <Button color={""} onClick={() => handleViewDetails(row)} style={{ padding: "0.6rem", minWidth: "40px" }}>

<i class="icofont icofont-info-circle" style={{fontSize: "20px",height: "30px"}}></i>

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
          <h3>View Inquiries</h3>

          </div>
        </div>
      </div>
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
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Confirm Delete</ModalHeader>
        <ModalBody>
          Are you sure you want to delete the deal titled "{selectedDeal?.title}
          "?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmDelete}>
            Delete
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default AllInquiryTable;


