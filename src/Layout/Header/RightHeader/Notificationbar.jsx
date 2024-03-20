import React, { useState } from 'react';
import SvgIcon from '../../../Components/Common/Component/SvgIcon';
import { CHECKALL, DeliveryComplete, DeliveryProcessing, Notification, OrderComplete, TicketsGenerated } from '../../../Constant';

const Notificationbar = () => {
  const [notificationDropDown, setNotificationDropDown] = useState(false);

  return (
    <li className='onhover-dropdown'>
      <div className='notification-box' onClick={() => setNotificationDropDown(!notificationDropDown)}>
        <SvgIcon iconId='notification' />
        <span className='badge rounded-pill badge-secondary'>4</span>
      </div>
      <div className={`notification-dropdown onhover-show-div ${notificationDropDown ? 'active' : ''}`}>
        <h6 className='f-18 mb-0 dropdown-title'>{Notification}</h6>
        <ul>
          <li className='b-l-primary border-4'>
            <p>
              {"Last Transaction "} <span className='font-danger'>{'10 min ago'}</span>
            </p>
          </li>
          
        </ul>
      </div>
    </li>
  );
};

export default Notificationbar;
