import React, { Fragment, useState } from "react";
import {
  Button,
  Col,
  Media,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
} from "reactstrap";
import {
  Breadcrumbs,
  Btn,
  H4,
  H6,
  Image,
  LI,
  P,
  UL,
} from "../../../AbstractElements";
import SimpleMdeReact from "react-simplemde-editor";

const Queries = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleChange = (e) => {
    setValue(e);
  };

  return (
<Fragment>
  <Breadcrumbs mainTitle="Inquiries" parent="Deals Queries" title="Master City" />

  <Row>
    <Col xl="12" className="box-col-8"> 
      <div className="comment-box">
        <Comments />
      </div>
    </Col>
    {/* <Col xl="4"> */}
      <Send/>
    {/* </Col> */}
  </Row>
</Fragment>

  );
};

export default Queries;

const Comments = () => {


  return (
    <Fragment>
     <div style={{ maxHeight: "450px", overflowY: "auto" }}> {/* Set max height and enable vertical scrolling */}
        <UL attrUL={{ className: "simple-list" }}>
        <LI attrLI={{ className: "border-0  bg-transparent" }}>
          <Media className="align-self-center">
            <Image
              attrImage={{
                className: "align-self-center",
                src: `${require("../../../assets/images/user/1.jpg")}`,
                alt: "",
              }}
            />
            <Media body>
              <Row>
                <Col md="4" className="xl-100">
                  <H6 attrH6={{ className: "mt-0" }}>
                    {"JolioMark"}
                    <span> {"( Designer )"}</span>
                  </H6>
                </Col>
              </Row>
              <P>
                {
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                }
              </P>
              {/* <Button color="primary" onClick={toggleModal}>
                Give Feedback
              </Button> */}
            </Media>
          </Media>
        </LI>
        <LI attrLI={{ className: "border-0  bg-transparent" }}>
          <UL>
            <LI attrLI={{ className: "border-0 " }}>
              <Media>
                <Image
                  attrImage={{
                    className: "align-self-center",
                    src: `${require("../../../assets/images/blog/9.jpg")}`,
                    alt: "",
                  }}
                />
                <Media body>
                  <Row>
                    <Col xl="12">
                      <H6 attrH6={{ className: "mt-0" }}>{"Admin"}</H6>
                    </Col>
                  </Row>
                  <P>
                    {
                      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                    }
                  </P>
                </Media>
              </Media>
            </LI>
          </UL>
        </LI>
        <LI attrLI={{ className: "border-0  bg-transparent" }}>
          <Media className="align-self-center">
            <Image
              attrImage={{
                className: "align-self-center",
                src: `${require("../../../assets/images/user/1.jpg")}`,
                alt: "",
              }}
            />
            <Media body>
              <Row>
                <Col md="4" className="xl-100">
                  <H6 attrH6={{ className: "mt-0" }}>
                    {"JolioMark"}
                    <span> {"( Designer )"}</span>
                  </H6>
                </Col>
              </Row>
              <P>
                {
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                }
              </P>
              {/* <Button color="primary" onClick={toggleModal}>
                Give Feedback
              </Button> */}
            </Media>
          </Media>
        </LI>
        <LI attrLI={{ className: "border-0  bg-transparent" }}>
          <UL>
            <LI attrLI={{ className: "border-0 " }}>
              <Media>
                <Image
                  attrImage={{
                    className: "align-self-center",
                    src: `${require("../../../assets/images/blog/9.jpg")}`,
                    alt: "",
                  }}
                />
                <Media body>
                  <Row>
                    <Col xl="12">
                      <H6 attrH6={{ className: "mt-0" }}>{"Admin"}</H6>
                    </Col>
                  </Row>
                  <P>
                    {
                      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                    }
                  </P>
                </Media>
              </Media>
            </LI>
          </UL>
        </LI>
        <LI attrLI={{ className: "border-0  bg-transparent" }}>
          <Media className="align-self-center">
            <Image
              attrImage={{
                className: "align-self-center",
                src: `${require("../../../assets/images/user/1.jpg")}`,
                alt: "",
              }}
            />
            <Media body>
              <Row>
                <Col md="4" className="xl-100">
                  <H6 attrH6={{ className: "mt-0" }}>
                    {"JolioMark"}
                    <span> {"( Designer )"}</span>
                  </H6>
                </Col>
              </Row>
              <P>
                {
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                }
              </P>
              {/* <Button color="primary" onClick={toggleModal}>
                Give Feedback
              </Button> */}
            </Media>
          </Media>
        </LI>
        <LI attrLI={{ className: "border-0  bg-transparent" }}>
          <UL>
            <LI attrLI={{ className: "border-0 " }}>
              <Media>
                <Image
                  attrImage={{
                    className: "align-self-center",
                    src: `${require("../../../assets/images/blog/9.jpg")}`,
                    alt: "",
                  }}
                />
                <Media body>
                  <Row>
                    <Col xl="12">
                      <H6 attrH6={{ className: "mt-0" }}>{"Admin"}</H6>
                    </Col>
                  </Row>
                  <P>
                    {
                      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                    }
                  </P>
                </Media>
              </Media>
            </LI>
          </UL>
        </LI>
       
   
    
      </UL>
      </div>

    </Fragment>
  );
};
const Send = () => {
  return (
   <div className="chat-message clearfix">
      <Row>
        <Col xl="12" className="d-flex">
          <div style={{ position: "relative", width: "100%" }}>
            <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <InputGroup className="text-box">
                <textarea
                  className="form-control input-txt-bx"
                  placeholder="Type a message......"
                  rows={4} // Adjust the number of rows as needed
                />
                <Btn
                  attrBtn={{
                    color: "primary"
                    // , onClick: () => handleMessagePress('send')
                  }}
                >
                  Send
                </Btn>
              </InputGroup>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};