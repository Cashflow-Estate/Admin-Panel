import React, { Fragment, useContext } from 'react';
import iii from "../../../../src/assets/images/user/5.jpg";
import { Image } from '../../../AbstractElements';
import { Link } from 'react-router-dom';

const CurrentUser = () => {

  return (
    <Fragment>
      { (
        <div className='media'>
          <Image
            attrImage={{
              src: `${iii}`,
              className: 'rounded-circle user-image',
              alt: '',
            }}
          />
          <div className='about'>
            <Link to={"/dashboard"}>
              <div className='name f-w-600'>Vincent Porter</div>
            </Link>
            <div className='status'>Live</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CurrentUser;
