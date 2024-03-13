import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";
import imageLg from "../../../../src/assets/cashflowimg/house-banner.png";
import { Breadcrumbs } from "../../../AbstractElements";

const ViewMore = () => {
  const { id } = useParams();
  console.log(id);

  const house = {
    name: "House 2",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    type: "House",
    country: "Canada",
    price: "123212",
    bedrooms: 3,
    bathrooms: 4,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    surface: 4200,
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Details"
        parent="Deals"
        title="Details of Deal"
      />

      <Container className="min-h-[800px] mb-14">
        <Row className="flex-column lg:flex-row align-items-center justify-content-between">
          <Col>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </Col>
          <Col className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <Badge bg="green" text="black">
              {house.type}
            </Badge>
            <Badge bg="violet" text="black">
              {house.country}
            </Badge>
          </Col>
          <Col className="text-3xl font-semibold text-violet-600">
            ${house.price}
          </Col>
        </Row>
        <Row className="flex-column lg:flex-row gap-8">
          <Col md={8}>
            <div className="mb-8">
              <img width={400} height={300} src={imageLg} alt="" />
            </div>
            <Row className="flex gap-x-6 text-violet-700 mb-6">
  <Col className="flex gap-x-2 align-items-center">
    <BiBed style={{
    color: "blue", /* Set icon color to blue */
    fontSize: "24px" /* Set icon size to slightly larger than default */
  }} />
    <div>{house.bedrooms}</div>
  </Col>
  <Col className="flex gap-x-2 align-items-center">
    <BiBath style={{
    color: "blue", /* Set icon color to blue */
    fontSize: "24px" /* Set icon size to slightly larger than default */
  }} />
    <div>{house.bathrooms}</div>
  </Col>
  <Col className="flex gap-x-2 align-items-center">
    <BiArea style={{
    color: "blue", /* Set icon color to blue */
    fontSize: "24px" /* Set icon size to slightly larger than default */
  }} />
    <div>{house.surface}</div>
  </Col>
</Row>
            <div>{house.description}</div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ViewMore;

// import React, { Fragment, useState, useContext, useCallback } from 'react';
// import { Container, Row } from 'reactstrap'
// import { Breadcrumbs } from '../../../AbstractElements';
// import GalleryContext from '../../../_helper/Gallery';
// import ListOfImage from './ListOfImage';

// const ViewMore = () => {

//     const { images, smallImages } = useContext(GalleryContext);
//     const initilindex = { index: 0, isOpen: false }
//     const [photoIndex, setPhotoIndex] = useState(initilindex)
    
//     const callback = useCallback((photo) => {
//         setPhotoIndex(photo)
//     })

//     return (
//         <Fragment>
//             <Breadcrumbs mainTitle="Gallery Grid" parent="Gallery" title="Gallery Grid" />
//             <Container fluid={true}>
//                 <Row>
//                     <ListOfImage smallImages={smallImages} setPhotoIndex={callback} photoIndex={photoIndex} />
//                 </Row>
//             </Container>
//         </Fragment>
//     );
// }


// export default ViewMore;