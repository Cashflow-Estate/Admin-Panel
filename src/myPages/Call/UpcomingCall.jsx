import React, { Fragment } from 'react'
import { Breadcrumbs, Btn, H5, H6, LI, UL } from '../../AbstractElements';
import SvgIcon from '../../Components/Common/Component/SvgIcon';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { useNavigate } from 'react-router';

const UpcomingCall = () => {
    const history=useNavigate()
    const call=()=>{
        history("/schedule-call")
    }
    return (
        <Fragment>
      <Breadcrumbs mainTitle="Upcoming Calls" parent="Call" title="Upcoming Meets" />
            
      <Card className='schedule-card'>
        <CardHeader className='card-no-border'>
          <div className='header-top'>
            <H5 attrH5={{ className: 'm-0' }}>{"Schedule"}</H5>
            <div className='card-header-right-icon'>
              <Btn onClick={call} attrBtn={{ color: 'light-primary', className: 'btn badge-light-primary' }}>+ {"Create"}</Btn>
            </div>
          </div> 
        </CardHeader>
        <CardBody className='pt-0'>
          <ScheduleListBox data={ScheduleListData} />
        </CardBody>
      </Card>
        </Fragment>
    );
  };


  
  export default UpcomingCall;
  const ScheduleListData = [
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
  const ScheduleListBox = ({ data }) => {
    return (
      <UL attrUL={{ className: "schedule-list d-flex" }}>
        {data.map((item, i) => (
          <LI key={i} attrLI={{ className: `${item.color}` }}>
            {/* <Image attrImage={{ src: require(`../../../assets/images/dashboard/user/${item.image}`), alt: 'profile' }} /> */}
            <div>
              {/* <H6 className="mb-1">{item.title}</H6> */}
              <H6 className="mb-1">{"Upcoming Call"}</H6>
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
           
          </LI>
        ))}
      </UL>
    );
  };

