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
} from "reactstrap";
import {
  Breadcrumbs,
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
      <Row>
        <Col xl="8" className="box-col-8 xl-60 ">
          <div className="comment-box">
            <Comments />
          </div>
        </Col>
        {/* <Col className="pt-3" xl="4">
     
          <Button color="primary" onClick={handleDrawerOpen}>
            Give Feedback
          </Button>
          {isDrawerOpen && (
            <FeedbackDrawer
              isOpen={isDrawerOpen}
              onClose={handleDrawerClose}
              value={value}
              onChange={handleChange}
            />
          )}
        </Col> */}
      </Row>
    </Fragment>
  );
};

export default Queries;
const FeedbackDrawer = ({ isOpen, onClose, value, onChange }) => {
  const handleSubmit = () => {
    console.log("Feedback submitted:", value);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} toggle={onClose} className="feedback-drawer-modal">
      <ModalHeader toggle={onClose}>Give Feedback</ModalHeader>
      <ModalBody>
        <div className="drawer-body">
          <h4>Query</h4>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          <h4>Write Your Feedback</h4>
          <SimpleMdeReact
            options={{
              spellChecker: false,
            }}
            onChange={onChange}
            value={value}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button color="secondary" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};
const Comments = () => {
  const [modal, setModal] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFeedbackChange = (value) => {
    setFeedbackValue(value);
  };

  return (
    <Fragment>
      <H4>Queries</H4>
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
              <Button color="primary" onClick={toggleModal}>
                Give Feedback
              </Button>
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
      <FeedbackDrawer
        isOpen={modal}
        onClose={toggleModal}
        value={feedbackValue}
        onChange={handleFeedbackChange}
      />
    </Fragment>
  );
};
