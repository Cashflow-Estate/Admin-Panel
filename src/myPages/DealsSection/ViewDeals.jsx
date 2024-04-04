import React, { Fragment, useCallback, useContext, useState } from "react";
import { Breadcrumbs } from "../../AbstractElements";
import ListOfImageDesc from "./comp/ListOfImgDesc";
import { Container, Row } from "reactstrap";
import GalleryContext from "../../_helper/Gallery";
import DealCategory from "./comp/DealCategory";
import iii from "../../../src/assets/cashflowimg/apartments/a1.png";
import AllDealsTable from "./comp/AllDealsTable";
import { useSelector } from "react-redux";
const ViewDeals = () => {
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

      {/* <Container fluid={true}> */}
      {/* <Row> */}
      {/* <DealCategory smallImages={featureProduct} /> */}
      {/* <ListOfImageDesc
            smallImages={featureProduct}
            setPhotoIndex={callback}
            photoIndex={photoIndex}
            withDesc={true}
          /> */}
      {userRole === "Admin" ? <AllDealsTable /> : "User Deals"}
      {/* </Row>
      </Container> */}
    </Fragment>
  );
};

export default ViewDeals;
