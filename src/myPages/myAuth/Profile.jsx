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
        parent="My"
        title="Edit Profile"
      />
      <Container fluid={true}>
        <div className="edit-profile">
          <Row>
            <Col xl="12">
              <EditMyProfile />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default Profile;
