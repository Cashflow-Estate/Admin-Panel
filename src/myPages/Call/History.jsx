import React, { Fragment } from 'react';
import { Breadcrumbs, H5, H6, LI, UL } from '../../AbstractElements';
import SvgIcon from '../../Components/Common/Component/SvgIcon';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';

const History = () => {
    const dummyCallHistoryData = [
        {
            title: "Client Meeting",
            icon: "phone",
            icon2: "clock",
            date: "March 20, 2024",
            duration: "30 minutes",
            color: "primary",
        },
        {
            title: "Team Conference Call",
            icon: "phone",
            icon2: "clock",
            date: "March 18, 2024",
            duration: "45 minutes",
            color: "success",
        },
        {
            title: "Customer Support",
            icon: "phone",
            icon2: "clock",
            date: "March 15, 2024",
            duration: "20 minutes",
            color: "info",
        },
    ];
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Call History" parent="Call" title="History" />

            <Card className='schedule-card'>
                <CardHeader className='card-no-border'>
                    <div className='header-top'>
                        <H5 attrH5={{ className: 'm-0' }}>{"Call History"}</H5>
                    </div>
                </CardHeader>
                <CardBody className='pt-0'>
                    <CallHistoryListBox callHistoryData={dummyCallHistoryData} />
                </CardBody>
            </Card>
        </Fragment>
    );
};

const CallHistoryListBox = ({ callHistoryData }) => {
    return (
        <UL attrUL={{ className: "schedule-list d-flex" }}>
            {callHistoryData.map((item, i) => (
                <LI key={i} attrLI={{ className: `${item.color}` }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <H6 className="mb-1">{"Call History Item"}</H6>
                            <UL>
                                <LI attrLI={{ className: "f-light" }}>
                                    <SvgIcon iconId={item.icon} className="fill-icon f-light" />
                                    <span>{item.date}</span>
                                </LI>
                                <LI attrLI={{ className: "f-light" }}>
                                    <SvgIcon iconId={item.icon2} className="fill-icon f-success" />
                                    <span> {item.duration}</span>
                                </LI>
                            </UL>
                        </div>
                    </div>
                </LI>
            ))}
        </UL>
    );
};

export default History;
