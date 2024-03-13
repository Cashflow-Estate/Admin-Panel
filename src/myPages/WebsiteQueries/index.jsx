import React, { Fragment } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Breadcrumbs } from "../../AbstractElements";

const queries = [
  { id: 1, title: "Query Title 1", name: "Syed M.Abid", description: "This is a brief description of the query or question. You can provide more details here if needed." },

];

const WebsiteQueries = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Queries" parent="Queries" title="Website Queries" />
      <Container fluid>
        <Row>
          {queries.map(query => (
            <Col key={query.id} sm="6">
              <Card>
                <CardBody>
                  <CardTitle tag="h4">{query.title}</CardTitle>
                  <CardText tag="h6">Name: {query.name}</CardText>
                  <CardText>{query.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default WebsiteQueries;
