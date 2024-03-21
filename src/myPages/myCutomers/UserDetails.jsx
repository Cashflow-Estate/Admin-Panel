import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import ViewTransactions from "../SubscriptionPackages/ViewTransactions";
import { Breadcrumbs, H5, H6, Image, LI, UL } from "../../AbstractElements";
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
      <Breadcrumbs mainTitle="User Detail" parent="User" title="#1121" />
      <Col>
        <UserProfile user={user} />
      </Col>
      <Col>
        <UserDeals heading={"Special Deals"} />
      </Col>
      <Col style={{ paddingTop: "20px" }}>
        <UserDeals heading={"Deal Purchased"} />
      </Col>
      <Col style={{ paddingTop: "20px" }}>
        <UserDeals heading={"Deals Not Yet Buy"} />
      </Col>
      <ViewTransactions showBreadcrumbs={false} />{" "}
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
          <H5 attrH5={{ className: "mb-0" }}>{totalPost}</H5>
          <span className="f-light" style={{ color: "orange" }}>
            Address
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>{follower}</H5>
          <span className="f-light" style={{ color: "orange" }}>
            Ph#
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>{following}</H5>
          <span className="f-light" style={{ color: "orange" }}>
            Invested
          </span>
        </LI>
      </UL>
      <UL attrUL={{ className: "social-follow" }}>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>{email}</H5>
          <span className="f-light" style={{ color: "orange" }}>
            Email
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>{PackageName}</H5>
          <span className="f-light" style={{ color: "orange" }}>
            Plan
          </span>
        </LI>
        <LI>
          <H5 attrH5={{ className: "mb-0" }}>{MemberType}</H5>
          <span className="f-light" style={{ color: "orange" }}>
            Member Type
          </span>
        </LI>
      </UL>
    </>
  );
};
