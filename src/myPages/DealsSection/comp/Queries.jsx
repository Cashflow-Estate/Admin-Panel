import React, { Fragment, useState, useRef, useEffect } from "react";
import { Button, Col, Media, Row, InputGroup, Form, Input } from "reactstrap";
import { Breadcrumbs, H6, Image, P, UL, LI, Btn } from "../../../AbstractElements";
import SimpleMdeReact from "react-simplemde-editor";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { EditorChange } from 'quill';
const Queries = () => {
  const commentContainerRef = useRef(null);

  const handleSendComment = (comment) => {
    if (commentContainerRef.current) {
      // Implement logic to append the new comment to the existing comments
      console.log("Sending comment:", comment);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    if (commentContainerRef.current) {
      commentContainerRef.current.scrollTop = commentContainerRef.current.scrollHeight;
    }
  };
  const [value, setValue] = useState("");
  const handelChange = (e) => {
    setValue(e);
  };
  const handleChange = (content,delta, source, editor) => {
    // Handle the change event
  };
  return (
    <div style={{overflow: "hidden"}}> {/* Add this container */}
      <Fragment>
        <Breadcrumbs
          mainTitle="Inquiries"
          parent="Deals Queries"
          title="Master City"
        />
        <Row>
          <Col xl="12" className="box-col-8 xl-60">
            <div className="comment-box" ref={commentContainerRef}>
              <Comments />
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <div>
              <ReactQuill
                id="editor_container"
                theme="snow"
                modules={{
                  toolbar: [
                    [{ 'header': [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block'],
                  ],
                }}
                formats={['header', 'bold', 'italic', 'underline', 'image', 'code-block']}
                value={''} // Pass the initial value here
                onChange={handleChange}
                style={{ height: '200px' }} // Adjust the height as needed
              />
            </div>
          </Col>
        </Row>
        <Btn
          attrBtn={{ color: "success", className: "m-r-15", type: "submit" }}
        >
          Send
        </Btn>
   
    </Fragment>
    </div>
  );
};

export default Queries;



const Comments = () => {
  const commentContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    if (commentContainerRef.current) {
      commentContainerRef.current.scrollTop =
        commentContainerRef.current.scrollHeight;
    }
  };


  return (
    <div
      ref={commentContainerRef}
      style={{ maxHeight: '40vh', overflowY: 'auto', overflowX: 'hidden' }} // Set max height and add vertical scrollbar only
    >
      <UL attrUL={{ className: "simple-list" }}>
        <LI attrLI={{ className: "border-0 bg-transparent" }}>
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
            </Media>
          </Media>
        </LI>
        <LI attrLI={{ className: "border-0 bg-transparent" }}>
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
        <LI attrLI={{ className: "border-0 bg-transparent" }}>
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
            </Media>
          </Media>
        </LI>
        <LI attrLI={{ className: "border-0 bg-transparent" }}>
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
        <LI attrLI={{ className: "border-0 bg-transparent" }}>
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
            </Media>
          </Media>
        </LI>
        <LI attrLI={{ className: "border-0 bg-transparent" }}>
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
        <LI attrLI={{ className: "border-0 bg-transparent" }}>
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
            </Media>
          </Media>
        </LI>
        <LI attrLI={{ className: "border-0 bg-transparent" }}>
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
  );
};

