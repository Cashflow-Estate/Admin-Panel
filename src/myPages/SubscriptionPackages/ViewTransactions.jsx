import React, { Fragment, useState } from "react";

import { Card, CardBody, CardHeader, Nav } from "reactstrap";
import { Image, H5, Breadcrumbs } from "../../AbstractElements";
import { DailyDropdown, RecentOrdersTitle } from "../../Constant";
import useShowClass from "../../Hooks/useShowClass";
import CommonDropDown from "../myBanners/comp/CommonDropDown";
import RecentOrderContentTab from "./comp/RecentOrderContentTab";
import PaginationWithIconsClass from "./comp/PaginationWithIcons";

const ViewTransactions = () => {
  const [isActive, setIsActive] = useState("0");
  const [show, setShow] = useShowClass("show");
  const RecentOrdersNav = ["1", "2", "3", "4", "5"];

  const activeHandle = (i) => {
    setIsActive(`${i}`);
    setShow("");
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Transactions" parent="All" title="Transaction" />

      <Card className="recent-order">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <H5 attrH5={{ className: "m-0" }}>{"Recent Transaction"}</H5>
            <div className="card-header-right-icon">
              <CommonDropDown
                dropdownMain={{
                  className: "icon-dropdown",
                  direction: "start",
                }}
                options={DailyDropdown}
                iconName="icon-more-alt"
                btn={{ tag: "span" }}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="recent-sliders">
            <RecentOrderContentTab
              show={show}
              isActive={isActive}
              RecentOrdersNav={RecentOrdersNav}
            />
          </div>
        </CardBody>
      </Card>
      <PaginationWithIconsClass />

    </Fragment>
  );
};

export default ViewTransactions;
