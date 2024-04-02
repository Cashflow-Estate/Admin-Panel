import React from "react";
import { Card, CardBody, CardTitle, CardText, Container } from "reactstrap";
import { Breadcrumbs, Image } from "../../AbstractElements";
import { Link } from "react-router-dom";
import SvgIcon from "../../Components/Common/Component/SvgIcon";

// Dummy complaint data
const complaints = [
  {
    id: 1,
    dealTitle: "Property at 123 Main Street",
    dealComplaint:
      "Tenant has failed to pay rent for the past three months despite multiple reminders and notices. The property is being damaged, and there have been reports of disturbances from neighbors.",
  },
  {
    id: 2,
    dealTitle: "Apartment Complex at Oakwood Gardens",
    dealComplaint:
      "Noise complaints from multiple tenants regarding Unit 205. The tenant is consistently violating noise ordinances, disturbing other residents, and causing a nuisance.",
  },
]

// ComplaintCard component to display individual complaint
const ComplaintCard = ({ dealTitle, dealComplaint }) => (
  <Card className="mb-3">
    <CardBody>
        <div className="social-img">
          <Image
            attrImage={{
              src: require(`../../assets/images/user/3.png`),
              alt: "profile",
            }}
          />
        </div>
      
      <CardTitle tag="h5">
        <Link to="/deals/1">{dealTitle}</Link>
      </CardTitle>
      <CardText>{dealComplaint}</CardText>
    </CardBody>
  </Card>
);

// Main component to display all complaint cards
const Evictions = () => (
  <Container>
    <Breadcrumbs mainTitle={"Evictions"} parent="Deals" title={"Evictions"} />

    {complaints.map((complaint) => (
      <ComplaintCard
        key={complaint.id}
        dealTitle={complaint.dealTitle}
        dealComplaint={complaint.dealComplaint}
      />
    ))}
  </Container>
);

export default Evictions;
