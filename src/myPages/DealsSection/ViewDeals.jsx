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
} from "../../AbstractElements";
import ListOfImageDesc from "./comp/ListOfImgDesc";
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
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import GalleryContext from "../../_helper/Gallery";
import DealCategory from "./comp/DealCategory";
import iii from "../../../src/assets/cashflowimg/immmmggg.jpg";
import AllDealsTable from "./comp/AllDealsTable";
import { useSelector } from "react-redux";
import FilterContext from "../../_helper/Ecommerce/Filter";
import { ChevronDown, Grid, List } from "react-feather";
import {
  AddToCart,
  Featured,
  LowestPrices,
  ProductDetails,
  ProductSizeArray,
  Quantity,
  ShowingProducts,
  ViewDetails,
} from "../../Constant";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button } from "reactstrap";
import CartContext from "../../_helper/Ecommerce/Cart";
import ProductContext from "../../_helper/Ecommerce/Product";
import CustomizerContext from "../../_helper/Customizer";
import { InputGroup, InputGroupText } from "reactstrap";
import Lightbox from "react-18-image-lightbox";

const ViewDeals = ({ AddProperty }) => {
  const { images, smallImages } = useContext(GalleryContext);
  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);

  const callback = useCallback((photo) => {
    setPhotoIndex(photo);
  });
  const userRole = useSelector((state) => state.auth.role);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Deals" parent="Deals" title="All Deals" />

      {userRole === "Admin" ? (
        <AllDealsTable />
      ) : (
        <ProductContain AddProperty={AddProperty} />
      )}
    </Fragment>
  );
};

export default ViewDeals;
const ProductContain = ({ AddProperty }) => {
  const { images, smallImages } = useContext(GalleryContext);
  console.log("🚀 ~ ProductContain ~ images:", images);

  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);

  const callback = useCallback((photo) => {
    setPhotoIndex(photo);
  });
  return (
    <Fragment>
      <Container fluid={true} className="product-wrapper" id="product-wrapper">
        <div className="product-grid">
          <ProductTotal AddProperty={AddProperty} />
          <ProductGrid
            setPhotoIndexSlider={callback}
            photoIndexSlider={photoIndex}
          />
          <SingleImage
            photoIndex={photoIndex}
            setPhotoIndex={callback}
            images={images}
          />
        </div>
      </Container>
    </Fragment>
  );
};
const ProductTotal = ({ AddProperty }) => {
  const { setFilterContext } = useContext(FilterContext);
  const [filterSidebar, setFilterSidebar] = useState(true);
  const onFilterClick = () => {
    setFilterSidebar(!filterSidebar);
    setFilterContext(filterSidebar);
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
  return (
    <Fragment>
      <Row className="m-b-10">
        <Col md="6" className="products-total">
          <div className="square-product-setting d-inline-block">
            <a
              className="icon-grid grid-layout-view"
              onClick={gridLayout}
              href="#javascript"
            >
              <Grid />
            </a>
          </div>
          <div className="square-product-setting d-inline-block ">
            <a
              className="icon-grid m-0 list-layout-view"
              onClick={listLayout}
              href="#javascript"
            >
              <List />
            </a>
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
  const layoutColumns = 3;

  const [openModal, setOpenModal] = useState(false);

  const addWishList = () => {};
  var images = require.context("../../../src/assets//images", true);

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

  return (
    <Fragment>
      <div className="product-wrapper-grid" id="product-wrapper-grid">
        <Row className="gridRow" id="gridRow">
          {products &&
            currentItems.map((item, index) => {
              return (
                <div
                  id="gridId"
                  className={`${
                    layoutColumns === 3
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
                      <div className="d-flex product-details">
                        <>
                          {" "}
                          <Link to={"/deals/1"}>
                            <H4>{"Master City Deals"}</H4>

                            <P>{"3 bds1 | 1 bath, |200 sqft - Active"}</P>
                            <P>
                              {"10737 Evanston Avenue N, Seattle, WA 98133"}
                            </P>
                          </Link>
                        </>
                        <div className="d-flex flex-grow-2">
                          {" "}
                          <Link color="" to={"/new-property"}>
                            <i className="icon-pencil"></i>
                          </Link>
                          <span>
                            {" "}
                            <i className="icon-trash"></i>
                          </span>
                        </div>
                      </div>
                      <P>
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
                      </P>
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
