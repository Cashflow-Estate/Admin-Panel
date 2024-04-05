import {
  IconCirclePlus,
  IconCreditCard,
  IconPackage,
  IconPencilMinus,
} from "@tabler/icons-react";
import React, { Fragment } from "react";
import { Col, Card, Button, Row } from "react-bootstrap";
import { Breadcrumbs } from "../../AbstractElements";

const UserCurrentSubscription = () => {
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Current Plan"
        parent="Packages"
        title="Current Plan"
      />

      <Row className="justify-content-center">
        {/* Current Plan */}
        <Col xs={12} lg={9}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                Current Plan :
                <span className="text-success ml-1">Executive</span>
              </Card.Title>
              <Card.Text>
                Thanks for being a premium member and supporting our
                development.
              </Card.Text>

              {/* Current Plan Details */}
              <div className="d-flex align-items-center mt-4 mb-2">
                <div
                  className="avatar rounded"
                  style={{ color: "grey", width: 48, height: 48 }}
                >
                  <IconPackage size="22" />
                </div>
                <div>
                  <Card.Subtitle className="mb-1" variant="subtitle1">
                    Current Plan
                  </Card.Subtitle>
                  <Card.Title as="h6">$150 </Card.Title>
                </div>
                <div className="ml-auto">
                  <Button variant="light">
                    <IconPencilMinus size="22" />
                  </Button>
                </div>
              </div>

              {/* Change Plan Buttons */}
              <div className="d-flex justify-content-between align-items-end">
                <Button variant="primary" className="mr-2">
                  Change Plan
                </Button>
                <Button variant="outline-warning" className="mt-2">
                  Cancel Subscription
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserCurrentSubscription;
