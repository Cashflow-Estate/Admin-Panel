import React, { Fragment, useState } from "react";
import {
  Button,
  Col,
  Row,
  Modal,
  Table,
} from "react-bootstrap";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Breadcrumbs } from "../../AbstractElements";

const WebsiteInquiry = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Website Inquiries" parent="Inquiry" title="Website" />

      <Row>
        <Col >
            <Comments />
        </Col>
      </Row>
    </Fragment>
  );
};

export default WebsiteInquiry;

const FeedbackDrawer = ({ isOpen, onClose, value, onChange, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit(value);
    onClose();
  };

  return (
    
    <Modal show={isOpen} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Give Feedback</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <h4>Query</h4>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        <h4>Write Your Feedback</h4>
          <SimpleMDE
            onChange={onChange}
            value={value}
          />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="warning" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Comments = () => {
  const [modal, setModal] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [InquiryData] = useState([
    { name: "JolioMark", email: "joliomark@example.com", time: "10:00 AM", query: "Lorem Ipsum Query 1" },
    { name: "JohnDoe", email: "johndoe@example.com", time: "11:30 AM", query: "Lorem Ipsum Query 2" },
    { name: "JaneDoe", email: "janedoe@example.com", time: "1:45 PM", query: "Lorem Ipsum Query 3" },
  ]);

  const toggleModal = (query) => {
    setSelectedQuery(query);
    setModal(!modal);
  };

  const handleFeedbackChange = (value) => {
    setFeedbackValue(value);
  };

  const handleFeedbackSubmit = (value) => {
    console.log("Feedback submitted:", value);
    // Perform submission logic here
  };

  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Time</th>
            <th>View Query</th>
          </tr>
        </thead>
        <tbody>
          {InquiryData.map((query, index) => (
            <tr key={index}>
              <td>{query.name}</td>
              <td>{query.email}</td>
              <td>{query.time}</td>
              <td>
                <Button variant="primary" onClick={() => toggleModal(query.query)}>
                  View Query
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <FeedbackDrawer
        isOpen={modal}
        onClose={() => setModal(false)}
        value={feedbackValue}
        onChange={handleFeedbackChange}
        onSubmit={handleFeedbackSubmit}
      />
    </Fragment>
  );
};


// import React, { useState } from 'react';
// import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
// import { Breadcrumbs } from '../../AbstractElements';
// import DealsInquiryPagination from '../DealsSection/comp/DealsInquiryPagination';

// const WebsiteInquiry = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [InquiryPerPage] = useState(4); // Number of Inquiry per page
//     const [expandedInquiry, setExpandedInquiry] = useState([]);

//     const Inquiry = [
//         { id: 1, title: "Query Title 1", name: "Syed M.Abid", description: "This is a brief description of the query or question. You can provide more details here if needed. This is a brief description of the query or question. You can provide more details here if needed. brief description of the query or question. You can provide more details here if needed. This is a brief description of the query or question. description of the query or question. You can provide more details here if needed. This is a brief description of the query or question. You can provide more details here if needed. brief description of the query or question. You can provide more details here if needed. This is a brief description of the query or question." },
//         { id: 2, title: "Query Title 2", name: "John Doe", description: "This is another query description." },
//         { id: 3, title: "Query Title 3", name: "Jane Smith", description: "Yet another query description." },
//         { id: 4, title: "Query Title 4", name: "Someone Else", description: "Yet another query description." },
//         // Add more Inquiry as needed
//     ];

//     // Pagination logic
//     const indexOfLastQuery = currentPage * InquiryPerPage;
//     const indexOfFirstQuery = indexOfLastQuery - InquiryPerPage;
//     const currentInquiry = Inquiry.slice(indexOfFirstQuery, indexOfLastQuery);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const handleExpand = (index) => {
//         setExpandedInquiry(prevState => {
//             const newExpandedInquiry = [...prevState];
//             newExpandedInquiry[index] = !newExpandedInquiry[index]; // Toggle the expanded state
//             return newExpandedInquiry;
//         });
//     };

//     return (
//         <div>
//             <Breadcrumbs mainTitle="Inquiry" parent="Inquiry" title="Website Inquiry" />
//             <Container fluid>
//                 <Row>
//                     {currentInquiry.map((query, index) => (
//                         <Col key={query.id} sm="6">
//                             <div style={{ marginBottom: '20px', border: '1px solid green', borderRadius: '5px', height: '100%' }}>
//                                 <Card style={{ height: '100%' }}>
//                                     <CardBody style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//                                         <CardTitle tag="h4">{query.title}</CardTitle>
//                                         <CardText tag="h6">Name: {query.name}</CardText>
//                                         <CardText style={{ flex: 1, overflowY: 'auto' }}>
//                                             {query.description}
//                                         </CardText>
//                                         {/* Add a button to toggle the text expansion */}
//                                         <Button onClick={() => handleExpand(index)}>
//                                             {expandedInquiry[index] ? "Read Less" : "Read More"}
//                                         </Button>
//                                     </CardBody>
//                                 </Card>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//             <div style={{ position: 'absolute', bottom: '-15px', right: '40px' }}>
//                 <DealsInquiryPagination // Update component name
//                     InquiryPerPage={InquiryPerPage}
//                     totalInquiry={Inquiry.length}
//                     paginate={paginate}
//                     currentPage={currentPage}
//                 />
//             </div>
//         </div>
//     );
// };

// export default WebsiteInquiry;
