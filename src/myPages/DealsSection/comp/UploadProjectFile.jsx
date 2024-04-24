import React, { Fragment } from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { UploadProjectFile } from "../../../Constant";
import Dropzone from "react-dropzone-uploader";
import { H6 } from "../../../AbstractElements";

const UploadProjectFileClass = ({description}) => {
  const getUploadParams = ({ meta }) => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  const handleChangeStatus = ({ meta, file }, status) => {};

  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup>
 <H6>{description}</H6>
            <Dropzone
              className="dropzone dz-clickable"
              getUploadParams={getUploadParams}
              onChangeStatus={handleChangeStatus}
              maxFiles={10}
              multiple={false}
              canCancel={false}
              inputContent="Drop A File"
              styles={{
                dropzone: { width: "100%", height: 150 },
                dropzoneActive: { borderColor: "green" },
              }}
            />
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UploadProjectFileClass;
