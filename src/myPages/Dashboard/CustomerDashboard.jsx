import React, { Fragment, useEffect, useState } from "react";
import {
  Breadcrumbs,
  Btn,
  H4,
  H5,
  H6,
  Image,
  LI,
  P,
  UL,
} from "../../AbstractElements";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import SvgIcon from "../../Components/Common/Component/SvgIcon";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Row,
} from "reactstrap";
import {
  BetterResults,
  CompareToLastMonth,
  DoYouWantToGet,
  Earning,
  Expense,
  MonthlyProfitsGrowth,
  MonthlyProfitsTitle,
  MoreDetails,
  TapUpBalance,
  ThisMonth,
  TotalBalanceTitle,
  TotalProject,
  TotalSale,
  TotalUsers,
  WelcomeMessage,
  WelcomeToCuba,
  WhatsNew,
} from "../../Constant";
import MobileGif from "../../../src/assets/images/dashboard-2/mobile.gif";
import WidgetImg from "../../../src/assets/images/dashboard-2/widget-img.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { UserMinus, UserPlus } from "react-feather";
import Charts from "react-apexcharts";
import { useSelector } from "react-redux";
import img from "../../assets/images/dashboard/cartoon.svg";
import greetingImage from "../../assets/images/dashboard-3/better.png";
import "./Carousel.css";
import iimmgg from "../../assets/cashflowimg/ban.jpg";
import hous from "../../assets/cashflowimg/house-banner.png";

import Slider from 'react-slick';
import ReactApexChart from "react-apexcharts";
import { UserProfile } from "../myCutomers/UserDetails";
const CustomerDashboard = () => {
  const user = {
    id: 1,
    avatar: "dashboard-5/profile.png",
    icon: "profile-check",
    name: "Brooklyn Simmons",
    email: "zaidibiad@gmail.com",
    totalPost: "B69 Near Schoool Demo Home",
    follower: "0398754326",
    following: "$897,998",
    PackageName: "Pro",
    MemberType: "Customer",
  };
  const productItems = [
    { type: 'horizontal', src: iimmgg },
    // { type: 'horizontal', src: hous },
    { type: 'vertical', src: iimmgg },
  ];
  return (
    <Container fluid={true}>
      <Row>
        <Carousel adItems={productItems}/>
        <GreetingCard />
        <WidgetsGrids />
        {/* <OverallBalance /> */}
        {/* <UserProfile user={user} /> */}
        <MonthlyProfits />
        <GreetingCard2 />
      </Row>
    </Container>
  );
};
export default CustomerDashboard;




const Carousel = ({ adItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    customPaging: function (i) {
      return (
        <button className={`indicator ${currentSlide === i ? 'active' : ''}`}>
          <span className="sr-only">Slide {i + 1}</span>
        </button>
      );
    },
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    }
  };

  return (
    <Slider {...settings}>
      {adItems?.map((item, idx) => (
        <div key={idx} className="slide-container">
          <img src={item.src} alt={item.type === 'horizontal' ? 'Horizontal Ad' : 'Vertical Ad'} className="slide" />
        </div>
      ))}
    </Slider>
  );
};

const CustomArrow = ({ onClick, direction }) => (
  <div className={`arrow arrow-${direction}`} onClick={onClick}>
    {direction === 'left' ? (
      <BsArrowLeftCircleFill className="arrow-icon" />
    ) : (
      <BsArrowRightCircleFill className="arrow-icon" />
    )}
  </div>
);


const GreetingCard2 = () => {
  return (
    <Col md="4" className="box-col-4">
      <Card className="get-card overflow-hidden">
        <CardHeader className="card-header card-no-border">
          <H5>{DoYouWantToGet}</H5>
          <span className="f-14 f-w-500 f-light">{BetterResults}</span>
          <Btn attrBtn={{ color: "primary", className: "btn-hover-effect" }}>
            {MoreDetails}
            <span className="ms-1">
              <SvgIcon className="fill-icon" iconId="arrowright" />
            </span>
          </Btn>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="get-image text-center">
            <Image
              attrImage={{
                className: "img-fluid",
                src: img,
                alt: "leptop with men vector",
              }}
            />
          </div>
        </CardBody>
        <SquareGroupUi />
      </Card>
    </Col>
  );
};

const SquareGroupUi = () => {
  return (
    <UL attrUL={{ className: "square-group" }}>
      <LI attrLI={{ className: "square-1 warning" }}></LI>
      <LI attrLI={{ className: "square-1 primary" }}></LI>
      <LI attrLI={{ className: "square-2 warning1" }}></LI>
      <LI attrLI={{ className: "square-3 danger" }}></LI>
      <LI attrLI={{ className: "square-4 light" }}></LI>
      <LI attrLI={{ className: "square-5 warning" }}></LI>
      <LI attrLI={{ className: "square-6 success" }}></LI>
      <LI attrLI={{ className: "square-7 success" }}></LI>
    </UL>
  );
};

const MonthlyProfits = () => {
  return (
    <Col md="8" className="box-col-8">
      <Card>
        <CardHeader className="card-no-border">
          <H5>{MonthlyProfitsTitle}</H5>
          <span className="f-light f-w-500 f-14">({MonthlyProfitsGrowth})</span>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="monthly-profit">
            <ReactApexChart
              type="donut"
              height={300}
              series={MonthlyProfitsChartData.series}
              options={MonthlyProfitsChartData.options}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
const MonthlyProfitsChartData = {
  series: [30, 55, 35],
  options: {
    labels: ["Plaza", "Store", "other"],
    chart: {
      type: "donut",
      height: 300,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontSize: "14px",
      fontFamily: "Rubik, sans-serif",
      fontWeight: 500,
      labels: {
        colors: ["var(--chart-text-color)"],
      },
      markers: {
        width: 6,
        height: 6,
      },
      itemMargin: {
        horizontal: 7,
        vertical: 0,
      },
    },
    stroke: {
      width: 10,
      colors: ["var(--light2)"],
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "83%",
          labels: {
            show: true,
            name: {
              offsetY: 4,
            },
            total: {
              show: true,
              fontSize: "20px",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 500,
              label: "$ 34,098",
              formatter: () => "Total Profit",
            },
          },
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
        },
      },
    },
    colors: ["#54BA4A", "var(--theme-default)", "#FFA941"],
    responsive: [
      {
        breakpoint: 1630,
        options: {
          chart: {
            height: 360,
          },
        },
      },
      {
        breakpoint: 1584,
        options: {
          chart: {
            height: 400,
          },
        },
      },
      {
        breakpoint: 1473,
        options: {
          chart: {
            height: 250,
          },
        },
      },
      {
        breakpoint: 1425,
        options: {
          chart: {
            height: 270,
          },
        },
      },
      {
        breakpoint: 1400,
        options: {
          chart: {
            height: 320,
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  },
};
const WidgetsGrids = () => {
  return (
    <Col md="8" className="box-col-8">
      <Row>
        {SmallWidgetsDatas.map((data, i) => (
          <Col xs="6" key={i}>
            <SmallWidgetss data={data} />
          </Col>
        ))}
      </Row>
    </Col>
  );
};
const SmallWidgetsDatas = [
  {
    title: "Total Deals",
    color: "primary",
    total: 3_4,
    icon: "new-order",
  },
  {
    title: "Active Deals",
    color: "warning",
    total: 2_1,
    gros: 20,
    icon: "customers",
  },

  {
    title: "Deals Closed(monthly)",
    color: "success",
    total: 1_1,
    gros: 80,
    icon: "sale",
  },
  {
    title: "Transactions(Deals)",
    color: "warning",

    total: 389,
    gros: 10,
    prefix: "$",
    icon: "profit",

    suffix: "k",
  },
];

const SmallWidgetss = ({ data, mainClass }) => {
  return (
    <Card className={`small-widget ${mainClass ? mainClass : ""}`}>
      <CardBody className={data.color}>
        <span className="f-light">{data.title}</span>
        <div className="d-flex align-items-end gap-1">
          <H4>
            <CountUp
              suffix={data.suffix ? data.suffix : ""}
              prefix={data.prefix ? data.prefix : ""}
              duration={0}
              separator=","
              end={data.total}
            />
          </H4>
          {/* <span className={`font-${data.color} f-12 f-w-500`}>
              <i className={`icon-arrow-${data.gros < 50 ? "down" : "up"}`} />
              <span>
                {data.gros < 50 ? "-" : "+"}
                {data.gros}%
              </span>
            </span> */}
        </div>
        <div className="bg-gradient">
          <SvgIcon iconId={data.icon} className="stroke-icon svg-fill" />
        </div>
      </CardBody>
    </Card>
  );
};

export const GreetingCard = () => {
  return (
    <Col className="col-xxl-4 col-sm-6 box-col-6">
      <Card className=" profile-box">
        <CardBody>
          <Media>
            <Media body>
              <div className="greeting-user">
                <H4 attrH4={{ className: "f-w-600" }}>{WelcomeToCuba}</H4>
                <P>{WelcomeMessage}</P>
                <div className="whatsnew-btn">
                  <Btn
                    attrBtn={{
                      color: "transparent",
                      outline: true,
                      className: "btn btn-outline-white",
                    }}
                  >
                    {WhatsNew}
                  </Btn>
                </div>
              </div>
            </Media>
            <div>
              <div className="clockbox">
                <svg
                  id="clock"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 600 600"
                >
                  <g id="face">
                    <circle className="circle" cx={300} cy={300} r="253.9" />
                    <path
                      className="hour-marks"
                      d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"
                    />
                    <circle className="mid-circle" cx={300} cy={300} r="16.2" />
                  </g>
                  <g id="hour">
                    <path className="hour-hand" d="M300.5 298V142" />
                    <circle
                      className="sizing-box"
                      cx={300}
                      cy={300}
                      r="253.9"
                    />
                  </g>
                  <g id="minute">
                    <path className="minute-hand" d="M300.5 298V67" />
                    <circle
                      className="sizing-box"
                      cx={300}
                      cy={300}
                      r="253.9"
                    />
                  </g>
                  <g id="second">
                    <path className="second-hand" d="M300.5 350V55" />
                    <circle
                      className="sizing-box"
                      cx={300}
                      cy={300}
                      r="253.9"
                    ></circle>
                  </g>
                </svg>
              </div>
              <div className="badge f-10 p-0" id="txt" />
            </div>
          </Media>
          <div className="cartoon">
            <Image attrImage={{ src: img, alt: "vector women with leptop" }} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const OverallBalance = () => {
  const LightCardData = [
    {
      title: "Total",
      icon: "income",
      price: "$22,678",
    },
    {
      title: "April",
      icon: "expense",
      price: "$12,057",
    },
    {
      title: "ROI",
      icon: "doller-return",
      price: "$8,475",
    },
  ];
  return (
    <Col md="2" className="box-col-4">
      <LightCard LightCardData={LightCardData} />
    </Col>
  );
};

const LightCard = ({ LightCardData }) => {
  return (
    <Col xl="3" md="12" sm="5" className="p-0">
      <Row className="g-sm-4 g-2">
        {LightCardData.map((data, i) => (
          <Col key={i} xl="12" md="4">
            <LightCardBox data={data} />
          </Col>
        ))}
      </Row>
    </Col>
  );
};

const LightCardBox = ({ data }) => {
  return (
    <div className="light-card balance-card widget-hover">
      <div className="svg-box">
        <SvgIcon className="svg-fill" iconId={data.icon} />
      </div>
      <div>
        <span className="f-light">{data.title}</span>
        <H6 attrH6={{ className: "mt-1 mb-0" }}>{data.price}</H6>
      </div>
      <div className="ms-auto text-end">
        <DropdownCommon
          dropdownMain={{ className: "icon-dropdown", direction: "start" }}
          // iconName="icon-more-alt"
          btn={{ tag: "span" }}
        />
        {data.gros && (
          <span className={`d-inline-block mt-1 font-${data.color}`}>
            {data.gros}
          </span>
        )}
      </div>
    </div>
  );
};

const DropdownCommon = ({
  dropdownMain,
  icon = true,
  iconName,
  btn,
  options,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown {...dropdownMain} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle {...btn}>
        {icon && <i className={iconName}></i>}
        {!icon && options[0]}
      </DropdownToggle>
      <DropdownMenu>
        {options?.map((item, i) => (
          <DropdownItem key={i}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
