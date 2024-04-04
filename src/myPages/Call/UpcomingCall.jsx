import React, { Fragment } from "react";
import {
  Breadcrumbs,
  Btn,
  H5,
  H6,
  Image,
  LI,
  UL,
} from "../../AbstractElements";
import SvgIcon from "../../Components/Common/Component/SvgIcon";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const UpcomingCall = () => {
  const userRole = useSelector((state) => state.auth.role);

  const history = useNavigate();
  const call = () => {
    history("/schedule-call");
  };
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Upcoming Calls"
        parent="Call"
        title="Upcoming Meets"
      />

      <Card className="schedule-card">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <H5 attrH5={{ className: "m-0" }}>{"Schedule"}</H5>
            {userRole === "Admin" && (
              <div className="card-header-right-icon">
                <Btn
                  onClick={call}
                  attrBtn={{
                    color: "light-primary",
                    className: "btn badge-light-primary",
                  }}
                >
                  + {"Create"}
                </Btn>
              </div>
            )}
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <ScheduleListBox data={ScheduleListData} />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default UpcomingCall;
const ScheduleListData = [
  {
    title: "Web Design",
    image: "4.jpg",
    icon: "bag",
    icon2: "clock",
    date: "March 30, 2024",
    date2: "09.00 - 12.00 AM",
    color: "primary",
  },
  {
    title: "UI/UX Design",
    image: "2.jpg",
    icon: "bag",
    icon2: "clock",
    date: "April 10, 2024",
    date2: "11.00 - 1.00 PM",
    color: "warning",
  },
];
const ScheduleListBox = ({ data }) => {
  return (
    <UL attrUL={{ className: "schedule-list d-flex" }}>
      {data.map((item, i) => (
        <LI key={i} attrLI={{ className: `${item.color}` }}>
          <div className="d-flex">
            <div className="social-img">
              <Image
                attrImage={{
                  src: require(`../../assets/images/user/3.png`),
                  alt: "profile",
                }}
              />
            </div>
            <div>
              <H6 className="mb-1">{"For the AV Plaza"}</H6>
              <UL>
                <LI attrLI={{ className: "f-light" }}>
                  <SvgIcon iconId={item.icon} className="fill-icon f-light" />
                  <span>{item.date}</span>
                </LI>
                <LI attrLI={{ className: "f-light" }}>
                  <SvgIcon
                    iconId={item.icon2}
                    className="fill-icon f-success"
                  />
                  <span> {item.date2}</span>
                </LI>
              </UL>
            </div>
          </div>
        </LI>
      ))}
    </UL>
  );
};
