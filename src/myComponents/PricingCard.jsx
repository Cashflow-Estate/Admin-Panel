import React, { Fragment } from 'react';
import { H3, LI, UL } from '../AbstractElements';
import { Standard, Premium, Edit } from '../Constant';
import { Btn } from '../AbstractElements';
import { Row, Col, CardBody } from 'reactstrap';

const PricingCard = () => {
  return (
    <Fragment>
      <CardBody>
        <Row className='pricing-block'>
          <Col lg='3' md='6'>
            <div className='pricingtable'>
              <div className='pricingtable-header'>
                <H3 attrH3={{ className: 'title' }}>{Standard}</H3>
              </div>
              <div className='price-value'>
                <span className='currency'>{'$'}</span>
                <span className='amount'>{'10'}</span>
                <span className='duration'>{'/mo'}</span>
              </div>
              <UL attrUL={{ className: 'pricing-content flex-row' }}>
                <LI attrLI={{ className: 'border-0' }}>{'50GB Disk Space'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'50 Email Accounts'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'Maintenance'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'15 Subdomains'}</LI>
              </UL>
              <div className='pricingtable-Edit'>
              <div className='pricingtable-actions'>
                <Btn attrBtn={{ color: 'success', size: 'lg' }}>{Edit}</Btn>
                <Btn attrBtn={{ color: 'danger', size: 'lg' }}>{'Delete'}</Btn>
              </div>
            </div>
            </div>
          </Col>
          <Col lg='3' md='6'>
            <div className='pricingtable'>
              <div className='pricingtable-header'>
                <H3 attrH3={{ className: 'title' }}>{Premium}</H3>
              </div>
              <div className='price-value'>
                <span className='currency'>{'$'}</span>
                <span className='amount'>{'20'}</span>
                <span className='duration'>{'/mo'}</span>
              </div>
              <UL attrUL={{ className: 'pricing-content' }}>
                <LI attrLI={{ className: 'border-0' }}>{'10% on all product'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'50 Email Accounts'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'Maintenance'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'15 Subdomains'}</LI>
              </UL>
              <div className='pricingtable-Edit'>
              <div className='pricingtable-actions'>
                <Btn attrBtn={{ color: 'success', size: 'lg' }}>{Edit}</Btn>
                <Btn attrBtn={{ color: 'danger', size: 'lg' }}>{'Delete'}</Btn>
              </div>
            </div>
            </div>
          </Col>
          <Col lg='3' md='6'>
            <div className='pricingtable'>
              <div className='pricingtable-header'>
                <H3 attrH3={{ className: 'title' }}>{'Auther pack'}</H3>
              </div>
              <div className='price-value'>
                <span className='currency'>{'$'}</span>
                <span className='amount'>{'50'}</span>
                <span className='duration'>{'/mo'}</span>
              </div>
              <UL attrUL={{ className: 'pricing-content' }}>
                <LI attrLI={{ className: 'border-0' }}>{'Upload 50 product'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'50 Email Accounts'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'Maintenance'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'15 Subdomains'}</LI>
              </UL>
              <div className='pricingtable-Edit'>
              <div className='pricingtable-actions'>
                <Btn attrBtn={{ color: 'success', size: 'lg' }}>{Edit}</Btn>
                <Btn attrBtn={{ color: 'danger', size: 'lg' }}>{'Delete'}</Btn>
              </div>
            </div>
                
              </div>
          </Col>
          <Col lg='3' md='6'>
            <div className='pricingtable'>
              <div className='pricingtable-header'>
                <H3 attrH3={{ className: 'title' }}>{'Auther pack'}</H3>
              </div>
              <div className='price-value'>
                <span className='currency'>{'$'}</span>
                <span className='amount'>{'50'}</span>
                <span className='duration'>{'/mo'}</span>
              </div>
              <UL attrUL={{ className: 'pricing-content' }}>
                <LI attrLI={{ className: 'border-0' }}>{'Upload 50 product'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'50 Email Accounts'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'Maintenance'}</LI>
                <LI attrLI={{ className: 'border-0' }}>{'15 Subdomains'}</LI>
              </UL>
              <div className='pricingtable-Edit'>
              <div className='pricingtable-actions'>
                <Btn attrBtn={{ color: 'success', size: 'lg' }}>{Edit}</Btn>
                <Btn attrBtn={{ color: 'danger', size: 'lg' }}>{'Delete'}</Btn>
              </div>
            </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default PricingCard;
