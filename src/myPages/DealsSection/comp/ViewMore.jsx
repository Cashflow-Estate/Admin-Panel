// import React, {
//   Fragment,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import {
//   BiBed,
//   BiBath,
//   BiArea,
//   BiChevronLeft,
//   BiChevronRight,
// } from "react-icons/bi"; // Import arrow icons
// import { CgUnavailable } from "react-icons/cg";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Breadcrumbs, H3, Image, LI, P, UL } from "../../../AbstractElements";
// import { Card, CardBody, Media } from "reactstrap";
// import Slider from "react-slick";
// import iimmgg from "../../../assets/cashflowimg/apartments/a1lg.png";
// import video from "../../../assets/CashflowLogos/video.mp4";
// import axios from "axios";
// import { useParams } from "react-router";

// const ViewMore = () => {
// const { id } = useParams();
// const [deal, setDeal] = useState(null);
// useEffect(() => {
//   fetchData();
// }, []);

// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       `${process.env.REACT_APP_API_BASE_URL}/deals/${id}`
//     );
//     setDeal(response.data.data);
//   } catch (error) {
//     console.error("Error fetching deal:", error);
//   }
// };
// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);
//   const [state, setState] = useState({ nav1: null, nav2: null });
//   const slider1 = useRef();
//   const slider2 = useRef();

//   useEffect(() => {
//     setState({
//       nav1: slider1.current,
//       nav2: slider2.current,
//     });
//   }, []);

//   const { nav1, nav2 } = state;

//   const productItems = [
//     { type: "image", source: iimmgg },
//     { type: "image", source: iimmgg },
//     { type: "image", source: iimmgg },

//     { type: "video", source: video },
//   ];
//   const ChevronLeft = () => {
//     return (
//       <svg
//         width={"8"}
//         height={"14"}
//         viewBox="0 0 8 14"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M7.67505 0.641687C7.83061 0.836131 7.91325 1.05002 7.92297 1.28335C7.93269 1.51669 7.85005 1.72085 7.67505 1.89585L2.54172 7.02919L7.70422 12.1917C7.85978 12.3472 7.93269 12.5563 7.92297 12.8188C7.91325 13.0813 7.83061 13.2903 7.67505 13.4459C7.48061 13.6403 7.27158 13.7327 7.04797 13.7229C6.82436 13.7132 6.62505 13.6209 6.45005 13.4459L0.645887 7.64169C0.548665 7.54447 0.480609 7.44724 0.44172 7.35002C0.402831 7.2528 0.383387 7.14585 0.383387 7.02919C0.383387 6.91252 0.402831 6.80558 0.44172 6.70835C0.480609 6.61113 0.548665 6.51391 0.645887 6.41669L6.42089 0.641687C6.59589 0.466687 6.80005 0.384048 7.03339 0.393771C7.26672 0.403493 7.48061 0.486132 7.67505 0.641687Z"
//           fill={"black"}
//         />
//       </svg>
//     );
//   };

//   const ChevronRight = () => {
//     return (
//       <svg
//         width={"8"}
//         height={"14"}
//         viewBox="0 0 8 14"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M0.324947 13.3583C0.169391 13.1639 0.0867519 12.95 0.0770297 12.7166C0.0673075 12.4833 0.149947 12.2791 0.324947 12.1041L5.45828 6.97081L0.29578 1.80831C0.140224 1.65276 0.0673075 1.44373 0.0770297 1.18123C0.0867519 0.918728 0.169391 0.7097 0.324947 0.554145C0.519391 0.3597 0.728419 0.267339 0.95203 0.277062C1.17564 0.286784 1.37495 0.379145 1.54995 0.554145L7.35411 6.35831C7.45134 6.45553 7.51939 6.55276 7.55828 6.64998C7.59717 6.7472 7.61661 6.85415 7.61661 6.97081C7.61661 7.08748 7.59717 7.19442 7.55828 7.29165C7.51939 7.38887 7.45134 7.48609 7.35411 7.58331L1.57911 13.3583C1.40411 13.5333 1.19995 13.616 0.966613 13.6062C0.733279 13.5965 0.519391 13.5139 0.324947 13.3583Z"
//           fill={"black"}
//         />
//       </svg>
//     );
//   };
//   const settings = {
//     asNavFor: nav2,
//     infinite: false,
//     speed: 1000,
//     autoplaySpeed: 2000,
//     autoplay: false,
//     slidesToScroll: 1,
//     arrows: true, // Enable arrows

//     nextArrow: (
//       <button>
//         <ChevronRight />
//       </button>
//     ),
//     prevArrow: (
//       <button>
//         <ChevronLeft />
//       </button>
//     ),
//     dots: true,
//     customPaging: function (i) {
//       return <button className="slick-dot"></button>;
//     },
//   };

//   return (
//     <Container fluid={true}>
//       <div>
//         <Breadcrumbs mainTitle="Details" parent="Deals" title="1" />
//         <Row className="product-page-main p-0">
//           <Col xxl="7" md="6">
//             <Card>
//               <CardBody>
//                 {deal && (
//                   <Slider {...settings} ref={slider1}>
//                     {deal.images.map((image, index) => (
//                       <Image
//                         attrImage={{
//                           src: image.url,
//                           alt: "",
//                           className: "img-fluid w-100",
//                         }}
//                         key={index}
//                       />
//                     ))}
//                   </Slider>
//                 )}
//               </CardBody>
//             </Card>
//           </Col>
//           <Col xxl="5" md="6" className="box-col-6">
//             {deal && <DealsDetails deal={deal} />}
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// };

// export default ViewMore;

// const DealsDetails = ({ deal }) => {
//   return (
//     <Fragment>
// {deal && (
//   <Card>
//     <CardBody style={{ height: "auto" }}>
//       <div className="product-page-details">
//         <h3>{deal.title}</h3>
//         <h6>{deal.address}</h6>
//         <div className="product-price">${deal.price}</div>
//       </div>
//       <div>
//         <table className="product-page-width">
//           <tbody>
//             <tr>
//               <td>
//                 <div className="d-flex ">
//                   <BiBed
//                     style={{
//                       color: "orange",
//                       fontSize: "24px",
//                     }}
//                   />
//                   <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
//                     {"Area(Sqft)"} &nbsp;&nbsp;&nbsp;
//                   </b>
//                 </div>
//               </td>
//               <td>:{deal.area}</td>
//             </tr>
//             <tr>
//               <td>
//                 <div className="d-flex ">
//                   <BiBed
//                     style={{
//                       color: "orange",
//                       fontSize: "24px",
//                     }}
//                   />
//                   <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
//                     {"Rooms"} &nbsp;&nbsp;&nbsp;
//                   </b>
//                 </div>
//               </td>
//               <td>:{deal.bedRooms}</td>
//             </tr>
//             <tr>
//               <td>
//                 <div className="d-flex ">
//                   <BiBath
//                     style={{
//                       color: "orange",
//                       fontSize: "24px",
//                     }}
//                   />
//                   <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
//                     {"Bath"} &nbsp;&nbsp;&nbsp;
//                   </b>
//                 </div>
//               </td>
//               <td>: {deal.baths}</td>
//             </tr>
//             <tr>
//               <td>
//                 <div className="d-flex ">
//                   <BiArea
//                     style={{
//                       color: "orange",
//                       fontSize: "24px",
//                     }}
//                   />
//                   <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
//                     {"Slow Flip Terms"} &nbsp;&nbsp;&nbsp;
//                   </b>
//                 </div>
//               </td>
//               <td>: {deal.approxPrice}</td>
//             </tr>
//             <tr>
//               <td>
//                 <div className="d-flex ">
//                   <BiArea
//                     style={{
//                       color: "orange",
//                       fontSize: "24px",
//                     }}
//                   />
//                   <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
//                     {"Price"} &nbsp;&nbsp;&nbsp;
//                   </b>
//                 </div>
//               </td>
//               <td>: {deal.price}</td>
//             </tr>

//             <tr>
//               <td>
//                 <div className="d-flex ">
//                   <BiArea
//                     style={{
//                       color: "orange",
//                       fontSize: "24px",
//                     }}
//                   />
//                   <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
//                     {"Upfront Down Interest"} &nbsp;&nbsp;&nbsp;
//                   </b>
//                 </div>
//               </td>
//               <td>: {deal.upfrontDown}</td>
//             </tr>
//             <tr>
//               <td>
//                 <div className="d-flex ">
//                   <BiArea
//                     style={{
//                       color: "orange",
//                       fontSize: "24px",
//                     }}
//                   />
//                   <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
//                     {"Monthly Cash Flow Range"} &nbsp;&nbsp;&nbsp;
//                   </b>
//                 </div>
//               </td>
//               <td>
//                 : {deal.monthly_cash_min}-{deal.monthly_cash_max}
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <div className="d-flex ">
//                   <BiArea
//                     style={{
//                       color: "orange",
//                       fontSize: "24px",
//                     }}
//                   />
//                   <b style={{ paddingLeft: "5px", fontSize: "15px" }}>
//                     {"Approx Annual Return"} &nbsp;&nbsp;&nbsp;
//                   </b>
//                 </div>
//               </td>
//               <td>
//                 : {deal.annually_return_min}%-{deal.annually_return_max}%
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <hr />
//       <p>{deal.description}</p>
//       <hr />
//     </CardBody>
//   </Card>
// )}
//     </Fragment>
//   );
// };

import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { CgUnavailable } from "react-icons/cg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Breadcrumbs, H3, Image, LI, P, UL } from "../../../AbstractElements";
import { Card, CardBody, Media } from "reactstrap";
import Slider from "react-slick";
import iimmgg from "../../../assets/cashflowimg/apartments/a1lg.png";
import video from "../../../assets/CashflowLogos/video.mp4";
import Logs from "./Logs";
import { useParams } from "react-router";
import axios from "axios";
const ViewMore = () => {
  const { id } = useParams();
  const [deal, setDeal] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/deals/${id}`
      );
      setDeal(response.data.data);
    } catch (error) {
      console.error("Error fetching deal:", error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  const productItems = [
    { type: "image", source: iimmgg },
    { type: "image", source: iimmgg },
    { type: "image", source: iimmgg },
    { type: "video", source: "video" },
  ];

  const updatedProductItems = deal?.images.map((item, index) => {
    // if (item.type === "image") {
    return { type: "image", source: deal?.images[index].url };
    // }
    // return item;
  });

  const ChevronLeft = () => {
    return (
      <svg
        width={"8"}
        height={"14"}
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.67505 0.641687C7.83061 0.836131 7.91325 1.05002 7.92297 1.28335C7.93269 1.51669 7.85005 1.72085 7.67505 1.89585L2.54172 7.02919L7.70422 12.1917C7.85978 12.3472 7.93269 12.5563 7.92297 12.8188C7.91325 13.0813 7.83061 13.2903 7.67505 13.4459C7.48061 13.6403 7.27158 13.7327 7.04797 13.7229C6.82436 13.7132 6.62505 13.6209 6.45005 13.4459L0.645887 7.64169C0.548665 7.54447 0.480609 7.44724 0.44172 7.35002C0.402831 7.2528 0.383387 7.14585 0.383387 7.02919C0.383387 6.91252 0.402831 6.80558 0.44172 6.70835C0.480609 6.61113 0.548665 6.51391 0.645887 6.41669L6.42089 0.641687C6.59589 0.466687 6.80005 0.384048 7.03339 0.393771C7.26672 0.403493 7.48061 0.486132 7.67505 0.641687Z"
          fill={"black"}
        />
      </svg>
    );
  };

  const ChevronRight = () => {
    return (
      <svg
        width={"8"}
        height={"14"}
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.324947 13.3583C0.169391 13.1639 0.0867519 12.95 0.0770297 12.7166C0.0673075 12.4833 0.149947 12.2791 0.324947 12.1041L5.45828 6.97081L0.29578 1.80831C0.140224 1.65276 0.0673075 1.44373 0.0770297 1.18123C0.0867519 0.918728 0.169391 0.7097 0.324947 0.554145C0.519391 0.3597 0.728419 0.267339 0.95203 0.277062C1.17564 0.286784 1.37495 0.379145 1.54995 0.554145L7.35411 6.35831C7.45134 6.45553 7.51939 6.55276 7.55828 6.64998C7.59717 6.7472 7.61661 6.85415 7.61661 6.97081C7.61661 7.08748 7.59717 7.19442 7.55828 7.29165C7.51939 7.38887 7.45134 7.48609 7.35411 7.58331L1.57911 13.3583C1.40411 13.5333 1.19995 13.616 0.966613 13.6062C0.733279 13.5965 0.519391 13.5139 0.324947 13.3583Z"
          fill={"black"}
        />
      </svg>
    );
  };
  // const settings = {
  //   asNavFor: nav2,
  //   className: "product-slider",
  //   arrows: false,
  //   dots: true,
  //   customPaging: function (i) {
  //     return <button className="slick-dot"></button>;
  //   },
  // };
  const settings = {
    className: "product-slider",

    asNavFor: nav2,
    infinite: false,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: false,
    slidesToScroll: 1,
    arrows: true, // Enable arrows

    nextArrow: (
      <button>
        <ChevronRight />
      </button>
    ),
    prevArrow: (
      <button>
        <ChevronLeft />
      </button>
    ),
    dots: true,
    customPaging: function (i) {
      return <button className="slick-dot"></button>;
    },
  };
  // const settings = {
  //   asNavFor: nav2,
  //   className: "product-slider",
  //   arrows: false,
  //   dots: true,
  //   autoplay: true, // Enable autoplay
  //   autoplaySpeed: 2000, // Set autoplay speed to 2 seconds
  //   customPaging: function (i) {
  //     return <button className="slick-dot"></button>;
  //   },
  // };

  return (
    <Container fluid={true}>
      <div>
        <Breadcrumbs mainTitle="Details" parent="Deals" title="1" />
        <Row className="product-page-main p-0">
          <Col xxl="7" md="6">
            <Card>
              <CardBody>
                <Slider {...settings} ref={slider1}>
                  {deal &&
                    updatedProductItems.map((item, index) =>
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
                {/* <Row className="max-height-100">
                  <Col xs={4} className="max-width-100">
                    <Slider
                      asNavFor={nav1}
                      ref={slider2}
                      slidesToShow={deal && updatedProductItems?.length}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      infinite={true}
                      className="small-slick"
                    >
                      {deal &&
                        updatedProductItems.map((item, index) =>
                          item.type === "image" ? (
                            <Image
                              attrImage={{
                                src: item.source,
                                alt: "",
                                className: "img-fluid item",
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
                  </Col>
                </Row> */}
              </CardBody>
            </Card>
          </Col>
          <Col xxl="5" md="6" className="box-col-6">
            <DealsDetails deal={deal} />
          </Col>
        </Row>
        {/* <Row>
          <Logs />
        </Row> */}
      </div>
    </Container>
  );
};

export default ViewMore;

const DealsDetails = ({ deal }) => {
  const house = deal;

  return (
    <Fragment>
      {deal && (
        <Card>
          <CardBody style={{ height: "auto" }}>
            <div className="product-page-details">
              <h3>{deal.title}</h3>
              <h6>{deal.address}</h6>
              <div className="product-price">${deal.approxPrice}</div>
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
                          {"Area(Sqft)"} &nbsp;&nbsp;&nbsp;
                        </b>
                      </div>
                    </td>
                    <td>:{deal.area}</td>
                  </tr>
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
                    <td>:{deal.bedRooms}</td>
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
                    <td>: {deal.baths}</td>
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
                    <td>: {deal.approxPrice}</td>
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
                          {"Price"} &nbsp;&nbsp;&nbsp;
                        </b>
                      </div>
                    </td>
                    <td>: {deal.price}</td>
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
                    <td>: {deal.upfrontDown}</td>
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
                    <td>
                      : {deal.monthly_cash_min}-{deal.monthly_cash_max}
                    </td>
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
                    <td>
                      : {deal.annually_return_min}%-{deal.annually_return_max}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <hr />
            <p>{deal.description}</p>
            <hr /> */}
          </CardBody>
        </Card>
      )}
    </Fragment>
  );
};
