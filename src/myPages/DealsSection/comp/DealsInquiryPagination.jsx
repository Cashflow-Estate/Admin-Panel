import React from 'react';
import { Card, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Col } from 'reactstrap';
import { Next, Previous } from '../../../Constant';

const DealsInquiryPagination = ({ currentPage, InquiryPerPage, totalInquiry, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalInquiry / InquiryPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Col xl="12">
            <Card>
                <Pagination aria-label="...">
                    <ul className="pagination pagination-primary">
                        <PaginationItem disabled={currentPage === 1}>
                            <PaginationLink onClick={() => paginate(currentPage - 1)}>{Previous}</PaginationLink>
                        </PaginationItem>
                        {pageNumbers.map((number) => (
                            <PaginationItem key={number} active={number === currentPage}>
                                <PaginationLink onClick={() => paginate(number)}>{number}</PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem disabled={currentPage === Math.ceil(totalInquiry / InquiryPerPage)}>
                            <PaginationLink onClick={() => paginate(currentPage + 1)}>{Next}</PaginationLink>
                        </PaginationItem>
                    </ul>
                </Pagination>
            </Card>
        </Col>
    );
};

export default DealsInquiryPagination;
