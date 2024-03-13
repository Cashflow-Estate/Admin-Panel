import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import { IMAGE_GALLERY } from '../../../Constant';
import HeaderCard from '../../../myComponents/HeaderCard';
import imageLg from "../../../../src/assets/cashflowimg/house-banner.png";
const ListOfImage = ({ smallImages, setPhotoIndex, photoIndex, withDesc }) => {
  return (
    <Fragment>
      {smallImages.length > 0 ? (
        <Col sm='12'>
          <Card>
            <HeaderCard title={IMAGE_GALLERY} />
            <CardBody>
              <div className='my-gallery row'>
                <figure className='col-xl-3 col-sm-6'>
                <img width={300} height={200} src={imageLg} alt="" />

                </figure>
                <figure className='col-xl-3 col-sm-6'>
                <img width={300} height={200} src={imageLg} alt="" />

                </figure>
                <figure className='col-xl-3 col-sm-6'>
                <img width={300} height={200} src={imageLg} alt="" />

                </figure>
                <figure className='col-xl-3 col-sm-6'>
                <img width={300} height={200} src={imageLg} alt="" />

                </figure>
                <figure className='col-xl-3 col-sm-6'>
                <img width={300} height={200} src={imageLg} alt="" />

                </figure>
                <figure className='col-xl-3 col-sm-6'>
                <img width={300} height={200} src={imageLg} alt="" />

                </figure>
               
              </div>
            </CardBody>
          </Card>
        </Col>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default ListOfImage;
