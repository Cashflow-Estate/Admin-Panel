import React, { Fragment, useCallback, useContext, useState } from 'react';
import { Card, Col, Row } from 'reactstrap';
import EmailContext from '../../../_helper/Email';
import EmailTopToggle from './EmailTop';
import EmptyClass from '../MailInbox/EmptyMail';
import AllEmailsClass from '../MailInbox/AllEmailClass';
import MailContain from '../MailInbox/MailContain';

const allEmails = [
  {
    "id": "0",
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  },
  {
    "id": "1",
    "name": "Bob Brown",
    "email": "bob.brown@example.com"
  }
];

const selectedFav = [
  {
    "id": "0",
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  },
  {
    "id": "1",
    "name": "Bob Brown",
    "email": "bob.brown@example.com"
  }
];

const MailSidebar = () => {
  // const { types, allEmails, type, setCompose, getAllEmailsAsyn, getAllType, groupBy, setSingleMailRecord } = useContext(EmailContext);
  const [emailIds, setEmailIds] = useState([]);
  const [checked, setchecked] = useState(false);
  const mailData = [];
  // const TypesOfData = types;

  // const selectedFav = false;

  // const selectedCompose = (email) => {
  //   setCompose(false);
  //   setSingleMailRecord(email);
  // };

  // const selectedmail = (e, emailID) => {
  //   const IDs = emailIds;
  //   setchecked(e.target.checked);
  //   if (emailIds == null) {
  //     setEmailIds(mailData);
  //   } else {
  //     if (e.target.checked) {
  //       IDs.push(emailID);
  //       setEmailIds(IDs);
  //       const arr = [...new Set(emailIds)];
  //       setEmailIds(arr);
  //     } else {
  //       setEmailIds(mailData);
  //     }
  //   }
  // };

  // const moreCallBack = useCallback((typeSelected) => {
  //   moveEmails(typeSelected);
  // });

  // const moveEmails = (val) => {
  //   [...document.querySelectorAll('.checkbox_animated')].map((input) => {
  //     if (input.checked) {
  //       let fakeInput = {
  //         target: {
  //           value: input.value,
  //           checked: false,
  //         },
  //       };
  //       input.checked = !input.checked;
  //       selectedmail(fakeInput);
  //     }
  //     return null;
  //   });
  //   for (var i = 0; i < allEmails.length; i++) {
  //     if (emailIds.includes(allEmails[i].id)) {
  //       allEmails[i].type = val;
  //     }
  //   }

  //   var result = groupBy(allEmails, function (item) {
  //     return [item.type];
  //   });

  //   getAllEmailsAsyn(allEmails);
  //   getAllType(result);
  // };

  // const selectedmailCallback = useCallback((e, emailID) => {
  //   selectedmail(e, emailID);
  // });

  // const selectMailCallback = useCallback((val) => {
  //   selectedCompose(val);
  // });


  const favEmails = allEmails.filter(email => email.favourite === true);
  return (
    <Fragment>
      <Col xl='9' className='box-col-6'>
        <div className='email-right-aside email-page'>
          <Card className='email-body'>
            <Row>
              <Col xl='4' md='12' className='box-md-12 pr-0'>
                <div className='pe-0 b-r-light'></div>
                <EmailTopToggle />
                <div className='inbox custom-scrollbar'>
                  {selectedFav.length > 0 ? (
                    favEmails.length > 0 ? (
                      favEmails.map((list, index) => (
                        <AllEmailsClass list={list} key={index} />
                      ))
                    ) : (
                      <EmptyClass />
                    )
                  ) : (
                    <EmptyClass />
                  )}
                </div>
              </Col>
              <MailContain />
            </Row>
          </Card>
        </div>
      </Col>
    </Fragment>
  );
};
export default MailSidebar;
