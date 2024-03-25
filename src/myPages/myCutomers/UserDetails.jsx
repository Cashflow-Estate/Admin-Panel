import React, { Fragment, useState } from "react";
import { useGenerateWhatsappUrl } from '../../myHooks';
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import ViewTransactions from "../SubscriptionPackages/ViewTransactions";
import { Breadcrumbs, H5, H6, Image, LI, UL } from "../../AbstractElements";
import whatsappIcon from "../../assets/CashflowLogos/whatsappp.jpeg"
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

const UserDetails = () => {
  const [whatsAppUrl, setWhatsAppUrl] = useGenerateWhatsappUrl();
  
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
      <div >
        <Breadcrumbs mainTitle="User Detail" parent="User" title="#1121" />
        <Col>
          <UserProfile user={user} />
        </Col>
        <Col>
          <UserDeals heading={"Featured Deals"} />
        </Col>
        <Col style={{ paddingTop: "20px" }}>
          <UserDeals heading={"Deal Purchased"} />
        </Col>
        <Col style={{ paddingTop: "20px" }}>
          <UserDeals heading={"Inquiry, no purchase."} />
        </Col>
        <Col style={{ paddingTop: "20px" }}>
        <ViewTransactions showBreadcrumbs={false} />{" "}

        </Col>
      </div>
      <div style={{ position: "fixed", right: "25px", bottom: "30px" }}>
        <a
          // aria-disabled={!isPhoneValid}
          href={whatsAppUrl}
          rel='noopener noreferrer'
          onClick={handleClick}
        >
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
          <span className="f-light" style={{ color: "orange",fontSize:"15px" }}>
            {totalPost}
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Ph#</H5>
          <span className="f-light" style={{ color: "orange",fontSize:"15px" }}>
            {follower}
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Invested Amount</H5>
          <span className="f-light" style={{ color: "orange",fontSize:"15px" }}>
            {following}
          </span>
        </LI>
      </UL>
      <UL attrUL={{ className: "social-follow" }}>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Email</H5>
          <span className="f-light" style={{ color: "orange",fontSize:"15px" }}>
            {email}
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Plan</H5>
          <span className="f-light" style={{ color: "orange",fontSize:"15px" }}>
            {PackageName}
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>Member Type</H5>
          <span className="f-light" style={{ color: "orange",fontSize:"15px" }}>
            {MemberType}
          </span>
        </LI>
      </UL>
    </>
  );
};
