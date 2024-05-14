import React, { Fragment, useContext } from 'react';
// import ChatAppContext from '../../../../_helper/Chat';
// import { Image, LI, UL } from '../../../../AbstractElements';
// import errorImg from '../../../../assets/images/search-not-found.png';
import SearchChatList from './SearchChatList';
import CurrentUser from './CurrentUser';
import { Image, LI, UL } from '../../../AbstractElements';
import iii from "../../../../src/assets/images/avtar/11.jpg";

const ChatStatus = () => {
  // const { selectedUserr, members, currentUserr, chatss, changeChat, createNewChatAsyn } = useContext(ChatAppContext);
  // var images = require.context('../../../../assets/images', true);
  // const dynamicImage = (image) => {
  //   return images(`./${image}`);
  // };
  // const changeChatClick = (e, selectedUserId) => {
  //   const currentUserId = currentUserr.id;
  //   const currentChat = chatss.find((x) => x.users.includes(currentUserr.id) && x.users.includes(selectedUserId));
  //   if (currentChat) {
  //     changeChat(selectedUserId);
  //   } else {
  //     createNewChatAsyn(currentUserId, selectedUserId, chatss);
  //   }
  // };

  // var activeChat = 0;
  // if (selectedUserr != null) activeChat = selectedUserr.id;
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
      <div className='chat-box'>
        <div className='chat-left-aside'>
          <CurrentUser />
          <div className='people-list' id='people-list'>
            <SearchChatList />
            {members && members.length > 0 ? (
              <UL attrUL={{ className: 'simple-list list custom-scrollbar' }}>
                {members
                  .filter((x) => x.id !==  0,
)
                  .map((item) => {
                    return (
                      <LI
                        attrLI={{
                          style: { backgroundColor: 'transparent' },
                          className: `clearfix border-0 ${0 === item.id ? 'active' : ''}`,
                          // onClick: (e) => changeChatClick(e, item.id),
                        }}
                        key={item.id}>
                        <Image
                          attrImage={{
                            src: `${iii}`,
                            className: 'rounded-circle user-image',
                            alt: '',
                          }}
                        />
                        <div className={`status-circle ${item.online === true ? 'online' : 'offline'}`}></div>
                        <div className='about'>
                          <div className='name'>{item.name}</div>
                          <div className='status'>{item.status}</div>
                        </div>
                      </LI>
                    );
                  })}
              </UL>
            ) : (
              <Image
                attrImage={{
                  className: 'img-fluid m-auto',
                  // src: { errorImg },
                  alt: '',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ChatStatus;
