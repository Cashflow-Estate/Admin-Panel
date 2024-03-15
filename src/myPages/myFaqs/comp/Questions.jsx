import React, { Fragment, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Collapse,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { Btn, H5, P } from "../../../AbstractElements";
import { HelpCircle, Trash2, Edit } from "react-feather";
import { useNavigate } from "react-router";

const Questionss = () => {
  const [isActivity, setIsActivity] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState(null); // To track the item to be deleted
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for showing the delete confirmation modal
  const [selectedFaqItem, setSelectedFaqItem] = useState(null); // State for storing the FAQ item details
  const para =
    "Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Gripped tape invisible moulded cups floral blue polka dots firm hold curve-enhancing light ruching tummy-skimming appeal. ";

  const handelChange = (id) => {
    let collapseCopy = [...isActivity];
    collapseCopy[id] = !collapseCopy[id];
    setIsActivity(collapseCopy);
  };

  const handleDelete = (id) => {
    // Set the item ID to be deleted and show the details modal
    setDeleteItemId(id);
    setSelectedFaqItem(faqs[id]); // Set the selected FAQ item
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Remove the item from isActivity array when confirmed
    const updatedActivity = [...isActivity];
    updatedActivity.splice(deleteItemId, 1);
    setIsActivity(updatedActivity);

    // Implement delete functionality here
    console.log("Delete FAQ item with id:", deleteItemId);

    // Close the delete modal
    setShowDeleteModal(false);
  };
  const history = useNavigate();
  const handleEdit = () => {
    // Navigate to the edit route
    history("/faqs/create");
  };

  const cancelDelete = () => {
    // Reset deleteItemId and hide the delete modal
    setDeleteItemId(null);
    setShowDeleteModal(false);
  };

  const faqs = [
    { id: 1, title: "Integrating WordPress with Your Website?" },
    { id: 2, title: "WordPress Site Maintenance ?" },
    { id: 3, title: "Meta Tags in WordPress ?" },
    { id: 4, title: "Integrating WordPress with Your Website?" },
    { id: 5, title: "WordPress Site Maintenance ?" },
    { id: 6, title: "Meta Tags in WordPress ?" },
    { id: 7, title: "Integrating WordPress with Your Website?" },
    { id: 8, title: "WordPress Site Maintenance ?" },
    { id: 9, title: "Meta Tags in WordPress ?" },
  ];

  return (
    <Fragment>
      <Col lg="12">
        <div className="header-faq">
          <H5 attrH5={{ className: "mb-0" }}>Quick Questions are answered</H5>
        </div>
        <Row
          className="row default-according style-1 faq-accordion"
          id="accordionoc"
        >
          <Col xl="8" lg="6" md="7" className="box-col-8 xl-60">
            {faqs.map((faqItem) => (
              <Card key={faqItem.id}>
                <CardHeader>
                  <H5 attrH5={{ className: "mb-0" }}>
                    <Btn
                      attrBtn={{
                        color: "link ps-0",
                        onClick: () => handelChange(faqItem.id),
                      }}
                    >
                      <HelpCircle />
                      {faqItem.title}
                    </Btn>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        right: 9,
                        top: "10px",
                      }}
                    >
                      <Button
                        color=""
                        onClick={handleEdit}
                        style={{ padding: "0.01rem", marginRight: "0.1rem" }}
                      >
                        <i className="icon-pencil"></i>
                      </Button>
                      <Button
                        onClick={() => handleDelete(faqItem.id)}
                        color=""
                        style={{ padding: "0.25rem", marginRight: "0.5rem" }}
                      >
                        <i className="icon-trash"></i>
                      </Button>
                    </div>
                  </H5>
                </CardHeader>
                <Collapse isOpen={isActivity[faqItem.id]}>
                  <CardBody>
                    <P>{para}</P>
                  </CardBody>
                </Collapse>
              </Card>
            ))}
          </Col>
        </Row>
      </Col>

      {/* Details Modal */}
      <Modal isOpen={showDeleteModal} toggle={cancelDelete}>
        <ModalHeader toggle={cancelDelete}>FAQ Details</ModalHeader>
        <ModalBody>
          {selectedFaqItem && (
            <>
              <h5>{selectedFaqItem.title}</h5>
              <p>{selectedFaqItem.description}</p>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmDelete}>
            Delete
          </Button>
          <Button color="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default Questionss;
