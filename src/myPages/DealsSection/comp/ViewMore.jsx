import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { CgUnavailable } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import imageLg from "../../../../src/assets/cashflowimg/house-banner.png";
import { Breadcrumbs, H3, Image, LI, P, UL } from "../../../AbstractElements";
import { Card, CardBody, Media, Nav, NavItem, NavLink } from "reactstrap";
import { Availability, Brand } from "../../../Constant";
import CustomizerContext from "../../../_helper/Customizer";
import ProductContext from "../../../_helper/Ecommerce/Product";
import Slider from "react-slick";
import iimmgg from "../../../assets/cashflowimg/apartments/a1lg.png";
import video from "../../../assets/CashflowLogos/video.mp4";

const ViewMore = () => {
  const { id } = useParams();
  console.log(id);

  const [activeSlider, setActiveSlider] = useState("image");

  const toggleSlider = () => {
    setActiveSlider(activeSlider === "image" ? "video" : "image");
  };

  return (
    <Container fluid={true}>
      <div>
        <Breadcrumbs mainTitle="Details" parent="Deals" title="1" />

        <Row className="product-page-main p-0">
          <Col xxl="7" md="6">
            <Card>
            <Nav tabs style={{ backgroundColor: "black", borderRadius: "15px", padding: "5px", marginBottom: "25px" }}>
      <NavItem>
        <NavLink
          style={{
            backgroundColor: activeSlider === "image" ? "green" : "black",
            color: activeSlider === "image" ? "white" : "white",
            borderRadius: "15px",
            padding: "10px",
            marginRight: "5px"
          }}
          onClick={() => setActiveSlider("image")}
        >
          Image
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          style={{
            backgroundColor: activeSlider === "video" ? "green" : "black",
            color: activeSlider === "video" ? "white" : "white",
            borderRadius: "15px",
            padding: "10px",
            marginRight: "5px"
          }}
          onClick={() => setActiveSlider("video")}
        >
          Video
        </NavLink>
      </NavItem>
    </Nav>
              <CardBody>
                {activeSlider === "image" && <ImageSlider />}
                {activeSlider === "video" && <VideoSlider />}
              </CardBody>
            </Card>
          </Col>
          <Col xxl="5" md="6" className="box-col-6">
            <DealsDetails />
            
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ViewMore;

const DealsDetails = () => {
  const { layoutURL } = useContext(CustomizerContext);
  const { productItem, symbol } = useContext(ProductContext);
  const path = window.location.pathname.split("/").pop();
  const house = {
    name: "Deal name",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    type: "House",
    country: "Canada",
    price: "123212",
    bedrooms: 3,
    bathrooms: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    surface: 4200,
    availability: "no",
  };
  useEffect(() => {
    const selectedProduct = productItem.find((item) => item.id === path);
    if (selectedProduct) {
    }
  }, [productItem, path]);

  return (
    <Fragment>
      {house && (
        <Card>
          <CardBody style={{ height: "650px" }}>
            <div className="product-page-details">
              <h3>{house.name}</h3>
              <h6>{house.address}</h6>
              <div className="product-price">
                {symbol}
                {house.price}
              </div>
            </div>
            <div>
              <table className="product-page-width">
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex ">
                        <BiBed
                          style={{
                            color: "orange",
                            fontSize: "24px",
                          }}
                        />
                        <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
                          {"Rooms"} &nbsp;&nbsp;&nbsp;
                        </b>
                      </div>
                    </td>
                    <td>:{house.bedrooms}</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex ">
                        <BiBath
                          style={{
                            color: "orange",
                            fontSize: "24px",
                          }}
                        />
                        <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
                          {"Bath"} &nbsp;&nbsp;&nbsp;
                        </b>
                      </div>
                    </td>
                    <td>:  {house.bathrooms}</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex ">
                        <BiArea
                          style={{
                            color: "orange",
                            fontSize: "24px",
                          }}
                        />
                        <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
                          {"Area in sqft"} &nbsp;&nbsp;&nbsp;
                        </b>
                      </div>
                    </td>
                    <td>:  {house.surface}</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex ">
                        <CgUnavailable
                          style={{
                            color: "orange",
                            fontSize: "24px",
                          }}
                        />
                        <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
                          {"Availability"} &nbsp;&nbsp;&nbsp;
                        </b>
                      </div>
                    </td>
                    <td>:  {house.availability}</td>
                  </tr>
            
                </tbody>
              </table>
            </div>
            <hr />
            <p>{house.description}</p>
            <hr />
          </CardBody>
        </Card>
      )}
    </Fragment>
  );
};

const VideoSlider = () => {
  const { productItem } = useContext(ProductContext);
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  const { nav1, nav2 } = state;

  return (
    <Fragment>
      <Slider
        asNavFor={nav2}
        className="product-slider"
        arrows={false}
        ref={(slider) => (slider1.current = slider)}
      >
        {productItem ? (
          productItem.map((item) => {
            return item.variants.map((items, id) => (
              <video controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            ));
          })
        ) : (
          <Media src={productItem.img} alt="" className="img-fluid" />
        )}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (slider2.current = slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={true}
        className="small-slick"
      >
        {productItem &&
          productItem.map((item) => {
            return item.variants.map((items, id) => (
              <video controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            ));
          })}
      </Slider>
    </Fragment>
  );
};
const ImageSlider = () => {
  const { productItem } = useContext(ProductContext);
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  const { nav1, nav2 } = state;

  return (
    <Fragment>
      <Slider
        asNavFor={nav2}
        className="product-slider"
        arrows={false}
        ref={(slider) => (slider1.current = slider)}
      >
        {productItem ? (
          productItem.map((item) => {
            return item.variants.map((items, id) => (
              <><Image
              attrImage={{
                src: `${iimmgg}`,
                alt: "",
                className: "img-fluid w-100",
              }}
              key={id}
            />
            </>
            ));
          })
        ) : (
          <Media src={productItem.img} alt="" className="img-fluid" />
        )}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (slider2.current = slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={true}
        className="small-slick"
      >
        {productItem &&
          productItem.map((item) => {
            return item.variants.map((items, id) => (
              <Image
                attrImage={{
                  src: `${iimmgg}`,
                  alt: "",
                  className: "img-fluid item",
                }}
                key={id}
              />
            ));
          })}
      </Slider>
    </Fragment>
  );
};
