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
  CompareToLastMonth,
  Earning,
  Expense,
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
const Dashboard = () => {
  const userAuthRole = useSelector((state) => state.auth.role);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Dashboard" parent="Dashboard" />
      {userAuthRole === "Admin" && <AdminDashboard />}
      {userAuthRole === "Customer" && <CustomerDashboard />}
    </Fragment>
  );
};

export default Dashboard;

const AdminDashboard = () => {
  return (
    <>
      {" "}
      <TotalUser />
      <Row>
        <Col xl="6" md="10">
          <WidgetsGrid />
        </Col>
        <Col xl="6" md="10">
          <ChartWidgets />
        </Col>
      </Row>
    </>
  );
};

const WidgetsGrid = () => {
  return (
    <Col xxl="12" md="12" className="box-col-12">
      <Row>
        {SmallWidgetsData.map((data, i) => (
          <Col xs="6" key={i}>
            <SmallWidgets data={data} />
          </Col>
        ))}
      </Row>
    </Col>
  );
};
const SmallWidgetsData = [
  {
    title: "Total Deals",
    color: "primary",
    total: 3_435,
    icon: "new-order",
  },
  {
    title: "Active Deals",
    color: "warning",
    total: 2_908,
    gros: 20,
    icon: "customers",
  },

  {
    title: "Deals Closed(monthly)",
    color: "success",
    total: 3_908,
    gros: 80,
    icon: "sale",
  },
  {
    title: "Transactions(monthly)",
    color: "secondary",
    total: 389,
    gros: 10,
    prefix: "$",
    icon: "profit",

    suffix: "k",
  },
  {
    title: "Website Inquiry",
    color: "success",
    total: 3_908,
    gros: 80,
    icon: "profit",
  },
  {
    title: "Deals Inquiry",
    color: "primary",
    total: 2_435,
    gros: 50,
    icon: "new-order",
  },
];

const TotalBalance = () => {
  return (
    <Card className="o-hidden">
      <CardBody className="balance-widget">
        <span className="f-w-500 f-light">{TotalBalanceTitle}</span>
        <H4 attrH4={{ className: "mb-3 mt-1 f-w-500 mb-0 f-22" }}>
          <CountUp
            prefix="$"
            duration={5}
            start={0}
            separator=","
            end={245154}
          />
          <span className="f-light f-14 f-w-400 ms-1">{ThisMonth}</span>
        </H4>
        <Link
          className="purchase-btn btn btn-primary btn-hover-effect f-w-500"
          to="#"
        >
          {TapUpBalance}
        </Link>
      </CardBody>
    </Card>
  );
};
const SmallWidgets = ({ data, mainClass }) => {
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
const TotalUser = () => {
  return (
    <Card>
      <CardHeader className="card-no-border">
        <div className="header-top">
          <H5>{TotalUsers}</H5>
        </div>
      </CardHeader>
      <CardBody className="pt-0">
        <UL attrUL={{ className: "user-list" }}>
          <LI>
            <div className="user-icon primary">
              <div className="user-box">
                <UserPlus className="font-primary" />
              </div>
            </div>
            <div>
              <H5 attrH5={{ className: "mb-1" }}>178,098</H5>
              <span className="font-primary d-flex align-items-center">
                <i className="icon-arrow-up icon-rotate me-1"> </i>
                <span className="f-w-500">Paid Customers</span>
              </span>
            </div>
          </LI>
          <LI>
            <div className="user-icon success">
              <div className="user-box">
                <UserMinus className="font-success" />
              </div>
            </div>
            <div>
              <H5 attrH5={{ className: "mb-1" }}>178,098</H5>
              <span className="font-danger d-flex align-items-center">
                <i className="icon-arrow-down icon-rotate me-1" />
                <span className="f-w-500">Paid Members</span>
              </span>
            </div>
          </LI>
          <LI>
            <div className="user-icon success">
              <div className="user-box">
                <UserMinus className="font-success" />
              </div>
            </div>
            <div>
              <H5 attrH5={{ className: "mb-1" }}>178,098</H5>
              <span className="font-danger d-flex align-items-center">
                <i className="icon-arrow-down icon-rotate me-1" />
                <span className="f-w-500">Free Members</span>
              </span>
            </div>
          </LI>
        </UL>
      </CardBody>
    </Card>
  );
};

const ChartWidgets = () => {
  return (
    <Fragment>
      <Row>
        <Col xl="6" md="12" className="box-col-12">
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <Row className="row card-body pb-0 m-0">
                <Col xl="9" lg="8" className="col-9 p-0">
                  <H6 attrH6={{ className: "mb-2" }}>{TotalSale}</H6>
                  <H4>$3654.00</H4>
                  <span>{CompareToLastMonth}</span>
                </Col>
                <Col xl="3" lg="4" xs="3" className="text-end p-0">
                  <H6 className="txt-success">+65%</H6>
                </Col>
              </Row>
              <div>
                <div id="chart-widget1">
                  <Charts
                    options={lineChart1.options}
                    series={lineChart1.series}
                    height="170"
                    type="area"
                  />
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col xl="6">
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <Row className="card-body pb-0 m-0">
                <Col xl="9" lg="8" xs="9" className="p-0">
                  <H6 attrH6={{ className: "mb-2" }}>{"Total Deals Closed"}</H6>
                  <H4>12569</H4>
                  <span>{CompareToLastMonth}</span>
                </Col>
                <Col xl="3" lg="4" xs="3" className="text-end p-0">
                  <H6 className="txt-success">+65%</H6>
                </Col>
              </Row>
              <div id="chart-widget2">
                <Charts
                  id="chart-widget-top-second"
                  className="flot-chart-placeholder"
                  options={lineChart2.options}
                  series={lineChart2.series}
                  height="170"
                  type="area"
                />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

const lineChart1 = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      height: 200,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    xaxis: {
      show: false,
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
        "2018-09-19T07:30:00",
        "2018-09-19T08:30:00",
        "2018-09-19T09:30:00",
        "2018-09-19T10:30:00",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        left: -10,
        top: -25,
        right: -60,
        bottom: -40,
      },
    },
    fill: {
      opacity: 0.2,
    },
    colors: ["primary"],

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 100,
          },
        },
      },
    ],
  },
  series: [
    {
      data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
    },
  ],
};
const lineChart2 = {
  series: [
    {
      name: "series1",
      data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      height: 200,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    xaxis: {
      show: false,
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
        "2018-09-19T07:30:00",
        "2018-09-19T08:30:00",
        "2018-09-19T09:30:00",
        "2018-09-19T10:30:00",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
      padding: {
        left: -10,
        top: -25,
        right: -60,
        bottom: -40,
      },
    },
    fill: {
      opacity: 0.2,
    },
    colors: ["secondary"],

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 100,
          },
        },
      },
    ],
  },
};


const CustomerDashboard = () => {
  return (
    <>
      <Container fluid={true}>
        <Row className="widget-grid">
            <GreetingCard />
          <Col md="6"> {/* Adjust the column size as needed */}
            <WidgetsGrids />
          </Col>
          <Col md="2"> {/* Adjust the column size as needed */}
            <OverallBalance />
          </Col>
        </Row>
      </Container>
    </>
  );
};


const WidgetsGrids = () => {
  return (
    <Col xxl="12" md="12" className="box-col-12">
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
    title: "Transactions(monthly)",
    color: "secondary",
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

const GreetingCard = () => {
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
      title: "Income",
      icon: "income",
      price: "$22,678",
    
    },
    {
      title: "Expense",
      icon: "expense",
      price: "$12,057",
   
    },
    {
      title: "Cashback",
      icon: "doller-return",
      price: "$8,475",
    },
  ];
  return (
    <Col xxl="4" lg="12" className="box-col-12">
      {/* <Card>
      
        <CardBody className='pt-0'>
          <Row className='m-0 overall-card'>
            <Col xl='9' md='12' sm='7' className='p-0'>
              <div className='chart-right'>
                <Row>
                  <Col xl='12' className='col-xl-12'>
                    <CardBody className='p-0'>
                      <UL attrUL={{ horizontal: true, className: 'd-flex balance-data' }}>
                        <LI>
                          <span className='circle bg-warning'> </span>
                          <span className='f-light ms-1'>{Earning}</span>
                        </LI>
                        <LI>
                          <span className='circle bg-primary'> </span>
                          <span className='f-light ms-1'>{Expense}</span>
                        </LI>
                      </UL>
                 
                    </CardBody>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card> */}
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
