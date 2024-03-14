import React from 'react';
import { Media } from 'reactstrap';

const Image = (props) => (
  <Media {...props.attrImage} onClick={props.onClick} />
);

export default Image;
