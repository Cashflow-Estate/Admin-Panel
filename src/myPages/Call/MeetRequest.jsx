import React, { Fragment } from 'react';
import { Breadcrumbs, H5, H6, LI, UL, Btn } from '../../AbstractElements';
import SvgIcon from '../../Components/Common/Component/SvgIcon';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import { useNavigate } from 'react-router';

const MeetRequests = () => {
    const history = useNavigate();

    const handleMeetRequestClick = () => {
        history("/meet-requests");
    }

    return (
        <Fragment>
            <Breadcrumbs mainTitle="Meet Requests" parent="Call" title="Incoming Requests" />

            <Card className='schedule-card'>
                <CardHeader className='card-no-border'>
                    <div className='header-top'>
                        <H5 attrH5={{ className: 'm-0' }}>{"Incoming Meet Requests"}</H5>
                    </div>
                </CardHeader>
                <CardBody className='pt-0'>
                    <MeetRequestsListBox data={MeetRequestsListData} />
                </CardBody>
            </Card>
        </Fragment>
    );
};

const MeetRequestsListData = [
    {
        title: "Web Design",
        image: "4.jpg",
        icon: "bag",
        icon2: "clock",
        date: "January 3, 2022",
        date2: "09.00 - 12.00 AM",
        color: "primary",
    },
    {
        title: "UI/UX Design",
        image: "2.jpg",
        icon: "bag",
        icon2: "clock",
        date: "Febuary 10, 2022",
        date2: "11.00 - 1.00 PM",
        color: "warning",
    },
];

const MeetRequestsListBox = ({ data }) => {
    return (
        <UL attrUL={{ className: "schedule-list d-flex" }}>
            {data.map((item, i) => (
                <LI key={i} attrLI={{ className: `${item.color}` }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <H6 className="mb-1">{"Incoming Meet Request"}</H6>
                            <UL>
                                <LI attrLI={{ className: "f-light" }}>
                                    <SvgIcon iconId={item.icon} className="fill-icon f-light" />
                                    <span>{item.date}</span>
                                </LI>
                                <LI attrLI={{ className: "f-light" }}>
                                    <SvgIcon iconId={item.icon2} className="fill-icon f-success" />
                                    <span> {item.date2}</span>
                                </LI>
                            </UL>
                        </div>
                        <div >
                            {/* Approve and Reject buttons */}
                            <Button color='success' style={{marginLeft:"30px",marginTop:"20px"}} onClick={() => handleApproveClick(item)}>Approve</Button>
                        </div>
                    </div>
                </LI>
            ))}
        </UL>
    );
};

const handleApproveClick = (item) => {
    // Handle approve action here
    console.log("Approved:", item);
};

const handleRejectClick = (item) => {
    // Handle reject action here
    console.log("Rejected:", item);
};

export default MeetRequests;
