import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H5, H6, UL, LI, P } from "../../../AbstractElements";
import { Dropdown } from "react-bootstrap";
import pdf from "../../../assets/CashflowLogos/PDFF.pdf";

const Logs = () => {
  const LogsData = [
    {
      title: "Property Viewing Scheduled",
      subTitle: "12th March, 2024",
      time: "2 days ago",
      description:
        "A viewing appointment has been scheduled for the property at 123 Main Street.",
      color: "primary",
      customerId: "ABC123",
    },
    {
      title: "Offer Submitted",
      subTitle: "16th March, 2024",
      time: "Today",
      description:
        "An offer has been submitted for the property at 123 Main Street.",
      color: "warning",
      customerId: "ABC123",
    },
    {
      title: "Offer Accepted",
      subTitle: "18th March, 2024",
      time: "12:00 PM",
      description:
        "The offer for the property at 123 Main Street has been accepted.The offer for the property at 123 Main Street has been accepted.The offer for the property at 123 Main Street has been accepted.The offer for the property at 123 Main Street has been accepted.The offer for the property at 123 Main Street has been accepted.",
      color: "success",
      customerId: "ABC123",
    },
    {
      title: "Closing Scheduled",
      subTitle: "20th March, 2024",
      time: "1:30 PM",
      description:
        "The closing date has been scheduled for the property at 123 Main Street.The closing date has been scheduled for the property at 123 Main Street.The closing date has been scheduled for the property at 123 Main Street.The closing date has been scheduled for the property at 123 Main Street.",
      color: "info",
      customerId: "ABC123",
    },
    {
      title: "Contract MOU",
      subTitle: "1st April, 2024",
      time: "Just now",
      description: "Click to view PDF log",
      color: "info",
      pdfLink: pdf,
    },
  ];

  return (
    <Col xxl="12" xl="5" md="6" sm="7" className="notification box-col-6">
      <Card className="height-equal">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <H5 attrH5={{ className: "m-0" }}>Logs</H5>
            <div className="card-header-right-icon">
              {/* Adjust dropdown options as needed */}
              <Dropdown icon={false} options={[]} btn={{ caret: true }} />
            </div>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <UL>
            {LogsData.map((log, i) => (
              <LI key={i} attrLI={{ className: "d-flex" }}>
                {/* You can adjust the dot color based on log status */}
                <div className={`activity-dot-${log.color}`} />
                <div className="w-100 ms-3">
                  <P
                    attrPara={{
                      className: "d-flex justify-content-between mb-2",
                    }}
                  >
                    {/* Adjust the date and time display */}
                    <span className=" date-content light-background">
                      {log.subTitle}
                    </span>

                    <span>{log.time}</span>
                  </P>
                  <H6>
                    {/* Display log title */}
                    {log.title}
                    {/* You can add a notification dot if needed */}
                    {log.notification && <span className="dot-notification" />}
                  </H6>
                  {/* Display log description */}
                  {log.pdfLink ? (
                    
                    <i className={"fa fa-file-text-o txt-info"}>
                      <a
                        href={log.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View PDF
                      </a>
                    </i>
                  ) : (
                    <div
                      className="f-light"
                      style={{ maxHeight: "100px", overflow: "auto" }}
                    >
                      {log.description}
                    </div>
                  )}
                </div>
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Logs;
