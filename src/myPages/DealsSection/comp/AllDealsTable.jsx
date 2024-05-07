import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button } from "reactstrap";
import iii from "../../../../src/assets/cashflowimg/apartments/a1.png";
import { useNavigate } from "react-router";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";

const AllDealsTable = () => {
  const [modal, setModal] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [dealsData, setDealsData] = useState([]);

  useEffect(() => {
    let isMounted = true; // Flag to track whether the component is mounted
  
    // Fetch data from the API
    axios
      .get("https://fyp-be.onrender.com/api/v1/deals")
      .then((response) => {
        if (isMounted) {
          // Only update state if the component is still mounted
          const sortedDeals = response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setDealsData(sortedDeals);
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching deals:", error);
      });
  
    // Cleanup function to cancel any pending asynchronous tasks
    return () => {
      isMounted = false; // Set isMounted to false when the component unmounts
    };
  }, []);
  
  
  const toggleModal = () => {
    setModal(!modal);
  };

  const handleDelete = (deal) => {
    setSelectedDeal(deal);
    toggleModal();
  };

  const confirmDelete = () => {
    // Perform delete operation
    axios
      .delete(`http://localhost:5000/api/v1/deals/${selectedDeal._id}`)
      .then((response) => {
        toast.success("Deal deleted successfully");
        setDealsData(dealsData.filter((deal) => deal._id !== selectedDeal._id));
        toggleModal(); // Close the modal after deleting
      })
      .catch((error) => {
        console.error("Error deleting deal:", error);
        toast.error("Error deleting deal");
      });
  };
  // const [dealsData] = useState([
  //   {
  //     id: 1,
  //     title: "Deal 1",
  //     image: "deal1.jpg",
  //     status: "Active",
  //     Inquiry: <i className="fa fa-rss-square"></i>,
  //     address: "123 Main St, City, Country",
  //   },
  //   {
  //     id: 2,
  //     title: "Deal 2",
  //     image: "deal2.jpg",
  //     status: "Inactive",
  //     Inquiry: <i className="fa fa-rss-square"></i>,
  //     address: "456 Elm St, City, Country",
  //   },
  //   // Add more deals as needed
  // ]);
  const history = useNavigate();

  const handleViewDetails = (user) => {
    history(`/deals/${user._id}`);
  };

  const handleEdit = (row) => {
    history(`/deals/edit/${row._id}`); // Assuming _id is the unique identifier for each deal
  };
  

  const handleViewInquiry = (deal) => {
    history("/inquiry");
  };

  const customColumns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      wrap: true, // Enable word wrap for long text
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={row.images[0]?.url}
          alt={row.title}
          style={{ maxWidth: "100px", maxHeight: "100px" }} // Set maximum image size
        />
      ),
      sortable: false,
      center: true,
      width: "120px", // Set a fixed width for the image column
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
      wrap: true, // Enable word wrap for long text
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
          {/* Button to view Inquiry */}
          <Button color="" onClick={() => handleViewInquiry(row)}>
            <i
              style={{ fontSize: "25px" }}
              className="icofont icofont-support-faq"
            ></i>
          </Button>

          {/* Badge for notification count */}
          <span
            className="badge rounded-pill badge-secondary"
            style={{ position: "relative", top: "-10px", left: "-30px" }}
          >
            4
          </span>
        </div>
      ),
      sortable: true,
      wrap: true, // Enable word wrap for long text
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
            <Button
        color=""
        onClick={() => handleEdit(row)}
        style={{ padding: "0.25rem", marginRight: "0.5rem" }}
      >
        <i className="icon-pencil"></i>
      </Button>
          <Button
            color=""
            onClick={() => handleDelete(row)}
            style={{ padding: "0.25rem", marginRight: "0.5rem" }}
          >
            <i className="icon-trash"></i>
          </Button>
          <Button
            color=""
            onClick={() => handleViewDetails(row)}
            style={{ padding: "0.25rem" }}
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

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h3>View Deals</h3>
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
          <Button color="success" onClick={confirmDelete}>
            Delete
          </Button>{" "}
          <Button color="warning" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default AllDealsTable;
