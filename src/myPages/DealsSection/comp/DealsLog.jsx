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
import { Container, Row, Col, InputGroup, FormGroup, Button } from "react-bootstrap";
import imageLg from "../../../../src/assets/cashflowimg/house-banner.png";
import {
  Breadcrumbs,
  Btn,
  H3,
  H6,
  Image,
  LI,
  P,
  UL,
} from "../../../AbstractElements";
import {
  Card,
  CardBody,
  Input,
  Label,
  Media,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Availability, Brand } from "../../../Constant";
import CustomizerContext from "../../../_helper/Customizer";
import ProductContext from "../../../_helper/Ecommerce/Product";
import Slider from "react-slick";
import iimmgg from "../../../assets/cashflowimg/apartments/a1lg.png";
import video from "../../../assets/CashflowLogos/video.mp4";
import ChatAppContext from "../../../_helper/Chat";
import {
  AlignJustify,
  Headphones,
  Paperclip,
  Search,
  Video,
} from "react-feather";
import smiley from "../../../assets/images/smiley.png";
import Dropzone from "react-dropzone-uploader";




export const Chatting = () => {
  const deals = [
    {
      id: 1,
      title: 'Deal 1',
      description: 'This is the first deal',
      contractDocs: ['Contract Document 1', 'Contract Document 2'],
      logs: [
        'Deal initiated by Admin',
        'Customer requested more details',
        'Admin provided additional information',
        'Deal finalized'
      ]
    },
    {
      id: 2,
      title: 'Deal 2',
      description: 'This is the second deal',
      contractDocs: ['Contract Document 3'],
      logs: [
        'Deal initiated by Customer',
        'Admin reviewed the deal',
        'Negotiation started',
        'Contract documents sent to customer',
        'Deal finalized'
      ]
    }
  ];

  return (
    <Fragment>
      <Row>
        {deals.map((deal) => (
          <Col key={deal.id} md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{deal.title}</Card.Title>
                <Card.Text>{deal.description}</Card.Text>
                <h5>Logs:</h5>
                <ul>
                  {deal.logs.map((log, index) => (
                    <li key={index}>{log}</li>
                  ))}
                </ul>
                <h5>Contract Documents:</h5>
                <ul>
                  {deal.contractDocs.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
                <Button variant="primary">View Deal</Button> {/* Corrected Button component */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}



