import React, { Fragment, useCallback, useContext, useState } from "react";
import { Breadcrumbs } from "../../AbstractElements";
import ListOfImageDesc from "./comp/ListOfImgDesc";
import { Container, Row } from "reactstrap";
import GalleryContext from "../../_helper/Gallery";
import DealCategory from "./comp/DealCategory";
import iii from "../../../src/assets/cashflowimg/apartments/a1.png"
const ViewDeals = () => {
  const { images, smallImages } = useContext(GalleryContext);
  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);

  const callback = useCallback((photo) => {
    setPhotoIndex(photo);
  });

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Deals" parent="Deals" title="All Deals" />

      <Container fluid={true}>
        <Row>
          {/* <DealCategory smallImages={featureProduct} /> */}
          <ListOfImageDesc
            smallImages={featureProduct}
            setPhotoIndex={callback}
            photoIndex={photoIndex}
            withDesc={true}
          />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ViewDeals;
const featureProduct = [
  {
    image: iii,
    name: " Name",
    price: "50$",
    id:1
  },
  
  {
    image: iii,
    name: " Name",
    price: "50$",
    id:1
  },
  
  {
    image: iii,
    name: " Name",
    price: "50$",
    id:1
  },
  
  {
    image: iii,
    name: " Name",
    price: "50$",
    id:1
  },
  
  {
    image: iii,
    name: " Name",
    price: "50$",
    id:1
  },
  
  {
    image: iii,
    name: " Name",
    price: "50$",
    id:1
  },
  

];

// const FeaturedBlock = (Props) => {

//   return (
//     <div>
//       <div className="container">
//         <H6 heading="New Arrivals" linkText="See more" />
//         <div className="row">
//           {featureProduct.map((product) => (

//             <div className="col" key={product?._id}>
//               {     console.log("🚀 ~ FeaturedBlock ~ product:", product)}
//               <ProductDeal
//                 id={product?._id }
//                 images={product?.image}
//                 name={product?.name}
//                 price={product?.price}

//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default styled(ViewDeals)`
//   &.featured-block {
//     width: 100%;
//     padding: 75px 0;

//     .row {
//       display: flex;
//       flex-flow: row wrap;
//       margin: 0 -18px;
//     }

//     .col {
//       width: 25%;
//       padding: 0 18px;
//     }
//   }
// `;
