import React, { Fragment } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import ViewTransactions from "../SubscriptionPackages/ViewTransactions";

const UserDetails = ({ user }) => {
  console.log("🚀 ~ UserDetails ~ user:", user);
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h2>User Details</h2>
        </CardHeader>
        <CardBody >
        <p><strong>User ID:</strong> 12332</p>
        <p><strong>Email:</strong> zaidiabid514@gmail.com</p>
        <p><strong>Client:</strong> Customer</p>
        <p><strong>Location:</strong> San Francisco</p>
        <p><strong>PackageName:</strong> Pro</p>
        <p><strong>Investment:</strong> $111,243.21</p>
      </CardBody>
      </Card>
      <ViewTransactions showBreadcrumbs={false} /> {/* Pass prop to hide breadcrumbs */}

    </Fragment>
  );
};

export default UserDetails;
