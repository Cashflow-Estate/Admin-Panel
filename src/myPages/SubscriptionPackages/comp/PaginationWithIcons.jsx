import React, { Fragment, useState } from "react";
import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationWithIconsClass = () => {
    return (
        <div className="pagination-container">
            <Col xl="6">
                <Card>
                    <CardBody>
                        <Pagination aria-label="Page navigation example" className="pagination-primary" >
                            <PaginationItem><PaginationLink previous href="#javascript" /></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink next href="#javascript" /></PaginationItem>
                        </Pagination>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}
   


export default PaginationWithIconsClass;