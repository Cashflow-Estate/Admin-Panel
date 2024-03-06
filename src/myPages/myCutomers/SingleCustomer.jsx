import React, { Fragment } from "react";
import { useParams } from "react-router";
import { Breadcrumbs } from "../../AbstractElements";
import Profile from "../myAuth/Profile";

const SingleCustomer = () => {
  const { id } = useParams();
  return (
    <Fragment>
      {/* <Breadcrumbs mainTitle="View Users" parent="Users" title={`detail/${id}`} /> */}
    <Profile/>
    </Fragment>
  );
};

export default SingleCustomer;
