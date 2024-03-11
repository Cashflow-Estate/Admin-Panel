import React, { Fragment, useContext, useState } from "react";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import ProjectContext from "../../_helper/Project";
import { Add, Cancel } from "../../Constant";

import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card, CardBody, Form } from "reactstrap";
import CustomizerContext from "../../_helper/Customizer";
import ProjectRateClass from "./comp/ProjectRate";
import UploadProjectFileClass from "./comp/UploadProjectFile";
import IssueClass from "./comp/IssueClass";
import SimpleMdeReact from "react-simplemde-editor";
import DraggableMarker from "./comp/DraggableMarker";
import LocationDetail from "./comp/LocationDetail";
import DealForm from "./comp/DealForm";

const CreateDeal = () => {
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);
  const project = useContext(ProjectContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const AddProject = (data) => {
    if (data !== "") {
      project.addNewProject(data);
      history(
        `${process.env.PUBLIC_URL}/app/project/project-list/${layoutURL}`
      );
    } else {
      errors.showMessages();
    }
  };
  const [text, setText] = useState(
    `Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`
  );
  const handleChange = () => {
    setText(
      "Enter text in the area on the left. For more info, click the ? (help) icon in the menu."
    );
  };
  return (
    <Fragment>
      <Breadcrumbs
        parent="Deals"
        title="Create Deals"
        mainTitle="Create Deals"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                  onSubmit={handleSubmit(AddProject)}
                >
                  <DealForm register={register} errors={errors} />

                  <ProjectRateClass register={register} errors={errors} />
                  <LocationDetail register={register} errors={errors} />
                  <IssueClass register={register} />

                  <SimpleMdeReact
                    id="editor_container"
                    onChange={handleChange}
                    value={text}
                    options={{
                      autofocus: true,
                      spellChecker: false,
                    }}
                  />
                  <UploadProjectFileClass register={register} errors={errors} />
                  <DraggableMarker />
                  <Row>
                    <Col>
                      <div className="text-end">
                        <Btn attrBtn={{ color: "success", className: "me-3" }}>
                          {Add}
                        </Btn>
                        <Link
                          to={`${process.env.PUBLIC_URL}/app/project/project-list`}
                        >
                          <Btn attrBtn={{ color: "danger" }}>{Cancel}</Btn>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreateDeal;
