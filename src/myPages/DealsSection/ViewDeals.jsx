import React, { Fragment, useCallback, useContext, useState } from "react";
import { Breadcrumbs, H4, Image, LI, P, UL } from "../../AbstractElements";
import ListOfImageDesc from "./comp/ListOfImgDesc";
import { Container, Row,Col,Input } from "reactstrap";
import GalleryContext from "../../_helper/Gallery";
import DealCategory from "./comp/DealCategory";
import iii from "../../../src/assets/cashflowimg/immmmggg.jpg";
import AllDealsTable from "./comp/AllDealsTable";
import { useSelector } from "react-redux";
import FilterContext from "../../_helper/Ecommerce/Filter";
import { ChevronDown, Grid, List } from 'react-feather';
import { Featured, LowestPrices, ShowingProducts } from "../../Constant";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button } from "reactstrap";
import CartContext from "../../_helper/Ecommerce/Cart";
import ProductContext from "../../_helper/Ecommerce/Product";

const ViewDeals = ({AddProperty}) => {
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


      {userRole === "Admin" ? <AllDealsTable /> : <ProductContain AddProperty={AddProperty}/>}
    
    </Fragment>
  );
};

export default ViewDeals;
const ProductContain = ({AddProperty}) => {
  return (
      <Fragment>
          <Container fluid={true} className="product-wrapper" id="product-wrapper">
              <div className="product-grid">
                  <ProductTotal AddProperty={AddProperty}/>
                  <ProductGrid />
              </div>
          </Container>
      </Fragment>
  );
};
const ProductTotal = ({AddProperty}) => {
  const { setFilterContext } = useContext(FilterContext);
  const [filterSidebar, setFilterSidebar] = useState(true);
  const onFilterClick = () => {
    setFilterSidebar(!filterSidebar);
    setFilterContext(filterSidebar);
  };
  const gridLayout = () => {
    document.getElementById('product-wrapper-grid').classList.remove('list-view');

    var elems = document.getElementById('gridRow').childNodes;
    [].forEach.call(elems, function (el) {
      el.className = '';
      el.classList.add('col-xl-3');
      el.classList.add('col-sm-6');
      el.classList.add('xl-4');
    });
  };
  const listLayout = () => {
    document.getElementById('product-wrapper-grid').classList.add('list-view');
    var elems = document.getElementById('gridRow').childNodes;
    [].forEach.call(elems, function (el) {
      el.className = '';
      el.classList.add('col-xl-12');
    });
  };
  const LayoutView = (layoutColumns) => {
    if (!document.getElementById('product-wrapper-grid').classList.contains('list-view')) {
      var elems = document.getElementById('gridRow').childNodes;
      [].forEach.call(elems, function (el) {
        el.className = '';
        el.classList.add('col-xl-' + layoutColumns);
        el.classList.add('col-sm-' + layoutColumns);
      });
    }
  };
  return (
    <Fragment>
      <Row className='m-b-10'>
        <Col md='6' className='products-total'>
          <div className='square-product-setting d-inline-block'>
            <a className='icon-grid grid-layout-view' onClick={gridLayout} href='#javascript'>
              <Grid />
            </a>
          </div>
          <div className='square-product-setting d-inline-block '>
            <a className='icon-grid m-0 list-layout-view' onClick={listLayout} href='#javascript'>
              <List />
            </a>
          </div>
          <span className='d-none-productlist filter-toggle' onClick={() => onFilterClick()}>
            Filters
            <span className='ms-2'>
              <ChevronDown className=' toggle-data' />
            </span>
          </span>
     
        </Col>
        <Sorting AddProperty={AddProperty} />
      </Row>
    </Fragment>
  );
};


const Sorting = ({AddProperty}) => {
  const { filterSortBy } = useContext(FilterContext);
  const filterSortFunc = (event) => {
    filterSortBy(event);
  };
  const history = useNavigate();

  const handleAddProperty=()=>{
history("/new-property")
  }
  return (
    <Fragment>
      <Col md='6' className='text-sm-end'>
    {AddProperty &&  <Button color='success' onClick={handleAddProperty}>Create new property</Button>
  }
        <div className='select2-drpdwn-product select-options d-inline-block' onChange={(e) => filterSortFunc(e.target.value)}>
          <Input className='form-control btn-square' type='select' name='select'>
            <option value='Featured'>{Featured}</option>
            <option value='LowestPrices'>{LowestPrices}</option>
            {/* <option value='HighestPrices'>{HighestPrices}</option> */}
          </Input>
        </div>
      </Col>
    </Fragment>
  );
};
const getVisibleproducts = (data, { brand, color, value, sortBy, searchBy, category }) => {
  return data.filter(product => {

      let brandMatch;
      if (product.tags)
          brandMatch = product.tags.some(tag => brand.includes(tag))
      else
          brandMatch = true;

      let colorMatch;
      if (color && product.colors) {
          colorMatch = product.colors.includes(color)
      } else {
          colorMatch = true;
      }

      let CategoryMatch;
      if (category && product.name) {
          CategoryMatch = product.name.includes(category)
      } else {
          CategoryMatch = true;
      }

      const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
      const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

      const searchByName = (product.name.toLowerCase().indexOf(searchBy) > -1)

      return brandMatch && colorMatch && startPriceMatch && endPriceMatch && searchByName && CategoryMatch;
  }).sort((product1, product2) => {

      if (sortBy === 'HighestPrices') {
          return product2.price < product1.price ? -1 : 1;
      }else if (sortBy === 'LowestPrices') {
          return product2.price > product1.price ? -1 : 1;
      }else {
          return product2.price !== product1.price ? 1 : 1;
      }
  });

}
const ProductGrid = () => {
  // const { addToCart } = useContext(CartContext);
  const { productItem, symbol } = useContext(ProductContext);
  const layoutColumns = 3;

  const quantity = 1;
  const [dataid, setDataid] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const history = useNavigate();

  const AddToCarts = (item, quantity) => {
    // addToCart(item, quantity);
    // history(`${process.env.PUBLIC_URL}/app/ecommerce/cart/${layoutURL}`);
  };

  const onOpenModal = (productId) => {
    setOpenModal(true);
    setDataid(productId);
  };

  const addWishList = () => {
    // history(`${process.env.PUBLIC_URL}/app/ecommerce/wishlist/${layoutURL}`);
  };
  var images = require.context("../../assets/images", true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  const context = useContext(FilterContext);
  const products = getVisibleproducts(productItem, context.filter);

  return (
    <Fragment>
      <div className="product-wrapper-grid" id="product-wrapper-grid">
        <Row className="gridRow" id="gridRow">
          {products &&
            products.map((item) => {
              return (
                <div id="gridId" className={`${layoutColumns === 3 ? "col-xl-3 col-lg-6 col-sm-6 xl-4 box-col-4" : "col-xl-" + layoutColumns}`} key={item.id}>
                  <Card>
                    <div className="product-box">
                      <div className="product-img">
                        {item.status === "sale" ? <span className="ribbon ribbon-danger">{item.status}</span> : ""}
                        {item.status === "50%" ? <span className="ribbon ribbon-success ribbon-right">{item.status}</span> : ""}
                        {item.status === "gift" ? (
                          <span className="ribbon ribbon-secondary ribbon-vertical-left">
                            <i className="icon-gift">{item.status}</i>
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
                        {item.status === "Hot" ? <span className="ribbon ribbon ribbon-clip ribbon-warning">{item.status}</span> : ""} <Image attrImage={{ className: "img-fluid", src: iii, alt: "" }} />
                        <div className="product-hover">
                          <UL attrUL={{ className: "simple-list d-flex flex-row" }}>
                            <LI attrLI={{ className: "border-0" }}>
                              {/* <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/cart/${layoutURL}`}> */}
                              <Button color="default" onClick={() => AddToCarts(item, quantity)}>
                                <i className="icon-shopping-cart"></i>
                              </Button>
                              {/* </Link> */}
                            </LI>
                            <LI attrLI={{ className: "border-0" }}>
                              <Button color="default" data-toggle="modal" onClick={() => onOpenModal(item.id)}>
                                <i className="icon-eye"></i>
                              </Button>
                            </LI>
                            <LI attrLI={{ className: "border-0" }}>
                              <Link >
                                <Button color="default" onClick={() => addWishList(item)}>
                                  <i className="icon-heart"></i>
                                </Button>
                              </Link>
                            </LI>
                          </UL>
                        </div>
                      </div>
                      <div className="product-details">
                        {/* <div className="rating">
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                        </div> */}
                        <Link>
                          <H4>{"$10,000"}</H4>
                          <H4>{"Master City Deals"}</H4>
                        </Link>

                        <P>{"3 bds1 | 1 bath, |200 sqft - Active"}</P>
                        <P>{"10737 Evanston Avenue N, Seattle, WA 98133"}</P>
                        {/* <div className="product-price">
                          {symbol} {item.price}{" "}
                          <del>
                            {symbol} {item.discountPrice}
                          </del>
                        </div> */}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          {/* {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataid={dataid} />} */}
        </Row>
      </div>
    </Fragment>
  );
};