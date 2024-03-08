import React, { Fragment, useContext, useState } from "react";
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
import { HelpCircle, Trash2 } from "react-feather";
import FaqContext from "../../../_helper/Faq";

const Questionss = () => {
  const { faq } = useContext(FaqContext);
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
    setSelectedFaqItem(faq[id]); // Set the selected FAQ item
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

  const cancelDelete = () => {
    // Reset deleteItemId and hide the delete modal
    setDeleteItemId(null);
    setShowDeleteModal(false);
  };

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
            {faq &&
              faq.map((faqItem, i) => (
                <Fragment key={i}>
                  <div className={`${i !== 0 ? "faq-title" : ""}`}></div>
                  {faqItem.titless.map((item, id) => (
                    <Card key={id}>
                      <CardHeader>
                        <H5 attrH5={{ className: "mb-0" }}>
                          <Btn
                            attrBtn={{
                              color: "link ps-0",
                              onClick: () => handelChange(id),
                            }}
                          >
                            <HelpCircle />
                            {item.title}
                          </Btn>
                          <div
                          onClick={ () => handleDelete(id)}
                            style={{
                              position: "absolute",
                              right: 0,
                              top: "10px",
                            }}
                          
                          >
                            <Trash2 />
                          </div>
                        </H5>
                      </CardHeader>
                      <Collapse isOpen={isActivity[id]}>
                        <CardBody>
                          <P>{para}</P>
                        </CardBody>
                      </Collapse>
                    </Card>
                  ))}
                </Fragment>
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
