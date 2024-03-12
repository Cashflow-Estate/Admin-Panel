import React, { Fragment } from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const DealsQueries = () => {
  return (
    <Fragment>
      <Breadcrumb mainTitle="Deals" parent="Deals" title="Deals Queries" />
      <Container fluid={true}>
        <Row>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Deal Name 1</CardTitle>
                <CardText>Price: $50</CardText>
                <Button>Click Here to see queries</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Deal Name 2</CardTitle>
                <CardText>Price: $50</CardText>
                <Button>Click Here to see queries</Button>

              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Deal Name 1</CardTitle>
                <CardText>Price: $50</CardText>
                <Button>Click Here to see queries</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Deal Name 2</CardTitle>
                <CardText>Price: $50</CardText>
                <Button>Click Here to see queries</Button>

              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Deal Name 1</CardTitle>
                <CardText>Price: $50</CardText>
                <Button>Click Here to see queries</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Deal Name 2</CardTitle>
                <CardText>Price: $50</CardText>
                <Button>Click Here to see queries</Button>

              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Deal Name 1</CardTitle>
                <CardText>Price: $50</CardText>
                <Button>Click Here to see queries</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Deal Name 2</CardTitle>
                <CardText>Price: $50</CardText>
                <Button>Click Here to see queries</Button>

              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Deal Name 1</CardTitle>
                <CardText>Price: $50</CardText>
                <Button>Click Here to see queries</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Deal Name 2</CardTitle>
                <CardText>Price: $50</CardText>
                <Button>Click Here to see queries</Button>

              </CardBody>
            </Card>
          </Col>
          {/* Repeat the above pattern for other deals */}
        </Row>
      </Container>
    </Fragment>
  );
};

export default DealsQueries;
