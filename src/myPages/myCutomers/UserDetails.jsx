import React, { Fragment, useCallback, useMemo, useState } from "react";
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
  Dashboard,
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
import RecentDealsTransaction from "../DealsSection/comp/RecentDealsTransaction";
import DealsTransactions from "../DealsSection/DealsTransactions";
import InsuranceTemplate from "./InsuranceTemplate";
import { useLocation, useNavigate } from "react-router-dom";
import ViewDeals from "../DealsSection/ViewDeals";
import Occupants from "./Occupants";
import { useSelector } from "react-redux";
import InvestorDashboard from "../Dashboard/InvestorDashboard";

const UserDetails = () => {
  const role = useSelector((state) => state.auth.role);
  const [whatsAppUrl, setWhatsAppUrl] = useGenerateWhatsappUrl();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenTrans, setDropdownOpenTrans] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const toggleDropdownTrans = () =>
    setDropdownOpenTrans((prevState) => !prevState);

  const handleClick = () => {
    setWhatsAppUrl("+923026469153");
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

  const initialActiveTab = useMemo(() => {
    return role === "Admin" ? "1" : "15";
  }, [role]);

  const toggleTab = useCallback((tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  }, []);

  const [activeTab, setActiveTab] = useState(initialActiveTab);


  return (
    <Fragment>
      <Breadcrumbs mainTitle="Abid Zaidi" parent="User" title="#1121" />
      <Row>
        <Col sm="12">
          <Card>
            <Nav
              tabs
              style={{
                backgroundColor: "black",
                borderRadius: "15px",
                padding: "5px",
                marginBottom: "25px",
              }}
            >
              {role === "Admin" && (
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
              )}
              {role === "Customer" && (
                <>
                  {" "}
                  <NavItem>
                    <NavLink
                      className={classnames({
                        "text-white": activeTab !== "1",
                      })}
                      style={{
                        backgroundColor: activeTab === "15" ? "green" : "black",
                        color: activeTab === "15" ? "white" : "white",
                        borderRadius: "15px",
                        padding: "10px",
                        marginRight: "5px",
                      }}
                      onClick={() => {
                        toggleTab("15");
                      }}
                    >
                      Dashboard
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        "text-white": activeTab !== "17",
                      })}
                      style={{
                        backgroundColor: activeTab === "17" ? "green" : "black",
                        color: activeTab === "17" ? "white" : "white",
                        borderRadius: "15px",
                        padding: "10px",
                        marginRight: "5px",
                      }}
                      onClick={() => {
                        toggleTab("17");
                      }}
                    >
                      Slow Flip Properties
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        "text-white": activeTab !== "16",
                      })}
                      style={{
                        backgroundColor: activeTab === "16" ? "green" : "black",
                        color: activeTab === "15" ? "white" : "white",
                        borderRadius: "15px",
                        padding: "10px",
                        marginRight: "5px",
                      }}
                      onClick={() => {
                        toggleTab("16");
                      }}
                    >
                      Occupants
                    </NavLink>
                  </NavItem>{" "}
                </>
              )}
              {role === "Admin" && (
                <>
                  {" "}
                  <NavItem>
                    <NavLink
                      className={classnames({
                        "text-white": activeTab !== "2",
                      })}
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
                      Customized Deals
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        "text-white": activeTab !== "3",
                      })}
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
                      className={classnames({
                        "text-white": activeTab !== "4",
                      })}
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
                </>
              )}

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
                  <DropdownMenu>
                    <DropdownItem onClick={() => toggleTab("6")}>
                      Upcoming Schedules
                    </DropdownItem>
                    <DropdownItem divider />
                    {/* <DropdownItem onClick={() => toggleTab("8")}>
                        Meet Requests
                      </DropdownItem> */}
                    <DropdownItem divider />
                    <DropdownItem onClick={() => toggleTab("9")}>
                      Calls History
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown
                  isOpen={dropdownOpenTrans}
                  toggle={toggleDropdownTrans}
                >
                  <DropdownToggle
                    className="nav-link"
                    style={{
                      backgroundColor: activeTab === "5" ? "green" : "black",
                      color: activeTab === "5" ? "white" : "white",
                      borderRadius: "15px",
                      padding: "10px",
                    }}
                    caret
                  >
                    Transactions
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => toggleTab("10")}>
                      Deals Transactions
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => toggleTab("5")}>
                      Subscription Transactions
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
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
              <NavItem>
                <NavLink
                  className={classnames({ "text-white": activeTab !== "11" })}
                  style={{
                    backgroundColor: activeTab === "11" ? "green" : "black",
                    color: activeTab === "7" ? "white" : "white",
                    borderRadius: "15px",
                    padding: "10px",
                  }}
                  onClick={() => {
                    toggleTab("11");
                  }}
                >
                  Insurance
                </NavLink>
              </NavItem>
            </Nav>
            <CardBody>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <UserProfile user={user} />
                </TabPane>
                <TabPane tabId="15">
                  <InvestorDashboard />
                </TabPane>
                <TabPane tabId="17">
                  <ViewDeals AddProperty={true} />
                </TabPane>
                <TabPane tabId="16">
                  <Occupants />
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
                  <UpcomingCall />
                </TabPane>
                {/* <TabPane tabId="8">
                  <MeetRequests />
                </TabPane> */}
                <TabPane tabId="9">
                  <History />
                </TabPane>
                <TabPane tabId="10">
                  <DealsTransactions />
                </TabPane>
                <TabPane tabId="7">
                  <Evictions />
                </TabPane>
                <TabPane tabId="11">
                  <InsuranceTemplate />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {role === "Admin" && (
        <div style={{ position: "fixed", right: "25px", bottom: "30px" }}>
          <a href={whatsAppUrl} rel="noopener noreferrer" onClick={handleClick}>
            <img
              height={50}
              width={50}
              src={whatsappIcon}
              alt="WhatsApp Icon"
            />
          </a>
        </div>
      )}
    </Fragment>
  );
};

export default UserDetails;

export const UserProfile = ({ user }) => {
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
