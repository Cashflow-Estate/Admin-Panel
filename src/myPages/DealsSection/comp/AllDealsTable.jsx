// import React, { Fragment, useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import { Button } from "reactstrap";
// import iii from "../../../../src/assets/cashflowimg/apartments/a1.png";
// import { useNavigate } from "react-router";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import axios from "axios";
// import { toast } from "react-toastify";

// const AllDealsTable = () => {
//   const [modal, setModal] = useState(false);
//   const [selectedDeal, setSelectedDeal] = useState(null);
//   const [dealsData, setDealsData] = useState([]);

//   useEffect(() => {
//     let isMounted = true; // Flag to track whether the component is mounted

//     // Fetch data from the API
//     axios
//       .get(`${process.env.REACT_APP_API_BASE_URL}/deals`)
//       .then((response) => {
//         if (isMounted) {
//           // Only update state if the component is still mounted
//           const sortedDeals = response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//           setDealsData(sortedDeals);
//         }
//       })
//       .catch((error) => {
//         // Handle error
//         console.error("Error fetching deals:", error);
//       });

//     // Cleanup function to cancel any pending asynchronous tasks
//     return () => {
//       isMounted = false; // Set isMounted to false when the component unmounts
//     };
//   }, []);


//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   const handleDelete = (deal) => {
//     setSelectedDeal(deal);
//     toggleModal();
//   };

//   const confirmDelete = () => {
//     // Perform delete operation
//     axios
//       .delete(`${process.env.REACT_APP_API_BASE_URL}/deals/${selectedDeal._id}`)
//       .then((response) => {
//         toast.success("Deal deleted successfully");
//         setDealsData(dealsData.filter((deal) => deal._id !== selectedDeal._id));
//         toggleModal(); // Close the modal after deleting
//       })
//       .catch((error) => {
//         console.error("Error deleting deal:", error);
//         toast.error("Error deleting deal");
//       });
//   };
//   // const [dealsData] = useState([
//   //   {
//   //     id: 1,
//   //     title: "Deal 1",
//   //     image: "deal1.jpg",
//   //     status: "Active",
//   //     Inquiry: <i className="fa fa-rss-square"></i>,
//   //     address: "123 Main St, City, Country",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Deal 2",
//   //     image: "deal2.jpg",
//   //     status: "Inactive",
//   //     Inquiry: <i className="fa fa-rss-square"></i>,
//   //     address: "456 Elm St, City, Country",
//   //   },
//   //   // Add more deals as needed
//   // ]);
//   const history = useNavigate();

//   const handleViewDetails = (user) => {
//     history(`/deals/${user._id}`);
//   };

//   const handleEdit = (row) => {
//     history(`/deals/edit/${row._id}`); // Assuming _id is the unique identifier for each deal
//   };


//   const handleViewInquiry = (deal) => {
//     history("/inquiry");
//   };

//   const customColumns = [
//     {
//       name: "Title",
//       selector: (row) => row.title,
//       sortable: true,
//       center: false,
//     },
//     {
//       name: "Image",
//       cell: (row) => (
//         <img
//           src={row.images[0]?.url}
//           alt={row.title}
//           style={{ maxWidth: "70px", maxHeight: "80px" }} // Set maximum image size
//         />
//       ),
//       sortable: false,
//       center: true,
//       // width: "120px", // Set a fixed width for the image column
//     },
//     {
//       name: "Address",
//       selector: (row) => row.address,
//       sortable: true,
//       wrap: true, // Enable word wrap for long text
//     },
//     {
//       name: "Inquiry",
//       cell: (row) => (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           {/* Button to view Inquiry */}
//           <Button color="" onClick={() => handleViewInquiry(row)}>
//             <i
//               style={{ fontSize: "25px" }}
//               className="icofont icofont-support-faq"
//             ></i>
//           </Button>

//           {/* Badge for notification count */}
//           <span
//             className="badge rounded-pill badge-secondary"
//             style={{ position: "relative", top: "-10px", left: "-30px" }}
//           >
//             4
//           </span>
//         </div>
//       ),
//       sortable: true,
//       wrap: true, // Enable word wrap for long text
//     },
//     {
//       name: "Actions",
//       cell: (row) => (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           <Button
//             color="dark"
//             onClick={() => handleEdit(row)}
//             style={{ padding: "0.25rem", marginRight: "0.5rem" }}
//           >
//             Edit
//           </Button>
//           <Button
//             color="red"
//             onClick={() => handleDelete(row)}
//             style={{color:"red", padding: "0.25rem", marginRight: "0.5rem" }}
//           >
//             Delete
//           </Button>
//           <Button
//             color="orange"
//             onClick={() => handleViewDetails(row)}
//             style={{ padding: "0.25rem" }}
//           >
//             More
//           </Button>
//         </div>
//       ),
//       button: true,
//       width: "20%",
//       center: true,
//     }

//   ];

//   return (
//     <Fragment>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-12">
//             <h3>View Deals</h3>
//           </div>
//         </div>
//       </div>
//       <div className="table-responsive support-table mt-2">
//         <DataTable
//           columns={customColumns}
//           data={dealsData}
//           striped={true}
//           center={true}
//           pagination
//           className="p-2"
//         />
//       </div>
//       <Modal isOpen={modal} toggle={toggleModal}>
//         <ModalHeader toggle={toggleModal}>Confirm Delete</ModalHeader>
//         <ModalBody>
//           Are you sure you want to delete the deal titled "{selectedDeal?.title}
//           "?
//         </ModalBody>
//         <ModalFooter>
//           <Button color="success" onClick={confirmDelete}>
//             Delete
//           </Button>{" "}
//           <Button color="warning" onClick={toggleModal}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </Fragment>
//   );
// };

// export default AllDealsTable;
import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Breadcrumbs,
  Btn,
  H4,
  H6,
  Image,
  LI,
  P,
  UL,
} from "../../../AbstractElements";
import {
  Container,
  Row,
  Col,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import GalleryContext from "../../../_helper/Gallery";
import iii from "../../../../src/assets/cashflowimg/immmmggg.jpg";
import FilterContext from "../../../_helper/Ecommerce/Filter";
import { ChevronDown, Grid, List } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button } from "reactstrap";
import Lightbox from "react-18-image-lightbox";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const ProductContainAdmin = ({ AddProperty }) => {
  const { images } = useContext(GalleryContext);
  const [photoIndex, setPhotoIndex] = useState({ index: 0, isOpen: false });

  useEffect(() => {
    // Scroll to the top of the page whenever the component updates
    window.scrollTo(0, 0);
  }, []);

  const callback = (photo) => {
    setPhotoIndex(photo);
  };
  return (
    <Fragment>
      <Container fluid={true} className="product-wrapper" id="product-wrapper">
        <div className="product-grid">
          <ProductTotal AddProperty={AddProperty} />
          <ProductGrid
            setPhotoIndexSlider={callback}
            photoIndexSlider={photoIndex}
          />
          {/* <SingleImage
            photoIndex={photoIndex}
            setPhotoIndex={callback}
            images={images}
          /> */}
        </div>
      </Container>
    </Fragment>
  );
};
export default ProductContainAdmin
// const ProductTotal = ({ AddProperty }) => {
//   const { setFilterContext } = useContext(FilterContext);
//   const [filterSidebar, setFilterSidebar] = useState(true);
//   const onFilterClick = () => {
//     setFilterSidebar(!filterSidebar);
//     setFilterContext(filterSidebar);
//   };
//   const gridLayout = () => {
//     document
//       .getElementById("product-wrapper-grid")
//       .classList.remove("list-view");

//     var elems = document.getElementById("gridRow").childNodes;
//     [].forEach.call(elems, function (el) {
//       el.className = "";
//       el.classList.add("col-xl-3");
//       el.classList.add("col-sm-6");
//       el.classList.add("xl-4");
//     });
//   };
//   const listLayout = () => {
//     document.getElementById("product-wrapper-grid").classList.add("list-view");
//     var elems = document.getElementById("gridRow").childNodes;
//     [].forEach.call(elems, function (el) {
//       el.className = "";
//       el.classList.add("col-xl-12");
//     });
//   };
//   const LayoutView = (layoutColumns) => {
//     if (
//       !document
//         .getElementById("product-wrapper-grid")
//         .classList.contains("list-view")
//     ) {
//       var elems = document.getElementById("gridRow").childNodes;
//       [].forEach.call(elems, function (el) {
//         el.className = "";
//         el.classList.add("col-xl-" + layoutColumns);
//         el.classList.add("col-sm-" + layoutColumns);
//       });
//     }
//   };
//   return (
//     <Fragment>
//       <Row className="m-b-10">
//         <Col md="6" className="products-total">
//           {/* <div className="square-product-setting d-inline-block">
//             <a
//               className="icon-grid grid-layout-view"
//               onClick={gridLayout}
//               href="#javascript"
//             >
//               <Grid />
//             </a>
//           </div> */}
//           <div className="square-product-setting d-inline-block ">
//             <a
//               className="icon-grid m-0 list-layout-view"
//               onClick={listLayout}
//               href="#javascript"
//             >
//               <List />
//             </a>
//           </div>
//           <span
//             className="d-none-productlist filter-toggle"
//             onClick={() => onFilterClick()}
//           >
//             Filters
//             <span className="ms-2">
//               <ChevronDown className=" toggle-data" />
//             </span>
//           </span>
//         </Col>
//         <Sorting AddProperty={AddProperty} />
//       </Row>
//     </Fragment>
//   );
// };
const ProductTotal = ({ AddProperty }) => {
  const { setFilterContext } = useContext(FilterContext);
  const [filterSidebar, setFilterSidebar] = useState(false); // Changed initial state to false
  const onFilterClick = () => {
    setFilterSidebar(!filterSidebar);
    setFilterContext(!filterSidebar); // Updated to toggle the filter context
  };
  const gridLayout = () => {
    document
      .getElementById("product-wrapper-grid")
      .classList.remove("list-view");

    var elems = document.getElementById("gridRow").childNodes;
    [].forEach.call(elems, function (el) {
      el.className = "";
      el.classList.add("col-xl-3");
      el.classList.add("col-sm-6");
      el.classList.add("xl-4");
    });
  };
  const listLayout = () => {
    document.getElementById("product-wrapper-grid").classList.add("list-view");
    var elems = document.getElementById("gridRow").childNodes;
    [].forEach.call(elems, function (el) {
      el.className = "";
      el.classList.add("col-xl-12");
    });
  };
  const LayoutView = (layoutColumns) => {
    if (
      !document
        .getElementById("product-wrapper-grid")
        .classList.contains("list-view")
    ) {
      var elems = document.getElementById("gridRow").childNodes;
      [].forEach.call(elems, function (el) {
        el.className = "";
        el.classList.add("col-xl-" + layoutColumns);
        el.classList.add("col-sm-" + layoutColumns);
      });
    }
  };
  useEffect(() => {
    // Call listLayout on component mount to ensure list layout is set by default
    listLayout();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <Fragment>
      <Row className="m-b-10">
        <Col md="6" className="products-total">
          <div className="square-product-setting d-inline-block ">
            {/* <a
              className="icon-grid m-0 list-layout-view"
              onClick={listLayout}
              href="#javascript"
            >
              List 
            </a> */}
          </div>
          <span
            className="d-none-productlist filter-toggle"
            onClick={() => onFilterClick()}
          >
            Filters
            <span className="ms-2">
              <ChevronDown className=" toggle-data" />
            </span>
          </span>
        </Col>
        <Sorting AddProperty={AddProperty} />
      </Row>
    </Fragment>
  );
};

const Sorting = ({ AddProperty }) => {
  const { filterSortBy } = useContext(FilterContext);
  const filterSortFunc = (event) => {
    filterSortBy(event);
  };
  const history = useNavigate();

  const handleAddProperty = () => {
    history("/new-property");
  };
  return (
    <Fragment>
      <Col md="6" className="text-sm-end">
        {AddProperty && (
          <Button color="success" onClick={handleAddProperty}>
            Create New Slow Flip Property
          </Button>
        )}
        <div
          className="select2-drpdwn-product select-options d-inline-block"
          onChange={(e) => filterSortFunc(e.target.value)}
        >
          <Input
            className="form-control btn-square"
            type="select"
            name="select"
          >
            <option value="Featured">{"Filter"}</option>
            <option value="Featured">{"Single Family Home"}</option>
            <option value="LowestPrices">{"Condo"}</option>
            <option value="LowestPrices">{"Townhome"}</option>
            <option value="LowestPrices">{"Appartment"}</option>
          </Input>
        </div>
      </Col>
    </Fragment>
  );
};
const getVisibleproducts = (
  data,
  { brand, color, value, sortBy, searchBy, category }
) => {
  return data
    .filter((product) => {
      let brandMatch;
      if (product.tags)
        brandMatch = product.tags.some((tag) => brand.includes(tag));
      else brandMatch = true;

      let colorMatch;
      if (color && product.colors) {
        colorMatch = product.colors.includes(color);
      } else {
        colorMatch = true;
      }

      let CategoryMatch;
      if (category && product.name) {
        CategoryMatch = product.name.includes(category);
      } else {
        CategoryMatch = true;
      }

      const startPriceMatch =
        typeof value.min !== "number" || value.min <= product.price;
      const endPriceMatch =
        typeof value.max !== "number" || product.price <= value.max;

      const searchByName = product.name.toLowerCase().indexOf(searchBy) > -1;

      return (
        brandMatch &&
        colorMatch &&
        startPriceMatch &&
        endPriceMatch &&
        searchByName &&
        CategoryMatch
      );
    })
    .sort((product1, product2) => {
      if (sortBy === "HighestPrices") {
        return product2.price < product1.price ? -1 : 1;
      } else if (sortBy === "LowestPrices") {
        return product2.price > product1.price ? -1 : 1;
      } else {
        return product2.price !== product1.price ? 1 : 1;
      }
    });
};
const ProductGrid = ({ photoIndexSlider, setPhotoIndexSlider }) => {

  const [modal, setModal] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [dealsData, setDealsData] = useState([]);
  console.log(dealsData, ">>>>>")
  const layoutColumns = 3;

  useEffect(() => {
    let isMounted = true; // Flag to track whether the component is mounted

    // Fetch data from the API
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/deals`)
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

  const [openModal, setOpenModal] = useState(false);

  const addWishList = () => { };
  var images = require.context("../../../../src/assets/images", true);

  const products = [
    {
      id: 1,
      img: "ecommerce/01.jpg",
      imgPng: "ecommerce/product-table-7.png",
      name: "Master City Deals",
      note: "3 bds1 | 1 bath, |200 sqft - Active",
      address: "10737 Evanston Avenue N, Seattle, WA 98133",
      discription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      discountPrice: "350.00",
      status: "Condo",
      availability: "Occupied",
      price: 100.0,
      stock: "In stock",
      review: "(250 review)",
      category: "Man",
      colors: ["White", "gray"],
      size: ["M", "L", "XL"],
      tags: ["Diesel", "Hudson", "Lee"],
      variants: [
        {
          color: "White",
          images: "ecommerce/01.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/04.jpg",
        },
        {
          color: "black",
          images: "ecommerce/02.jpg",
        },
        {
          color: "pink",
          images: "ecommerce/03.jpg",
        },
      ],
    },
    {
      id: 2,
      img: "ecommerce/02.jpg",
      imgPng: "ecommerce/product-table-6.png",
      name: "Dream Beauty Fashion",
      note: "Tops for Women Stylish",
      discription:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.",
      discountPrice: "350.00",
      status: "Townhome",
      availability: "Available",

      price: 260.0,
      stock: "In stock",
      review: "(250 review)",
      category: "Woman",
      colors: ["green", "gray"],
      size: ["M", "L", "XL"],
      tags: ["Levis", "Hudson", "Lee"],
      variants: [
        {
          color: "White",
          images: "ecommerce/01.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/04.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/02.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/03.jpg",
        },
      ],
    },
    {
      id: 3,
      img: "ecommerce/03.jpg",
      imgPng: "ecommerce/product-table-8.png",
      name: "Man's Jacket",
      note: "Black Full Sleeve Man Jacket",
      discription:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.",
      discountPrice: "350.00",
      price: "360.00",
      status: "Appartment",
      availability: "Available",

      stock: "In stock",
      review: "(250 review)",
      category: "Woman",
      colors: ["White", "gray", "blue"],
      size: ["M", "L", "XL"],
      tags: ["Diesel", "Spykar", "Lee"],
      variants: [
        {
          color: "White",
          images: "ecommerce/01.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/04.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/02.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/03.jpg",
        },
      ],
    },
    {
      id: 4,
      img: "ecommerce/04.jpg",
      imgPng: "ecommerce/product-table-4.png",
      name: "Cyclamen",
      note: "Stylish co-ord set 2 piece dress for women",
      discription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      discountPrice: "350.00",
      price: "526.00",
      status: "Appartment",
      availability: "Available",

      stock: "In stock",
      review: "(250 review)",
      category: "Man",
      colors: ["red", "gray", "blue"],
      size: ["M", "L", "XL"],
      tags: ["Levis", "Lee", "Hudson"],
      variants: [
        {
          color: "White",
          images: "ecommerce/01.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/04.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/02.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/03.jpg",
        },
      ],
    },
    {
      id: 5,
      img: "ecommerce/01.jpg",
      imgPng: "ecommerce/product-table-7.png",
      name: "Woman T-shirt",
      note: "Women Full Sleeve Printed Sweatshirt",
      discription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      discountPrice: "350.00",
      price: 206.0,
      stock: "In stock",
      status: "Single Family Home",
      availability: "Available",

      review: "(250 review)",
      category: "Man",
      colors: ["green", "gray", "blue"],
      size: ["M", "L", "XL"],
      tags: ["Denien", "Diesel", "Spykar"],
      variants: [
        {
          color: "White",
          images: "ecommerce/01.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/04.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/02.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/03.jpg",
        },
      ],
    },
    {
      id: 6,
      img: "ecommerce/02.jpg",
      imgPng: "ecommerce/product-table-6.png",
      name: "Dream Beauty Fashion",
      note: "Tops for Women Stylish",
      discription:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.",
      discountPrice: "350.00",
      price: 926.0,
      status: "Single Family Home",
      availability: "Occupied",

      stock: "In stock",
      review: "(250 review)",
      category: "Woman",
      colors: ["purple", "orange", "blue"],
      size: ["M", "L", "XL"],
      tags: ["Lee", "Lifestyle", "Nike"],
      variants: [
        {
          color: "White",
          images: "ecommerce/01.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/04.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/02.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/03.jpg",
        },
      ],
    },
    {
      id: 7,
      img: "ecommerce/03.jpg",
      imgPng: "ecommerce/product-table-8.png",
      name: "Man's Jacket",
      note: "Black Full Sleeve Man Jacket",
      discription:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.",
      discountPrice: "350.00",
      price: 1000.0,
      status: "Condo",
      availability: "Available",

      stock: "In stock",
      review: "(250 review)",
      category: "Woman",
      colors: ["orange", "pink", "blue"],
      size: ["M", "L", "XL"],
      tags: ["Lee"],
      variants: [
        {
          color: "White",
          images: "ecommerce/01.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/04.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/02.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/03.jpg",
        },
      ],
    },
    {
      id: 8,
      img: "ecommerce/04.jpg",
      imgPng: "ecommerce/product-table-4.png",
      name: "Cyclamen",
      note: "Stylish co-ord set 2 piece dress for women",
      discription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      discountPrice: "350.00",
      price: 500.0,
      status: "Single Family Home",
      availability: "Occupied",

      stock: "In stock",
      review: "(250 review)",
      category: "Man",
      colors: ["purple", "pink", "blue"],
      size: ["M", "L", "XL"],
      tags: ["Hudson", "Lee"],
      variants: [
        {
          color: "White",
          images: "ecommerce/01.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/04.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/02.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/03.jpg",
        },
      ],
    },
    {
      id: 9,
      img: "ecommerce/01.jpg",
      imgPng: "ecommerce/product-table-7.png",
      name: "Woman T-shirt",
      note: "Women Full Sleeve Printed Sweatshirt",
      discription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      discountPrice: "350.00",
      price: 826.0,
      status: "Single Family Home",
      availability: "Occupied",

      stock: "In stock",
      review: "(250 review)",
      category: "Man",
      colors: ["White", "pink", "blue"],
      size: ["M", "L", "XL"],
      tags: ["Spykar"],
      variants: [
        {
          color: "purple",
          images: "ecommerce/01.jpg",
        },
        {
          color: "pink",
          images: "ecommerce/04.jpg",
        },
        {
          color: "blue",
          images: "ecommerce/02.jpg",
        },
        {
          color: "white",
          images: "ecommerce/03.jpg",
        },
      ],
    },
    {
      id: 10,
      img: "ecommerce/04.jpg",
      imgPng: "ecommerce/product-table-4.png",
      name: "Cyclamen",
      note: "Stylish co-ord set 2 piece dress for women",
      discription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      discountPrice: "350.00",
      price: 500.0,
      status: "Single Family Home",
      availability: "Occupied",

      stock: "In stock",
      review: "(250 review)",
      category: "Man",
      colors: ["purple", "pink", "blue"],
      size: ["M", "L", "XL"],
      tags: ["Hudson", "Lee"],
      variants: [
        {
          color: "White",
          images: "ecommerce/01.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/04.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/02.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/03.jpg",
        },
      ],
    },
    {
      id: 11,
      img: "ecommerce/01.jpg",
      imgPng: "ecommerce/product-table-7.png",
      name: "Master City Deals",
      note: "3 bds1 | 1 bath, |200 sqft - Active",
      address: "10737 Evanston Avenue N, Seattle, WA 98133",
      discription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      discountPrice: "350.00",
      status: "Condo",
      availability: "Available",

      price: 100.0,
      stock: "In stock",
      review: "(250 review)",
      category: "Man",
      colors: ["White", "gray"],
      size: ["M", "L", "XL"],
      tags: ["Diesel", "Hudson", "Lee"],
      variants: [
        {
          color: "White",
          images: "ecommerce/01.jpg",
        },
        {
          color: "gray",
          images: "ecommerce/04.jpg",
        },
        {
          color: "black",
          images: "ecommerce/02.jpg",
        },
        {
          color: "pink",
          images: "ecommerce/03.jpg",
        },
      ],
    },
  ];

  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);

  const callback = useCallback((photo) => {
    setPhotoIndex(photo);
  });

  const itemsPerPage = 6; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the indexes for slicing the products array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const history = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleEdit = (row) => {
    history(`/deals/edit/${row._id}`); // Assuming _id is the unique identifier for each deal
  };

  const handleDelete = (deal) => {
    setSelectedDeal(deal);
    toggleModal();
  };

  const handleViewDetails = (user) => {
    history(`/deals/${user._id}`);
  };

  const handleViewInquiry = (deal) => {
    history("/customer/Inquiry");
  };

  return (
    <Fragment>
      <div className="product-wrapper-grid" id="product-wrapper-grid">
        <Row className="gridRow" id="gridRow">
          {products &&
            currentItems.map((item, index) => {
              return (
                <div
                  id="gridId"
                  className={`${layoutColumns === 3
                    ? "col-xl-3 col-lg-6 col-sm-6 xl-4 box-col-4"
                    : "col-xl-" + layoutColumns
                    }`}
                  key={item.id}
                >
                  <Card>
                    <div className="product-box">
                      <div className="product-img">
                        {item.status === "Single Family Home" ? (
                          <span className="ribbon ribbon-info">
                            {item.status}
                          </span>
                        ) : item.status === "Condo" ? (
                          <span className="ribbon ribbon-warning">
                            {item.status}
                          </span>
                        ) : item.status === "Townhome" ? (
                          <span className="ribbon ribbon-success">
                            {item.status}
                          </span>
                        ) : item.status === "Appartment" ? (
                          <span className="ribbon ribbon-danger">
                            {item.status}
                          </span>
                        ) : (
                          ""
                        )}
                        {item.status === "love" ? (
                          <span className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info">
                            <i className="icon-heart">{item.status}</i>
                          </span>
                        ) : (
                          ""
                        )}
                        {item.status === "Hot" ? (
                          <span className="ribbon ribbon ribbon-clip ribbon-warning">
                            {item.status}
                          </span>
                        ) : (
                          ""
                        )}{" "}
                        <Image
                          attrImage={{
                            className: "img-fluid",
                            src: iii,
                            alt: "",
                          }}
                        />
                        <div className="product-hover">
                          <UL
                            attrUL={{
                              className: "simple-list d-flex flex-row",
                            }}
                          >
                            <LI attrLI={{ className: "border-0" }}>
                              <Button
                                color="default"
                                data-toggle="modal"
                                onClick={() =>
                                  setPhotoIndexSlider({
                                    ...photoIndexSlider,
                                    index: index,
                                    isOpen: true,
                                  })
                                }
                              >
                                <i className="icon-eye"></i>
                              </Button>
                            </LI>
                            {/* <LI attrLI={{ className: "border-0" }}>
                              <Link>
                                <Button
                                  color="default"
                                  onClick={() => addWishList(item)}
                                >
                                  <i className="icon-heart"></i>
                                </Button>
                              </Link>
                            </LI>
                            <LI attrLI={{ className: "border-0" }}>
                              <Link to={"/new-property"}>
                                <i className="icon-pencil"></i>
                              </Link>
                            </LI> */}
                          </UL>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center w-100 product-details">
                        <>
                          {" "}
                          <Link to={"/deals/1"}>
                            <H4>{"Master City Deals"}</H4>
                            <div className="d-flex">
                              <P><IoBed className="mt-2" style={{color: "#49A8D8"}} />{" 3 bds1 | "}</P>
                              <P> <FaBath className="mt-2" style={{color: "#49A8D8"}}/>{" 1 bath | "}</P>
                              <P> <FaHouseUser className="mt-2" style={{color: "#49A8D8"}} />{" 200 sqft - Active"}</P>
                            </div>
                            {/* <P><IoBedOutline />{" 3 bds1 | <LuBath /> 1 bath, | <MdOutlineHouse /> 200 sqft - Active"}</P> */}
                            <P><IoLocationSharp className="mt-2" style={{color: "#49A8D8"}}/>
                              {" 10737 Evanston Avenue N, Seattle, WA 98133"}
                            </P>
                          </Link>
                        </>
                        <Button color="" onClick={() => handleViewInquiry()} style={{ background: "#49A8D8", height: "33px", borderRadius: "10%", fontSize: "14px", color: "white" }}>
                          {/* <i
                            style={{ fontSize: "25px" }}
                            className="icofont icofont-support-faq"
                          ></i> */}
                          Messages
                        </Button>
                        <div className="d-flex flex-grow-2 gap-2">
                          {" "}
                          <Link color="" to={"/new-property"} className="d-flex align-items-center justify-content-center" style={{ background: "#49A8D8", height: "30px", width: "50px", borderRadius: "10%", fontSize: "14px", color: "white" }} onClick={() => handleEdit()}>
                            {/* <i className="icon-pencil"></i> */}
                            Edit
                          </Link>
                          <Link color="" to={"/new-property"} className="d-flex align-items-center justify-content-center" style={{ background: "#49A8D8", height: "30px", width: "70px", borderRadius: "10%", fontSize: "14px", color: "white" }} onClick={() => handleDelete()}>
                            {/* <i className="icon-pencil"></i> */}
                            Delete
                          </Link>
                          <Link color="" to={"/new-property"} className="d-flex align-items-center justify-content-center" style={{ background: "#49A8D8", height: "30px", width: "70px", borderRadius: "10%", fontSize: "14px", color: "white" }} onClick={() => handleViewDetails()}>
                            {/* <i className="icon-pencil"></i> */}
                            More
                          </Link>
                          {/* <span>
                            {" "}
                            <i className="icon-trash"></i>
                          </span> */}
                        </div>
                      </div>
                      {/* <P>
                        {item.availability === "Available" ? (
                          <span
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              padding: "3px 8px",
                              borderRadius: "4px",
                            }}
                          >
                            {item.availability}
                          </span>
                        ) : item.availability === "Occupied" ? (
                          <span
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              padding: "3px 8px",
                              borderRadius: "4px",
                            }}
                          >
                            {item.availability}
                          </span>
                        ) : null}
                      </P> */}
                    </div>
                  </Card>
                </div>
              );
            })}
          {openModal && (
            <SingleImage
              photoIndex={photoIndex}
              setPhotoIndex={callback}
              images={images}
            />
          )}
        </Row>

        <Pagination
          aria-label="Page navigation example"
          className="pagination-primary"
        >
          <PaginationItem>
            <PaginationLink
              previous
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {Array.from({
            length: Math.ceil(products.length / itemsPerPage),
          }).map((_, index) => (
            <PaginationItem key={index} active={index + 1 === currentPage}>
              <PaginationLink onClick={() => paginate(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationLink
              next
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(products.length / itemsPerPage)
              }
            />
          </PaginationItem>
        </Pagination>
      </div>
    </Fragment>
  );
};

const SingleImage = ({ photoIndex, setPhotoIndex, images }) => {
  const onMovePrev = () => {
    const prev = (photoIndex.index + images.length - 1) % images.length;
    setPhotoIndex({ ...photoIndex, index: prev });
  };
  const onMoveNext = () => {
    const next = (photoIndex.index + 1) % images.length;
    setPhotoIndex({ ...photoIndex, index: next });
  };
  return (
    <Fragment>
      {photoIndex.isOpen && (
        <Lightbox
          mainSrc={iii}
          nextSrc={iii}
          prevSrc={iii}
          imageTitle={photoIndex.index + 1 + "/" + images.length}
          onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
          onMovePrevRequest={onMovePrev}
          onMoveNextRequest={onMoveNext}
        />
      )}
    </Fragment>
  );
};
