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
  const [filterOpen, setFilterOpen] = useState(false); // Initially closed
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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
            color="warning"
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
    setFilterOpen(false); // Close dropdown when a filter is selected
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderClientBadge = (client) => {
    let color;
    switch (client) {
      case "paidmembers":
        color = "primary";
        break;
      case "paidcustomers":
        color = "success";
        break;
      case "freetrialmembers":
        color = "info";
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
      selector: (row) => renderClientBadge(row.client),
      sortable: true,
      center: false,
    },
    {
      name: "Status",

      cell: (row) => (
        <>
          <Button
            color={row.blocked ? "danger" : "success"}
            onClick={() => handleToggleModal(row)}
          >
            {row.blocked ? "Unblock" : "Block"}
          </Button>
          <Button color={""} onClick={() => handleViewDetails(row)}>
            <i className="icon-more-alt"></i>
          </Button>
        </>
      ),
      button: true,
      width: "20%",
    },
  ];

  const history = useNavigate();
  const handleViewDetails = (user) => {
    console.log("🚀 ~ handleViewDetails ~ user:", user);
    history(`/user/${user.id}`);
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
                  { id: 2, item: "Paid Member", filterValue: "paidmembers" },
                  {
                    id: 3,
                    item: "Paid Customer",
                    filterValue: "paidcustomers",
                  },
                  {
                    id: 4,
                    item: "Free Trial Member",
                    filterValue: "freetrialmembers",
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
    </Fragment>
  );
};

export default AllCustomers;

// import React, { Fragment, useState } from "react";
// import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
// import DataTable from "react-data-table-component";
// import { supportColumns, supportData } from "../../Data/SupportTicket";
// import {
//   Badge,
//   Button,
//   ButtonGroup,
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   Input,
//   Modal,
//   ModalBody,
//   ModalFooter,
// } from "reactstrap";
// import { Breadcrumbs, H3 } from "../../AbstractElements";

// const AllCustomers = () => {
//   const [filter, setFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterOpen, setFilterOpen] = useState(false); // Initially closed
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   const FilterIcon = () => (
//     <span>
//       <i className="icofont icofont-filter"></i>
//     </span>
//   );

//   const RoundedDropdowns = ({ item }) => {
//     return (
//       <Dropdown isOpen={item.isOpen} toggle={item.toggle}>
//         <ButtonGroup className="mb-0">
//           <Button
//             className="dropbtn rounded-pill"
//             color="primary"
//             onClick={item.toggle}
//           >
//             {item.btnText} <FilterIcon />
//           </Button>
//           <DropdownMenu className="dropdown-content">
//             {item.items.map((itm) => (
//               <DropdownItem
//                 href="#"
//                 key={itm.id}
//                 onClick={() => handleFilterChange(itm.filterValue)}
//               >
//                 {itm.item}
//               </DropdownItem>
//             ))}
//           </DropdownMenu>
//         </ButtonGroup>
//       </Dropdown>
//     );
//   };

//   const filteredData = supportData.filter((user) => {
//     if (filter === "All") {
//       return user?.email?.toLowerCase().includes(searchTerm.toLowerCase());
//     }
//     return (
//       user.client === filter &&
//       user?.email?.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   const handleFilterChange = (filterValue) => {
//     setFilter(filterValue);
//     setFilterOpen(false); // Close dropdown when a filter is selected
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const renderClientBadge = (client) => {
//     let color;
//     switch (client) {
//       case "paidmembers":
//         color = "primary";
//         break;
//       case "paidcustomers":
//         color = "success";
//         break;
//       case "freetrialmembers":
//         color = "info";
//         break;
//       default:
//         color = "secondary";
//     }
//     return <Badge color={color}>{client}</Badge>;
//   };

//   const handleToggleModal = (user) => {
//     setSelectedUser(user);
//     setModalOpen(!modalOpen);
//   };

//   const customColumns = [
//     ...supportColumns,
//     {
//       name: "Client",
//       selector: (row) => renderClientBadge(row.client),
//       sortable: true,
//       center: false,
//     },
//     {
//       name: "",
//       cell: (row) => (
//         <>
//           <Button
//             color={row.blocked ? "danger" : "success"}
//             onClick={() => handleToggleModal(row)}
//           >
//             {row.blocked ? "Unblock" : "Block"}
//           </Button>
//           <Button onClick={() => handleViewDetails(row)}>
//             <i className="icon-more-alt"></i>
//           </Button>
//         </>
//       ),
//       button: true,
//       width: "20%",
//     },
//     // {
//     //   name: "",
//     //   cell: (row) => (
//     //     <>
//     //       <Button
//     //         color={row.blocked ? "danger" : "success"}
//     //         onClick={() => handleToggleModal(row)}
//     //       >
//     //         {row.blocked ? "Unblock" : "Block"}
//     //       </Button>
//     //       <Button color="info" onClick={() => handleViewDetails(row)}>
//     //         See More
//     //       </Button>
//     //     </>
//     //   ),
//     //   button: true,
//     //   width: "20%",
//     // },
//   ];
//   const history = useNavigate();
//   const handleViewDetails = (user) => {
//     console.log("🚀 ~ handleViewDetails ~ user:", user)
//     history(`/user/${user.id}`);
//   };

//   return (
//     <Fragment>
//       <Breadcrumbs mainTitle="All Users" parent="Users" title="View Users" />

//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-6">
//             <Input
//               type="text"
//               placeholder="Search by name"
//               value={searchTerm}
//               onChange={handleSearch}
//               className="p-2"
//             />
//           </div>
//           <div className="col-md-6 text-right">
//             <RoundedDropdowns
//               item={{
//                 btnText: filter === "All" ? "All" : filter,
//                 isOpen: filterOpen,
//                 toggle: () => setFilterOpen(!filterOpen),
//                 items: [
//                   { id: 1, item: "All", filterValue: "All" },
//                   { id: 2, item: "Paid Member", filterValue: "paidmembers" },
//                   {
//                     id: 3,
//                     item: "Paid Customer",
//                     filterValue: "paidcustomers",
//                   },
//                   {
//                     id: 4,
//                     item: "Free Trial Member",
//                     filterValue: "freetrialmembers",
//                   },
//                 ],
//               }}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="table-responsive support-table mt-3">
//         <DataTable
//           columns={customColumns}
//           data={filteredData}
//           striped={true}
//           center={true}
//           pagination
//           className="p-2"
//         />
//       </div>
//       <Modal isOpen={modalOpen} toggle={handleToggleModal}>
//         <ModalBody>
//           Are you sure you want to {selectedUser?.blocked ? "unblock" : "block"}{" "}
//           this user?
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={handleToggleModal}>
//             Cancel
//           </Button>
//           <Button
//             color={selectedUser?.blocked ? "danger" : "success"}
//             onClick={() => {
//               // Your logic to block/unblock the user
//               handleToggleModal(null);
//             }}
//           >
//             {selectedUser?.blocked ? "Unblock" : "Block"}
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </Fragment>
//   );
// };

// export default AllCustomers;
