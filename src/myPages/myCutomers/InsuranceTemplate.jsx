import React, { Fragment } from 'react'
import { Breadcrumbs } from '../../AbstractElements'
import { useNavigate } from 'react-router';
import { Button } from 'reactstrap';

const InsuranceTemplate = () => {
  const navigation = useNavigate(); // Changed from 'history' to 'navigation'

  const handleCreateEviction = () => {
    navigation("/add-agent");
  };
  return (
    <Fragment>
        <Breadcrumbs mainTitle={"Insurance pre written template"} parent="CRM" title={"Insurance"} />
        <Button color="success" onClick={handleCreateEviction}>
       Add Agent
      </Button>{" "}
      {/* Corrected Button onClick */}
      {/* {complaints.map((complaint) => (
        <ComplaintCard
          key={complaint.id}
          dealTitle={complaint.dealTitle}
          dealComplaint={complaint.dealComplaint}
        />
      ))} */}
        InsuranceTemplate
    </Fragment>
  )
}

export default InsuranceTemplate
