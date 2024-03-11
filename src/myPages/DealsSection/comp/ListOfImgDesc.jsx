import React, { Fragment, useState, useRef } from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import Slider from "react-slick";
import { PortfolioTitle } from "../../../Constant";
import HeaderCard from "../../../myComponents/HeaderCard";
import { Deal_Gallery } from "../../../myConstants";
import { ChevronLeft, ChevronRight } from "react-feather";


const ListOfImageDesc = ({ smallImages }) => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    const handleImageClick = (index) => {
        setPhotoIndex(index);
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <Fragment>
            {smallImages.length > 0 ?
                <Col sm="12">
                    <Card>
                        <HeaderCard title={Deal_Gallery} />
                        <CardBody style={{ position: 'relative' }}>
                            <Slider {...settings} ref={sliderRef}>
                                {smallImages.map((image, index) => (
                                    <div key={index} className="gallery-item">
                                        <a href="#javascript" data-size="1600x950" onClick={() => handleImageClick(index)}>
                                            <img
                                                src={image.image}
                                                alt="Gallery"
                                                className="img-thumbnail"
                                            />
                                            <div className="caption">
                                                <h4>{PortfolioTitle}</h4>
                                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </Slider>
                            <button onClick={goToPrev} className="chevron-button" style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
                                <ChevronLeft width="20" height="20" fill="#000000" />
                            </button>
                            <button onClick={goToNext} className="chevron-button" style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
                                <ChevronRight width="20" height="20" fill="#000000" />
                            </button>
                        </CardBody>
                    </Card>
                </Col>
                :
                ''
            }
        </Fragment>
    );
};

export default ListOfImageDesc;
