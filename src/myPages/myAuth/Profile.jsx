import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";

import UserTable from "../../Components/Pages/UsersEdit/UserTable";
import MyProfileEdit from "../../Components/Pages/UsersEdit/MyProfile";
import EditMyProfile from "../../Components/Pages/UsersEdit/EditmyProfile";
import { Breadcrumbs } from "../../AbstractElements";

const Profile = () => {
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Edit Profile"
        parent="Users"
        title="Edit Profile"
      />
      <Container fluid={true}>
        <div className="edit-profile">
          <Row>
            <Col xl="4">
              <MyProfileEdit />
            </Col>
            <Col xl="8">
              <EditMyProfile />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default Profile;
