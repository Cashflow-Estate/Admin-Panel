import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import { Media } from 'reactstrap';
import ChevronRight from './ChevronRight ';
import ChevronLeft from './ChevronLeft ';

const DealCategory = ({ smallImages }) => {
  console.log("🚀 ~ DealCategory ~ smallImages:", smallImages)

  return (
    <div>
      <Slider className="product-slider" {...settings}>
        {smallImages?.map((item, index) => (
          <img
            src={item.image}
            alt="Gallery"
            className="img-thumbnail"
          />
        ))}
      </Slider>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  autoplaySpeed: 2000,
  autoplay: false,
  slidesToShow: 9,
  slidesToScroll: 9,
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
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default styled(DealCategory)`
  &.visual-items-block {
    padding-top: 110px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    @media (max-width: 1199px) {
      margin-bottom: 80px;
    }
  }

  .product-slider {
    background: #fff;
    box-shadow: 19px 37px 100px rgba(0, 0, 0, 0.05);
    padding: 32px 30px;

    .active {
      box-shadow: 2px 3px 15px rgb(0 0 0 / 15%);
    }

    .slick-arrow {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      width: 40px;
      height: 40px;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #000; /* Adjust color as needed */
    }

    .slick-prev {
      left: -50px; /* Adjust position as needed */
    }

    .slick-next {
      right: -50px; /* Adjust position as needed */
    }

    @media (max-width: 768px) {
      .slick-prev,
      .slick-next {
        display: none; /* Hide arrows on small screens */
      }
    }
  }
`;
