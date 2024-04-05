import { IconCirclePlus, IconCreditCard, IconPackage, IconPencilMinus } from '@tabler/icons-react';
import React, { Fragment } from 'react';
import { Col, Card, Button, Row } from 'react-bootstrap';
import { Breadcrumbs } from '../../../AbstractElements';

const UserCardDetails = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Current Plan" parent="Packages" title="Current Plan" />

      <Row className="justify-content-center">
  
        <Col xs={12} lg={9}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Payment Method</Card.Title>
              <Card.Text>
                On 26 December, 2023
              </Card.Text>

              {/* Payment Method Details */}
              <div className="d-flex align-items-center mt-4">
                <div className="avatar rounded" style={{ color: 'grey', width: 48, height: 48 }}>
                  <IconCreditCard size="22" />
                </div>
                <div>
                  <Card.Title as="h6">Visa</Card.Title>
                  <Card.Subtitle className="mb-1" fontWeight={500}>*****2102</Card.Subtitle>
                </div>
                <div className="ml-auto">
                  <Button variant="light">
                    <IconPencilMinus size="22" />
                  </Button>
                </div>
              </div>

              {/* Note */}
              <Card.Text className="text-secondary mt-1">
                If you updated your payment method, it will only be displayed here after your next billing cycle.
              </Card.Text>

              {/* Cancel Subscription Button */}
            
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default UserCardDetails;
