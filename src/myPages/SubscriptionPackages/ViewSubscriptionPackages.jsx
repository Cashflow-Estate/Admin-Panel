import React, { Fragment } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { Breadcrumbs, H3 } from "../../AbstractElements";
import HeaderCard from "../../myComponents/HeaderCard";
import PricingCard from "../../myComponents/PricingCard";

const ViewSubscriptionPackages = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Pricing" parent="Packages" title="Pricing" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={"All Packages"} />
              <PricingCard/>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ViewSubscriptionPackages;
