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
import greetingImage from '../../assets/images/dashboard-3/better.png';

import ReactApexChart from "react-apexcharts";
import CustomerDashboard from "./CustomerDashboard";
import AdminDashboard from "./AdminDashboard";
const Dashboard = () => {
  const userAuthRole = useSelector((state) => state.auth.role);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Dashboard" parent="Dashboard" />
      {"Admin" === "Admin" && <AdminDashboard />}
      {(userAuthRole === "Customer" || userAuthRole === "Member") && <CustomerDashboard />}
    </Fragment>
  );
};

export default Dashboard;
