import React, { Fragment, useState } from "react";
import DataTable from "react-data-table-component";
import { Button } from "reactstrap";
// import iii from "../../../src/assets/cashflowimg/apartments/a1.png"
import iii from "../../../../src/assets/cashflowimg/apartments/a1.png";
import { useNavigate } from "react-router";

const AllDealsTable = () => {
  const [dealsData] = useState([
    {
      id: 1,
      title: "Deal 1",
      image: "deal1.jpg",
      status: "Active",
      queries: <i className="fa fa-rss-square"></i>,
    },
    {
      id: 2,
      title: "Deal 2",
      image: "deal2.jpg",
      status: "Inactive",
      queries: <i className="fa fa-rss-square"></i>,
    },
    // Add more deals as needed
  ]);
  const history = useNavigate();

  const handleViewDetails = (user) => {
    history(`/deals/1`);
  };
  // Define handleEdit function
  const handleEdit = (row) => {
    history(`/deals/create`);
  };

  // Define handleDelete function
  const handleDelete = (row) => {
    // Logic for handling delete action
    console.log("Deleting row:", row);
  };

  // Your component code continues...

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
            justifyContent: "flex-start", // Align buttons to the left
          }}
        >
          <Button
            color=""
            onClick={() => handleViewQueries(row)}
            style={{ padding: "0.25rem", marginRight: "0.5rem" }}
          >
            <i className="fa fa-wechat"></i>
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
            justifyContent: "flex-start", // Align buttons to the left
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
      center: true, // Keep the column centered
    },
  ];

  const handleViewQueries = (deal) => {
    history("/deals/queries");
  };

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
    </Fragment>
  );
};

export default AllDealsTable;