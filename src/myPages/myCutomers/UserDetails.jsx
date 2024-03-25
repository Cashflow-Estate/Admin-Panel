import React, { Fragment, useState } from "react";
import { useGenerateWhatsappUrl } from "../../myHooks";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle,
} from "reactstrap";
import classnames from "classnames";
import ViewTransactions from "../SubscriptionPackages/ViewTransactions";
import { Breadcrumbs, H5, H6, Image, LI, UL } from "../../AbstractElements";
import whatsappIcon from "../../assets/CashflowLogos/whatsappp.jpeg";
import {
  BOD,
  ContactUs,
  ContactUsNumber,
  DDMMYY,
  Designer,
  LocationDetails,
  MarkJecno,
} from "../../Constant";
import CountUp from "react-countup";
import SvgIcon from "../../Components/Common/Component/SvgIcon";
import UserDeals from "./UserDeals";
import UpcomingCall from "../Call/UpcomingCall";
import Evictions from "./Evictions";
import MeetRequests from "../Call/MeetRequest";
import History from "../Call/History";

const UserDetails = () => {
  const [whatsAppUrl, setWhatsAppUrl] = useGenerateWhatsappUrl();
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);


  const handleClick = () => {
    setWhatsAppUrl("+923079551467");
  };

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

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Abid Zaidi" parent="User" title="#1121" />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Nav
                tabs
                style={{
                  backgroundColor: "black",
                  borderRadius: "15px",
                  padding: "5px",
                  marginBottom: "25px",
                }}
              >
                <NavItem>
                  <NavLink
                    className={classnames({ "text-white": activeTab !== "1" })}
                    style={{
                      backgroundColor: activeTab === "1" ? "green" : "black",
                      color: activeTab === "1" ? "white" : "white",
                      borderRadius: "15px",
                      padding: "10px",
                      marginRight: "5px",
                    }}
                    onClick={() => {
                      toggleTab("1");
                    }}
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ "text-white": activeTab !== "2" })}
                    style={{
                      backgroundColor: activeTab === "2" ? "green" : "black",
                      color: activeTab === "2" ? "white" : "white",
                      borderRadius: "15px",
                      padding: "10px",
                      marginRight: "5px",
                    }}
                    onClick={() => {
                      toggleTab("2");
                    }}
                  >
                    Featured Deals
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ "text-white": activeTab !== "3" })}
                    style={{
                      backgroundColor: activeTab === "3" ? "green" : "black",
                      color: activeTab === "3" ? "white" : "white",
                      borderRadius: "15px",
                      padding: "10px",
                      marginRight: "5px",
                    }}
                    onClick={() => {
                      toggleTab("3");
                    }}
                  >
                    Deal Purchased
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ "text-white": activeTab !== "4" })}
                    style={{
                      backgroundColor: activeTab === "4" ? "green" : "black",
                      color: activeTab === "4" ? "white" : "white",
                      borderRadius: "15px",
                      padding: "10px",
                      marginRight: "5px",
                    }}
                    onClick={() => {
                      toggleTab("4");
                    }}
                  >
                    Deals Inquiry
                  </NavLink>
                </NavItem>
              
                <NavItem>
                  <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle
                      className="nav-link"
                      style={{
                        backgroundColor: activeTab === "6" ? "green" : "black",
                        color: activeTab === "6" ? "white" : "white",
                        borderRadius: "15px",
                        padding: "10px",
                      }}
                      caret
                    >
                      Zoom Calls
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem onClick={() => toggleTab("6")}>
                        Upcoming Schedules
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={() => toggleTab("8")}>
                      Meet Requests
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={() => toggleTab("9")}>
                       Calls History
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ "text-white": activeTab !== "5" })}
                    style={{
                      backgroundColor: activeTab === "5" ? "green" : "black",
                      color: activeTab === "5" ? "white" : "white",
                      borderRadius: "15px",
                      padding: "10px",
                      marginRight: "5px",

                    }}
                    onClick={() => {
                      toggleTab("5");
                    }}
                  >
                    View Transactions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                       className={classnames({ "text-white": activeTab !== "7" })}
                       style={{
                         backgroundColor: activeTab === "7" ? "green" : "black",
                         color: activeTab === "7" ? "white" : "white",
                         borderRadius: "15px",
                         padding: "10px",
                       }}
                       onClick={() => {
                         toggleTab("7");
                       }}
                  >
                    Evictions
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <UserProfile user={user} />
                </TabPane>
                <TabPane tabId="2">
                  <UserDeals heading={"Featured Deals"} />
                </TabPane>
                <TabPane tabId="3">
                  <UserDeals heading={"Deal Purchased"} />
                </TabPane>
                <TabPane tabId="4">
                  <UserDeals heading={"Deals Inquiry"} />
                </TabPane>
                <TabPane tabId="5">
                  <ViewTransactions showBreadcrumbs={false} />
                </TabPane>
                <TabPane tabId="6">
                <UpcomingCall/>
                </TabPane>
                <TabPane tabId="8">
                <MeetRequests/>
                </TabPane>
                <TabPane tabId="9">
                <History/>
                </TabPane>
                <TabPane tabId="7">
               <Evictions/>
                </TabPane>
              </TabContent>
             
            </CardBody>
          </Card>
        </Col>
      </Row>
      <div style={{ position: "fixed", right: "25px", bottom: "30px" }}>
        <a href={whatsAppUrl} rel="noopener noreferrer" onClick={handleClick}>
          <img height={50} width={50} src={whatsappIcon} alt="WhatsApp Icon" />
        </a>
      </div>
    </Fragment>
  );
};

export default UserDetails;

const UserProfile = ({ user }) => {
  return (
    <Col xl="12" sm="12" xxl="12" className="col-ed-12 box-col-4">
      <Card className="social-profile">
        <CardBody>
          <div className="social-img-wrap">
            <div className="social-img">
              <Image
                attrImage={{
                  src: require(`../../assets/images/user/3.png`),
                  alt: "profile",
                }}
              />
            </div>
            <div className="edit-icon">
              <SvgIcon iconId={user.icon} />
            </div>
          </div>
          <div className="social-details">
            <H5 attrH5={{ className: "mb-1" }}>{user.name}</H5>
            <span className="f-light">{"#11921"}</span>
            <SocialData
              email={user.email}
              MemberType={user.MemberType}
              PackageName={user.PackageName}
              totalPost={user.totalPost}
              follower={user.follower}
              following={user.following}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const SocialData = ({
  totalPost,
  follower,
  following,
  MemberType,
  PackageName,
  email,
}) => {
  return (
    <>
      <UL attrUL={{ className: "social-follow" }}>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Address</H5>
          <span
            className="f-light"
            style={{ color: "orange", fontSize: "15px" }}
          >
            {totalPost}
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Ph#</H5>
          <span
            className="f-light"
            style={{ color: "orange", fontSize: "15px" }}
          >
            {follower}
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Invested Amount</H5>
          <span
            className="f-light"
            style={{ color: "orange", fontSize: "15px" }}
          >
            {following}
          </span>
        </LI>
      </UL>
      <UL attrUL={{ className: "social-follow" }}>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Email</H5>
          <span
            className="f-light"
            style={{ color: "orange", fontSize: "15px" }}
          >
            {email}
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Plan</H5>
          <span
            className="f-light"
            style={{ color: "orange", fontSize: "15px" }}
          >
            {PackageName}
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Member Type</H5>
          <span
            className="f-light"
            style={{ color: "orange", fontSize: "15px" }}
          >
            {MemberType}
          </span>
        </LI>
      </UL>
    </>
  );
};
