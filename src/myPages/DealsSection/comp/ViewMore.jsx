import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { CgUnavailable } from "react-icons/cg";
import { Container, Row, Col } from "react-bootstrap";
import { Breadcrumbs, H3, Image, LI, P, UL } from "../../../AbstractElements";
import { Card, CardBody, Media } from "reactstrap";
import Slider from "react-slick";
import iimmgg from "../../../assets/cashflowimg/apartments/a1lg.png";
import video from "../../../assets/CashflowLogos/video.mp4";
import { Chatting } from "./DealsLog";
const ViewMore = () => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { nav2 } = state;

  const productItems = [
    { type: "image", source: iimmgg },
    { type: "video", source: video },
    { type: "image", source: iimmgg },
    { type: "video", source: video },
  ];

  const settings = {
    asNavFor: nav2,
    className: "product-slider",
    arrows: false,
    dots: true,
    customPaging: function (i) {
      return <button className="slick-dot"></button>;
    },
  };

  return (
    <Container fluid={true}>
      <div>
        <Breadcrumbs mainTitle="Details" parent="Deals" title="1" />
        <Row className="product-page-main p-0">
          <Col xxl="7" md="6">
            <Card>
              <CardBody>
                <Slider {...settings} ref={slider1}>
                  {productItems.map((item, index) =>
                    item.type === "image" ? (
                      <Image
                        attrImage={{
                          src: item.source,
                          alt: "",
                          className: "img-fluid w-100",
                        }}
                        key={index}
                      />
                    ) : (
                      <video controls key={index}>
                        <source src={item.source} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )
                  )}
                </Slider>
              </CardBody>
            </Card>
          </Col>
          <Col xxl="5" md="6" className="box-col-6">
            <DealsDetails />
          </Col>
        </Row>
        <Row>
        <Chatting />
        </Row>
      </div>
    </Container>
  );
};

export default ViewMore;

const DealsDetails = () => {
  const house = {
    name: "Deal name",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    type: "House",
    country: "Canada",
    price: "105,212",
    bedrooms: 3,
    bathrooms: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    surface: 4200,
    availability: "no",
    slowFlipTerms: "$111,654",
    Interest: "$4800",
    monthlyCashFlowRange: "$5000 - $6000",
    annualReturnProfit: "22%",
  };

  return (
    <Fragment>
      {house && (
        <Card>
          <CardBody style={{ height: "auto"}}>
            <div className="product-page-details">
              <h3>{house.name}</h3>
              <h6>{house.address}</h6>
              <div className="product-price">${house.price}</div>
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
                    <td>: {house.bathrooms}</td>
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
                          {"Slow Flip Terms"} &nbsp;&nbsp;&nbsp;
                        </b>
                      </div>
                    </td>
                    <td>: {house.slowFlipTerms}</td>
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
                    <td>: {house.availability}</td>
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
                          {"Upfront Down Interest"} &nbsp;&nbsp;&nbsp;
                        </b>
                      </div>
                    </td>
                    <td>: {house.Interest}</td>
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
                          {"Monthly Cash Flow Range"} &nbsp;&nbsp;&nbsp;
                        </b>
                      </div>
                    </td>
                    <td>: {house.monthlyCashFlowRange}</td>
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
                          {"Approx Annual Return"} &nbsp;&nbsp;&nbsp;
                        </b>
                      </div>
                    </td>
                    <td>: {house.annualReturnProfit}</td>
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
