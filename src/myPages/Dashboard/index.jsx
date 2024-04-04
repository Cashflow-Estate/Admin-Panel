import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H4, H5, H6, Image, LI, UL } from "../../AbstractElements";
import SvgIcon from "../../Components/Common/Component/SvgIcon";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import {
  CompareToLastMonth,
  TapUpBalance,
  ThisMonth,
  TotalBalanceTitle,
  TotalProject,
  TotalSale,
  TotalUsers,
} from "../../Constant";
import MobileGif from "../../../src/assets/images/dashboard-2/mobile.gif";
import WidgetImg from "../../../src/assets/images/dashboard-2/widget-img.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { UserMinus, UserPlus } from "react-feather";
import Charts from "react-apexcharts";
import { useSelector } from "react-redux";

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
    <Row>
      <H4>Slow Flip Dashboard</H4>
    </Row>
  );
};
