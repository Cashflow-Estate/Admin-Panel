import React from 'react';
import { Button } from 'reactstrap';

const Btn = (props) =>{
    return <Button onClick={props.onClick} {...props.attrBtn}>{props.children}</Button>;
};

export default Btn;