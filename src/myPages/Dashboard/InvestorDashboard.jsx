import {  Card, CardBody, Carousel, Col, Container, Row, TabContainer } from "react-bootstrap";
import iimmgg from "../../assets/cashflowimg/ban.jpg";
import { GreetingCard } from "./CustomerDashboard";
import SvgIcon from "../../Components/Common/Component/SvgIcon";
import { H4 } from "../../AbstractElements";
import CountUp from "react-countup";

const InvestorDashboard = () => {
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
      <TabContainer fluid={true}>
        <Row>
          <GreetingCard />
    <WidgetsGrids/>
        </Row>
      </TabContainer>
    );
  };
  export default InvestorDashboard;
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
      title: "Total Property",
      color: "primary",
      total: 3_4,
      icon: "new-order",
    },
    {
      title: "Total Occupent Property",
      color: "warning",
      total: 2_1,
      gros: 20,
      icon: "customers",
    },
  
    {
      title: "Total Vacant Property",
      color: "warning",
      total: 1_3,
      gros: 20,
      icon: "customers",
    },
  
    // {
    //   title: "Deals Closed(monthly)",
    //   color: "success",
    //   total: 1_1,
    //   gros: 80,
    //   icon: "sale",
    // },
    {
      title: "Monthly Rent",
      color: "warning",
  
      total: 989,
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