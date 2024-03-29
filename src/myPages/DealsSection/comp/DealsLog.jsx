import React, {
    Fragment,
    useContext,
    useEffect,
    useRef,
    useState,
  } from "react";
  import { useLocation, useNavigate, useParams } from "react-router-dom";
  import { BiBed, BiBath, BiArea } from "react-icons/bi";
  import { CgUnavailable } from "react-icons/cg";
  import { Link } from "react-router-dom";
  import { Container, Row, Col, InputGroup, FormGroup } from "react-bootstrap";
  import imageLg from "../../../../src/assets/cashflowimg/house-banner.png";
  import { Breadcrumbs, Btn, H3, H6, Image, LI, P, UL } from "../../../AbstractElements";
  import { Card, CardBody, Input, Label, Media, Nav, NavItem, NavLink } from "reactstrap";
  import { Availability, Brand } from "../../../Constant";
  import CustomizerContext from "../../../_helper/Customizer";
  import ProductContext from "../../../_helper/Ecommerce/Product";
  import Slider from "react-slick";
  import iimmgg from "../../../assets/cashflowimg/apartments/a1lg.png";
  import video from "../../../assets/CashflowLogos/video.mp4";
  import ChatAppContext from '../../../_helper/Chat';
  import { AlignJustify, Headphones, Paperclip, Search, Video } from 'react-feather';
  import smiley from "../../../assets/images/smiley.png"
import Dropzone from "react-dropzone-uploader";
export const Chatting = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    console.log("🚀 ~ Chatting ~ uploadedFiles:", uploadedFiles)
  
    const handleFilesUploaded = (files) => {
      console.log("🚀 ~ handleFilesUploaded ~ files:", files)
      setUploadedFiles(files);
    };
  
    return (
      <Fragment>
        <Row className='chat-box'>
          <Col className='pe-0 chat-right-aside'>
            <div className='chat'>
              <ChatHeader />
              <ChatMessage uploadedFiles={uploadedFiles} />
              <SendChat  />
            </div>
          </Col>
          <Row className='pe-0 chat-right-aside'>
            <div className='chat'>
              <UploadProjectFileClass onFilesUploaded={handleFilesUploaded} />
            </div>
          </Row>
        </Row>
      </Fragment>
    );
  };
   export const ChatMessage = ({ uploadedFiles }) => {
    const { allMemberss, chatss, selectedUserr, currentUserr, fetchChatMemberAsyn, fetchChatAsyn } = useContext(ChatAppContext);
    var images = require.context('../../../assets/images', true);
  
    useEffect(() => {
      fetchChatMemberAsyn();
      fetchChatAsyn();
    }, [allMemberss.length === 0, chatss.length === 0]);
  
    const dynamicImage = (image) => {
      return images(`./${image}`);
    };
  
    const selectedChat = allMemberss && chatss && selectedUserr ? chatss.find((x) => x.users.includes(currentUserr.id) && x.users.includes(selectedUserr.id)) : null;
    var activeChat = 0;
    // eslint-disable-next-line
    if (selectedUserr != null) activeChat = selectedUserr.id;
  
    const filelist = uploadedFiles
   
    .map((data, i) => {
      console.log("🚀 ~ .map ~ data:", data.file)
      return (
        <LI attrLI={{ className: 'file-box' }} key={i}>
          <div className='file-top'>
            <i className="fa fa-file-text-o txt-info"></i>
            <i className='fa fa-ellipsis-v f-14 ellips'></i>
          </div>
          <div className='file-bottom'>
            <H6>{data.file.name}</H6>
            <P attrPara={{ className: 'mb-0 mb-1' }}>{"07:40 am"}</P>
          
          </div>
        </LI>
      );
    });
  
    return (
      <Fragment>
        {allMemberss && chatss && selectedUserr ? (
          <div className='chat-history chat-msg-box custom-scrollbar'>
            <UL attrUL={{ className: 'simple-list' }}>
              {selectedChat && selectedChat.messages.length > 0 ? (
                selectedChat.messages.map((item, index) => {
                  const participators = allMemberss.find((x) => x.id === item.sender);
                  return (
                    <Fragment key={index}>
                      <LI attrLI={{ className: 'clearfix border-0' }}>
                        <div className={`message  ${item.sender !== currentUserr.id ? 'my-message' : 'other-message pull-right '}`}>
                          <Image
                            attrImage={{
                              src: `${dynamicImage(participators.thumb)}`,
                              className: `rounded-circle ${item.sender !== currentUserr.id ? 'float-start' : 'float-end'} chat-user-img img-30`,
                              alt: '',
                            }}
                          />
                          <div className='message-data text-end'>
                            <span className='message-data-time'>{item.time}</span>
                          </div>
                          {item.text}
                        </div>
                      </LI>
               
                    </Fragment>
                  );
                })
              ) : (
                <div>
                  <Image
                    attrImage={{
                      className: 'img-fluid',
                      src: `${iimmgg}`,
                      alt: 'start conversion ',
                    }}
                  />
                </div>
              )}
            </UL>
            {filelist}
          </div>
        ) : (
          <div className='loading'></div>
        )}
      </Fragment>
    );
  };
  export const ChatHeader = () => {
    const { selectedUserr, setMenuToggle, menuToggle } = useContext(ChatAppContext);
    const location = useLocation();
  
    const chatMenuToggle = () => {
      setMenuToggle(!menuToggle);
    };
    return (
      <Fragment>
        <div className='chat-header clearfix'>
          <Image
            attrImage={{
              className: 'rounded-circle',
              src: `${iimmgg}`,
              alt: '',
            }}
          />
          <div className='media-body'>
            <div className='about'>
              <div className='name'>
                {selectedUserr ? selectedUserr.name : 'Vincent Porter'}
                {location.state3 ? <span className='font-primary f-12'> Typing...</span> : ''}
              </div>
              <div className='status digits'>{selectedUserr ? selectedUserr.lastSeenDate : '5 May, 5:30 PM'}</div>
            </div>
          </div>
          <UL attrUL={{ className: 'simple-list list-inline float-start float-sm-end chat-menu-icons d-flex flex-row' }}>
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
          </UL>
        </div>
      </Fragment>
    );
  };
  export const SendChat = () => {
  
    const [messageInput, setMessageInput] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };
    const {
        chatss,
        selectedUserr,
        currentUserr,
        sendMessageAsyn,
        replyByUserAsyn,
    } = useContext(ChatAppContext);
  
    const addEmoji = (emoji) => {
        const text = `${messageInput}${emoji.native}`;
        setShowEmojiPicker(false);
        setMessageInput(text);
    };
    const handleMessageChange = (message) => {
        setMessageInput(message);
    };
  
    const handleMessagePress = (e) => {
        if (e.key === 'Enter' || e === 'send') {
            var container = document.querySelector('.chat-history');
            setTimeout(function () {
                container.scrollBy({ top: 200, behavior: 'smooth' });
            }, 310);
  
            let currentUserId = currentUserr.id;
            let selectedUserId = selectedUserr.id;
            let selectedUserName = selectedUserr.name;
  
            if (messageInput.length > 0) {
                sendMessageAsyn(currentUserId, selectedUserId, messageInput, chatss);
                setMessageInput('');
                setTimeout(() => {
                    const replyMessage =
                        'Hey This is ' +
                        selectedUserName +
                        ', Sorry I busy right now, I will text you later';
                    if (selectedUserr.online === true)
                        document.querySelector('.status-circle').classList.add('online');
                    selectedUserr.online = true;
                    replyByUserAsyn(currentUserId, selectedUserId, replyMessage, chatss);
                }, 5000);
            }
        }
    };
    return (
        <div className="chat-message clearfix">
            <Row>
                {/* <div>
                    {showEmojiPicker ? (
                        <Picker set="apple" emojiSize={30} onSelect={addEmoji} />
                    ) : null}
                </div> */}
                <Col xl="12" className="d-flex">
                    <div className="smiley-box bg-primary">
                        <div className="picker" onClick={() => toggleEmojiPicker()}>
                            <Image attrImage={{ src: `${smiley}`, alt: '' }} /></div>
                    </div>
                    <InputGroup className="text-box">
                        <Input
                            type="text"
                            className="form-control input-txt-bx"
                            placeholder="Type a message......"
                            value={messageInput}
                            onKeyPress={(e) => handleMessagePress(e)}
                            onChange={(e) =>
                                handleMessageChange(e.target.value)
                            }
                        />
                        <Btn
                            attrBtn={{
                                color: 'primary'
                                , onClick: () => handleMessagePress('send')
                            }}>
                            Send
                        </Btn>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    );
  };
 
  const UploadProjectFileClass = ({ onFilesUploaded }) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
  
    const getUploadParams = ({ meta }) => {
      return {
        url: 'https://httpbin.org/post',
      };
    };
  
    const handleChangeStatus = ({ meta }, status) => {};
  
    const handleUploadComplete = (files) => {
        setUploadedFiles(files);
        onFilesUploaded(files); // Callback to notify parent component about uploaded files
      };
      
  
    return (
      <Fragment>
        <Row>
          <Col>
            <FormGroup>
              <Label>UploadProjectFile</Label>
              <Dropzone
                className='dropzone dz-clickable'
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                maxFiles={10}
                multiple={false}
                canCancel={false}
                inputContent='Drop A File'
                onSubmit={handleUploadComplete} // Callback triggered when upload is completed
                styles={{
                  dropzone: { width: '100%', height: 150 },
                  dropzoneActive: { borderColor: 'green' },
                }}
              />
            </FormGroup>
          </Col>
        </Row>
      </Fragment>
    );
  };