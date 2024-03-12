import React, { Fragment } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb } from "reactstrap";

const WebsiteQueries = () => {
  return (
    <Fragment>
      <Breadcrumb mainTitle="Queries" parent="Queries" title="Website Queries" />
      <Container fluid={true}>
        <Row>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h4">Query Title 1</CardTitle>
                <CardText tag="h6">Name : Syed M.Abid</CardText>

                <CardText>
                  This is a brief description of the query or question. You can provide more details here if needed.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h4">Query Title 1</CardTitle>
                <CardText tag="h6">Name : Syed M.Abid</CardText>

                <CardText>
                  This is a brief description of the query or question. You can provide more details here if needed.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h4">Query Title 1</CardTitle>
                <CardText tag="h6">Name : Syed M.Abid</CardText>

                <CardText>
                  This is a brief description of the query or question. You can provide more details here if needed.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h4">Query Title 1</CardTitle>
                <CardText tag="h6">Name : Syed M.Abid</CardText>

                <CardText>
                  This is a brief description of the query or question. You can provide more details here if needed.
                </CardText>
              </CardBody>
            </Card>
          </Col>
         
          {/* Repeat the above pattern for other queries */}
        </Row>
      </Container>
    </Fragment>
  );
};

export default WebsiteQueries;
