import React, { Fragment, useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import H3 from '../Headings/H3Element';
import CustomizerContext from '../../_helper/Customizer';
import SvgIcon from '../../Components/Common/Component/SvgIcon';

const Breadcrumbs = (props) => {
  const { layoutURL } = useContext(CustomizerContext);
  return (
    <Fragment>
      <Container fluid={true}>
        <div className='page-title'>
          <Row>
            <Col xs='6'>
              <H3>{props.mainTitle}</H3>
            </Col>
            <Col xs='6'>
              <ol className='breadcrumb'>
           {/* {    props.back && <li className='breadcrumb-item'>
                  <Link to={props.back}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
</svg>

                  </Link>
                </li>} */}
                <li className='breadcrumb-item'>
                  <Link to={`http://localhost:3000/dashboard`}>
                    <SvgIcon iconId='stroke-home' />
                  </Link>
                </li>
           {  props.back?   <li className='breadcrumb-item'> <Link to={props.back}>{props.back &&(props.parent)}
                  </Link></li>:
                  <li className='breadcrumb-item'>{props.parent}</li>
                  }
             
                {props.subParent ? <li className='breadcrumb-item'>{props.subParent}</li> : ''}
                <li className='breadcrumb-item active'>{props.title}</li>
              </ol>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;
