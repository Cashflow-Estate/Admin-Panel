import React, { Fragment, useContext, useEffect } from 'react';
import { Image, LI, UL } from '../../../AbstractElements';
// import ChatAppContext from '../../../../_helper/Chat';
import start_conversion from '../../../assets/images/start-conversion.jpg';
import styled from 'styled-components';
import sender from '../../../../src/assets/images/user/1.jpg'
import receiver from '../../../../src/assets/images/user/2.png'
import logo from '../../../assets/images/user/5.jpg'

const ChatMessage = () => {
  // const { allMemberss, chatss, selectedUserr, currentUserr, fetchChatMemberAsyn, fetchChatAsyn } = useContext(ChatAppContext);
  // var images = require.context('../../../../assets/images', true);

  // useEffect(() => {
  //   fetchChatMemberAsyn();
  //   fetchChatAsyn();
  // }, [allMemberss.length === 0, chatss.length === 0]);

  // const dynamicImage = (image) => {
  //   return images(`./${image}`);
  // };

  // const selectedChat = allMemberss && chatss && selectedUserr ? chatss.find((x) => x.users.includes(currentUserr.id) && x.users.includes(selectedUserr.id)) : null;
  // var activeChat = 0;
  // // eslint-disable-next-line
  // if (selectedUserr != null) activeChat = selectedUserr.id;

  const chat = [
    {
      "id": 1,
      "users": [
        0,
        1
      ],
      "lastMessageTime": "18:20",
      "messages": [
        {
          "sender": 0,
          "time": "10:12 am",
          "text": "Are we meeting today? Project has been already finished and I have results to show you."
        },
        {
          "sender": 1,
          "time": "10:14 am",
          "text": "Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so?."
        },
        {
          "sender": 1,
          "time": "10:14 am",
          "text": "Well I am not sure. The rest of the team."
        },
        {
          "sender": 0,
          "time": "10:20 am",
          "text": "Actually everything was fine. I'm very excited to show this to our team."
        }
      ]
    },
    {
      "id": 2,
      "users": [
        0,
        4
      ],
      "lastMessageTime": "10:20",
      "messages": [
        {
          "sender": 0,
          "time": "09:25",
          "text": "Hello. How are you today?"
        },
        {
          "sender": 4,
          "time": "09:29",
          "text": "Hey! I'm fine. Thanks for asking!"
        },
        {
          "sender": 4,
          "time": "09:36",
          "text": "Sweet! So, what do you wanna do today?"
        },
        {
          "sender": 0,
          "time": "10:12",
          "text": "Nah, I dunno. Play soccer.. or learn more coding perhaps?"
        },
        {
          "sender": 4,
          "time": "10:30",
          "text": "I am very busy at the moment."
        }
      ]
    }
  ]
  const selectedChat = chat ? chat.find((x) => x.users.includes(0) && x.users.includes(1)) : null;
  console.log(selectedChat)

  return (
    <Fragment>
      {chat.length ? (
        <div className='chat-history chat-msg-box custom-scrollbar'>
          <UL attrUL={{ className: 'simple-list' }}>
            {selectedChat && selectedChat.messages.length > 0 ? (
              selectedChat.messages.map((item, index) => {
                return (
                  <LI attrLI={{ className: 'clearfix border-0' }} key={index}>
                    <div className={`message  ${item.sender !== 1 ? 'my-message' : 'other-message pull-right '}`}>
                      <Image
                        attrImage={{
                          className: 'rounded-circle',
                          src: `${logo}`,
                          alt: '',
                        }}
                      />
                      <div className='message-data text-end'>
                        <span className='message-data-time'>09:36</span>
                      </div>
                      {/* {item.messages.map((val)=>val.text)} */}
                      I am very busy at the moment.
                    </div>
                  </LI>
                );
              })
            ) : (
              <div>
                <Image
                  attrImage={{
                    className: 'rounded-circle',
                    src: `${logo}`,
                    alt: '',
                  }}
                />
              </div>
            )}
          </UL>
        </div>
      ) : (
        <div className='loading'></div>
      )}
    </Fragment>
  );
};
export default ChatMessage;