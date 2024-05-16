import React, { Fragment, useContext } from 'react';
import { Image, UL, LI } from '../../../AbstractElements';
// import ChatAppContext from '../../../../_helper/Chat';
import { AlignJustify, Headphones, Paperclip, Search, Video } from 'react-feather';
import logo from '../../../assets/images/user/5.jpg'
import { useLocation } from 'react-router-dom';

const ChatHeader = () => {
  // const { selectedUserr, setMenuToggle, menuToggle } = useContext(ChatAppContext);
  const location = useLocation();

  // const chatMenuToggle = () => {
  //   setMenuToggle(!menuToggle);
  // };
  const members=[
    {
        "id": 0,
        "name": "Johan Deo",
        "thumb": "user/1.jpg",
        "status": "  Out is my favorite",
        "lastSeenDate": "0",
        "online": true,
        "typing": true,
        "time": " 5 May, 5:30 PM",
        "reply": "fa fa-reply font-danger"
    },
    {
        "id": 1,
        "name": "Vincent Porter",
        "thumb": "user/2.png",
        "status": "  Change for anyone.",
        "lastSeenDate": "Last seen today 15:24",
        "online": false,
        "typing": false,
        "time": " 5 May, 5:30 PM",
        "reply": "fa fa-reply font-success"
    },
    {
        "id": 2,
        "name": "Aiden Chavez",
        "thumb": "user/3.png",
        "status": "  first bun like a sun.",
        "lastSeenDate": "Last seen today 13:24",
        "online": false,
        "typing": false,
        "time": " 5 May, 5:30 PM",
        "reply": "fa fa-reply font-success"
    },
    {
        "id": 3,
        "name": "Ginger Johnston",
        "thumb": "user/6.jpg",
        "status": "  first bun like a sun.",
        "lastSeenDate": "Last seen today 22:24",
        "online": false,
        "typing": false,
        "time": " 5 May, 5:30 PM",
        "reply": "fa fa-reply font-danger"
    },
    {
        "id": 4,
        "name": "Kori Thomas",
        "thumb": "user/7.jpg",
        "status": "  Change for anyone.",
        "lastSeenDate": "Last seen today 00:24",
        "online": true,
        "typing": true,
        "time": " 5 May, 5:30 PM",
        "reply": "fa fa-reply font-success"
    },
    {
        "id": 5,
        "name": "Kori Thomas",
        "thumb": "user/9.jpg",
        "status": "  Change for anyone.",
        "lastSeenDate": "Last seen yesterday 06:47",
        "online": false,
        "typing": false,
        "time": " 5 May, 5:30 PM",
        "reply": "fa fa-reply font-danger"
    },
    {
        "id": 6,
        "name": "Erica Hughes",
        "thumb": "user/10.jpg",
        "status": "  Change for anyone.",
        "lastSeenDate": "Last seen yesterday 20:07",
        "online": true,
        "typing": true,
        "time": " 5 May, 5:30 PM",
        "reply": "fa fa-reply font-danger"
    },
    {
        "id": 7,
        "name": "Porter Ginger",
        "thumb": "user/11.png",
        "status": "  Change for anyone.",
        "lastSeenDate": "Last seen yesterday 14:14",
        "online": false,
        "typing": false,
        "time": " 5 May, 5:30 PM",
        "reply": "fa fa-reply font-success"
    }
  ]
  return (
    <Fragment>
      <div className='chat-header clearfix'>
        <Image
          attrImage={{
            className: 'rounded-circle',
            src: `${logo}`,
            alt: '',
          }}
        />
        <div className='media-body'>
          <div className='about'>
            <div className='name'>
              {/* {members ? members.name : 'Vincent Porter'} */}
              Vincent Porter
              {/* {location.state3 ? <span className='font-primary f-12'> Typing...</span> : ''} */}
            </div>
            {/* <div className='status digits'>{members ? members.lastSeenDate : '5 May, 5:30 PM'}</div> */}
            <div className='status digits'>Last seen 17 May, 10:30 AM</div>
          </div>
        </div>
        {/* <UL attrUL={{ className: 'simple-list list-inline float-start float-sm-end chat-menu-icons d-flex flex-row' }}>
          <LI attrLI={{ className: 'list-inline-item border-0' }}>
            <a href='#javascript'>
              <Search />
            </a>
          </LI>
          <LI attrLI={{ className: 'list-inline-item border-0' }}>
            <a href='#javascript'>
              <Paperclip />
            </a>
          </LI>
          <LI attrLI={{ className: 'list-inline-item border-0' }}>
            <a href='#javascript'>
              <Headphones />
            </a>
          </LI>
          <LI attrLI={{ className: 'list-inline-item border-0' }}>
            <a href='#javascript'>
              <Video />
            </a>
          </LI>
          <LI attrLI={{ className: 'list-inline-item toogle-bar border-0' }}>
            <a href='#javascript'>
              <AlignJustify onClick={() => chatMenuToggle()} />
            </a>
          </LI>
        </UL> */}
      </div>
    </Fragment>
  );
};
export default ChatHeader;
