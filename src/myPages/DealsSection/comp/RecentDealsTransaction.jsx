import React, { Fragment, useState } from "react";
import {
  Table,
  Col,
  Card,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

const RecentDealsTransaction = ({ show, isActive, RecentOrdersNav }) => {
  // Dummy data for the table
  const dummyData = [
    { id: 1, date: "2024-03-25", deal: "Deal 1", amount: "$100" },
    { id: 2, date: "2024-03-24", deal: "Deal 2", amount: "$150" },
    { id: 3, date: "2024-03-23", deal: "Deal 3", amount: "$200" },
    { id: 4, date: "2024-03-22", deal: "Deal 4", amount: "$250" },
    { id: 5, date: "2024-03-21", deal: "Deal 5", amount: "$300" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Fragment>
      <div className="recent-table table-responsive">
        <Table>
          <thead>
            <tr>
              <th>Deal</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.deal}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Col xl="12" className="d-flex justify-content-end">
        <Pagination aria-label="Page navigation example" className="pagination-primary">
          <PaginationItem>
            <PaginationLink
              previous
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {Array.from({ length: Math.ceil(dummyData.length / itemsPerPage) }).map((_, index) => (
            <PaginationItem key={index} active={index + 1 === currentPage}>
              <PaginationLink onClick={() => paginate(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationLink
              next
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(dummyData.length / itemsPerPage)}
            />
          </PaginationItem>
        </Pagination>
      </Col>
    </Fragment>
  );
};

export default RecentDealsTransaction;
