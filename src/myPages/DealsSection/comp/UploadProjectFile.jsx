import React, { Fragment } from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { UploadProjectFile } from "../../../Constant";
import Dropzone from "react-dropzone-uploader";
import { H6 } from "../../../AbstractElements";

const UploadProjectFileClass = ({property}) => {
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
          { property? <H6>{"Add Property Closing Docs"}</H6>: <H6>{"Add Deals Files"}</H6>}
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
