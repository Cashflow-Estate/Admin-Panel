import React, { Fragment, useState } from 'react';
import { H3, LI, UL } from '../AbstractElements';
import { Btn } from '../AbstractElements';
import { Row, Col, CardBody } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const PricingCard = () => {
  const [modal, setModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleDelete = (plan) => {
    setSelectedPlan(plan);
    toggleModal();
  };

  const confirmDelete = () => {
    // Perform delete operation
    console.log("Deleting plan:", selectedPlan);
    toggleModal(); // Close the modal after deleting
  };

  return (
    <Fragment>
      <CardBody>
        <Row className='pricing-block'>
          {plans?.map(plan => (
            <Col lg='3' md='6' key={plan.id}>
              <div className='pricingtable'>
                <div className='pricingtable-header'>
                  <H3 attrH3={{ className: 'title' }}>{plan.title}</H3>
                </div>
                <div className='price-value'>
                  <span className='currency'>{'$'}</span>
                  <span className='amount'>{plan.price}</span>
                  <span className='duration'>{'/mo'}</span>
                </div>
                <UL attrUL={{ className: 'pricing-content flex-row' }}>
                  {plan.features.map((feature, index) => (
                    <LI attrLI={{ className: 'border-0' }} key={index}>{feature}</LI>
                  ))}
                </UL>
                <div className='pricingtable-Edit'>
                  <div className='pricingtable-actions'>
                    <Btn attrBtn={{ color: 'success', size: 'lg' }}>{'Edit'}</Btn>
                    <Btn attrBtn={{ color: 'danger', size: 'lg' }} onClick={() => handleDelete(plan)}>{'Delete'}</Btn>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Confirm Delete</ModalHeader>
          <ModalBody>
            Are you sure you want to delete the plan "{selectedPlan?.title}"?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={confirmDelete}>Delete</Button>{' '}
            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </CardBody>
    </Fragment>
  );
};

export default PricingCard;
const plans = [
  {
    id: 1,
    title: 'Standard',
    price: 10,
    features: ['50GB Disk Space', '50 Email Accounts', 'Maintenance', '15 Subdomains']
  },
  {
    id: 2,
    title: 'Premium',
    price: 20,
    features: ['10% on all product', '50 Email Accounts', 'Maintenance', '15 Subdomains']
  },
  {
    id: 3,
    title: 'Author Pack',
    price: 50,
    features: ['Upload 50 product', '50 Email Accounts', 'Maintenance', '15 Subdomains']
  },
  {
    id: 4,
    title: 'Author Pack',
    price: 50,
    features: ['Upload 50 product', '50 Email Accounts', 'Maintenance', '15 Subdomains']
  }
];

// Then use the PricingCard component like this
{/* <PricingCard plans={plans} /> */}
