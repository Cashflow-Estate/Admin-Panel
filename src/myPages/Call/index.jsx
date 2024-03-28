import React, { Fragment, useState } from "react";
import {
  Card,
  CardBody,
  Form,
  Input,
  Row,
  Col,
  FormGroup,
  Button,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Breadcrumbs, Btn, H6 } from "../../AbstractElements";
import SimpleMdeReact from "react-simplemde-editor";
import user3 from "../../assets/images/user/1.jpg";

const Call = () => {
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const supportData = [
    {
      id: "1",
      name: "Alice Smith",
      image: user3, // Placeholder for image
      position: "System Architect",
      client: "Customers",
      investment: "$320,800",
      location: "Edinburgh",
      skill: null, // Placeholder for skill
      extn: 5421,
      email: "twst@gmail.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "2",
      name: "John",
      image: user3, // Placeholder for image
      position: "System Architect",
      client: "Customers",
      investment: "$320,800",
      location: "Edinburgh",
      skill: null, // Placeholder for skill
      extn: 5421,
      email: "t.nixon@datatables.net",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "3",
      name: "Luca Smith",
      image: user3, // Placeholder for image
      position: "Junior Technical Author",
      client: "Customers",
      investment: "$86,000",
      location: "San Francisco",
      skill: null, // Placeholder for skill
      extn: 1562,
      email: "a.cox@datatables.net",
      packageName: "basic",
      blockUser: true,
    },
    {
      id: "4",
      name: "ABid",
      image: user3, // Placeholder for image
      position: "Senior Developer",
      client: "Free",
      investment: "$100,000",
      location: "New York",
      skill: null, // Placeholder for skill
      extn: 1234,
      email: "john.doe@example.com",
      packageName: "premium",
      blockUser: false,
    },
    // Additional data entries
    {
      id: "5",
      name: "Emily Watson",
      image: user3, // Placeholder for image
      position: "UX Designer",
      client: "Members",
      investment: "$250,000",
      location: "London",
      skill: null, // Placeholder for skill
      extn: 7890,
      email: "emily.watson@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "6",
      name: "Michael Brown",
      image: user3, // Placeholder for image
      position: "Project Manager",
      client: "Customers",
      investment: "$420,000",
      location: "Los Angeles",
      skill: null, // Placeholder for skill
      extn: 2468,
      email: "m.brown@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "7",
      name: "Sophia Lee",
      image: user3, // Placeholder for image
      position: "Software Engineer",
      client: "Members",
      investment: "$180,000",
      location: "Chicago",
      skill: null, // Placeholder for skill
      extn: 1357,
      email: "s.lee@example.com",
      packageName: "basic",
      blockUser: false,
    },
    {
      id: "8",
      name: "David Green",
      image: user3, // Placeholder for image
      position: "Data Analyst",
      client: "Free",
      investment: "$150,000",
      location: "Houston",
      skill: null, // Placeholder for skill
      extn: 9753,
      email: "d.green@example.com",
      packageName: "premium",
      blockUser: true,
    },
    {
      id: "9",
      name: "Emma Johnson",
      image: user3, // Placeholder for image
      position: "Marketing Manager",
      client: "Customers",
      investment: "$300,000",
      location: "Toronto",
      skill: null, // Placeholder for skill
      extn: 3579,
      email: "emma.johnson@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "10",
      name: "Daniel Kim",
      image: user3, // Placeholder for image
      position: "Senior Software Developer",
      client: "Customers",
      investment: "$280,000",
      location: "Seoul",
      skill: null, // Placeholder for skill
      extn: 8642,
      email: "d.kim@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "11",
      name: "Olivia Chen",
      image: user3, // Placeholder for image
      position: "UI/UX Designer",
      client: "Members",
      investment: "$200,000",
      location: "Tokyo",
      skill: null, // Placeholder for skill
      extn: 1593,
      email: "o.chen@example.com",
      packageName: "basic",
      blockUser: false,
    },
    {
      id: "12",
      name: "Samuel Brown",
      image: user3, // Placeholder for image
      position: "IT Support Specialist",
      client: "Free",
      investment: "$120,000",
      location: "Sydney",
      skill: null, // Placeholder for skill
      extn: 7531,
      email: "s.brown@example.com",
      packageName: "basic",
      blockUser: true,
    },
    {
      id: "13",
      name: "Grace Lee",
      image: user3, // Placeholder for image
      position: "Frontend Developer",
      client: "Customers",
      investment: "$220,000",
      location: "San Francisco",
      skill: null, // Placeholder for skill
      extn: 2468,
      email: "grace.lee@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "14",
      name: "William Johnson",
      image: user3, // Placeholder for image
      position: "Software Engineer",
      client: "Customers",
      investment: "$320,000",
      location: "New York",
      skill: null, // Placeholder for skill
      extn: 3579,
      email: "w.johnson@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "15",
      name: "Ethan Wilson",
      image: user3, // Placeholder for image
      position: "Database Administrator",
      client: "Customers",
      investment: "$280,000",
      location: "Los Angeles",
      skill: null, // Placeholder for skill
      extn: 8642,
      email: "e.wilson@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "16",
      name: "Nora Miller",
      image: user3, // Placeholder for image
      position: "UI/UX Designer",
      client: "Customers",
      investment: "$180,000",
      location: "Chicago",
      skill: null, // Placeholder for skill
      extn: 1593,
      email: "n.miller@example.com",
      packageName: "basic",
      blockUser: false,
    },
    {
      id: "17",
      name: "Liam Martinez",
      image: user3, // Placeholder for image
      position: "Project Manager",
      client: "Free",
      investment: "$150,000",
      location: "Houston",
      skill: null, // Placeholder for skill
      extn: 7531,
      email: "liam.martinez@example.com",
      packageName: "basic",
      blockUser: true,
    },
    {
      id: "18",
      name: "Chloe Garcia",
      image: user3, // Placeholder for image
      position: "Marketing Specialist",
      client: "Customers",
      investment: "$300,000",
      location: "Miami",
      skill: null, // Placeholder for skill
      extn: 9512,
      email: "chloe.garcia@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "19",
      name: "Alexander Taylor",
      image: user3, // Placeholder for image
      position: "System Analyst",
      client: "Customers",
      investment: "$250,000",
      location: "Dallas",
      skill: null, // Placeholder for skill
      extn: 1478,
      email: "a.taylor@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "20",
      name: "Madison Clark",
      image: user3, // Placeholder for image
      position: "Quality Assurance Analyst",
      client: "Customers",
      investment: "$280,000",
      location: "Boston",
      skill: null, // Placeholder for skill
      extn: 3698,
      email: "madison.clark@example.com",
      packageName: "basic",
      blockUser: false,
    },
    {
      id: "21",
      name: "Oliver White",
      image: user3, // Placeholder for image
      position: "Network Administrator",
      client: "Free",
      investment: "$120,000",
      location: "Seattle",
      skill: null, // Placeholder for skill
      extn: 7854,
      email: "oliver.white@example.com",
      packageName: "basic",
      blockUser: true,
    },
    {
      id: "22",
      name: "Ava Hall",
      image: user3, // Placeholder for image
      position: "Technical Writer",
      client: "Customers",
      investment: "$220,000",
      location: "San Diego",
      skill: null, // Placeholder for skill
      extn: 2369,
      email: "ava.hall@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "23",
      name: "Noah Martinez",
      image: user3, // Placeholder for image
      position: "Software Developer",
      client: "Customers",
      investment: "$320,000",
      location: "Austin",
      skill: null, // Placeholder for skill
      extn: 4152,
      email: "noah.martinez@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "24",
      name: "Isabella Rodriguez",
      image: user3, // Placeholder for image
      position: "Business Analyst",
      client: "Customers",
      investment: "$180,000",
      location: "Denver",
      skill: null, // Placeholder for skill
      extn: 3698,
      email: "isabella.rodriguez@example.com",
      packageName: "basic",
      blockUser: false,
    },
    {
      id: "25",
      name: "James Lopez",
      image: user3, // Placeholder for image
      position: "Technical Support Engineer",
      client: "Free",
      investment: "$150,000",
      location: "Phoenix",
      skill: null, // Placeholder for skill
      extn: 7854,
      email: "james.lopez@example.com",
      packageName: "basic",
      blockUser: true,
    },
    {
      id: "26",
      name: "Mia Perez",
      image: user3, // Placeholder for image
      position: "Systems Administrator",
      client: "Customers",
      investment: "$300,000",
      location: "Philadelphia",
      skill: null, // Placeholder for skill
      extn: 2154,
      email: "mia.perez@example.com",
      packageName: "premium",
      blockUser: false,
    },
    {
      id: "27",
      name: "Benjamin Sanchez",
      image: user3, // Placeholder for image
      position: "UI Designer",
      client: "Customers",
      investment: "$280,000",
      location: "Portland",
      skill: null, // Placeholder for skill
      extn: 9632,
      email: "benjamin.sanchez@example.com",
      packageName: "basic",
      blockUser: false,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSendToSelect = (customer) => {
    setSendTo(customer.name);
    setDropdownOpen(true); 
  };
  


  return (
    <Fragment>
      <Breadcrumbs mainTitle="Call" parent="Call" title="Schedule a Meet" />

      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
          <Row>
              <Col md="4">
                <FormGroup>
                  <Label for="sendTo">Send To:</Label>
                  <div>
                    <Btn
                      attrBtn={{ color: "success", className: "dropbtn" }}
                      onClick={toggleDropdown}
                    >
                      {sendTo ? sendTo : "Select Customer"}{" "}
                      <span>
                        <i className="icofont icofont-arrow-down"></i>
                      </span>
                    </Btn>
                    <Dropdown isOpen={dropdownOpen}  toggle={toggleDropdown}>
                      <DropdownMenu>
                        {supportData
                          .filter((customer) => customer.client === "Customers")
                          .map((customer) => (
                            <DropdownItem
                              key={customer.id}
                              onClick={() => handleSendToSelect(customer)}
                            >
                              {`${customer.name} | ${customer.email}`}
                            </DropdownItem>
                          ))}
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="4">
                <FormGroup>
                  <H6 for="time">Date</H6>
                  <Input
                    type="date"
                    id="date"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <H6 for="time">Time</H6>
                  <Input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="8">
                <FormGroup>
                  <H6>{"Subject"}</H6>
                  <SimpleMdeReact
                    id="editor_container"
                    options={{
                      spellChecker: false,
                    }}
                    onChange={handleDescriptionChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button color="success" type="submit">
                  Schedule Call
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default Call;
const CustomDropdownItem = ({ children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <DropdownItem onClick={handleClick}>
      {children}
    </DropdownItem>
  );
};

