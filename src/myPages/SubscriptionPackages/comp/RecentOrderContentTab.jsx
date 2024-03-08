import React, { Fragment, useState } from "react";
import { RecentOrderTable } from "../../../Data/Ecommerce";
import { Link } from "react-router-dom";
import { TabContent, Table, TabPane } from "reactstrap";
import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const RecentOrderContentTab = ({ RecentOrdersNav, isActive, show }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const data = [
    {
      id: "#CFDE-2163",
      amount: 100.0,
      plan: "T-shirt",
      status: "Verified",
      viewMore: "24-hour",
      type: "monthly",
    },
    {
      id: "#CFDE-2780",
      amount: 870.0,
      plan: "Pink T-shirt",
      status: "Rejected",
      viewMore: "24-hour",
      type: "yearly",
    },
    {
      id: "#CFDE-2163",
      amount: 390.0,
      plan: "Sony",
      status: "Rejected",
      viewMore: "24-hour",
      type: "monthly",
    },
    {
      id: "#CFDE-2780",
      amount: 870.0,
      plan: "Samsung",
      status: "Verified",
      viewMore: "24-hour",
      type: "yearly",
    },
    {
      id: "#CFDE-2163",
      amount: 100.0,
      plan: "Sony",
      status: "Verified",
      viewMore: "24-hour",
      type: "monthly",
    },
    {
      id: "#CFDE-2780",
      amount: 100.0,
      plan: "Sennheiser",
      status: "Rejected",
      viewMore: "24-hour",
      type: "yearly",
    },
    {
      id: "#CFDE-2163",
      amount: 50.0,
      plan: "Chair",
      status: "Verified",
      viewMore: "24-hour",
      type: "monthly",
    },
    {
      id: "#CFDE-2780",
      amount: 75.0,
      plan: "Office Chair",
      status: "Rejected",
      viewMore: "24-hour",
      type: "yearly",
    },
    {
      id: "#CFDE-2163",
      amount: 25.0,
      plan: "Lamp",
      status: "Verified",
      viewMore: "24-hour",
      type: "monthly",
    },
    {
      id: "#CFDE-2780",
      amount: 88.0,
      plan: "Bedside lamp",
      status: "Rejected",
      viewMore: "24-hour",
      type: "yearly",
    },
    {
      id: "#CFDE-2780",
      amount: 100.0,
      plan: "Sennheiser",
      status: "Rejected",
      viewMore: "24-hour",
      type: "yearly",
    },
    {
      id: "#CFDE-2163",
      amount: 50.0,
      plan: "Chair",
      status: "Verified",
      viewMore: "24-hour",
      type: "monthly",
    },
    {
      id: "#CFDE-2780",
      amount: 75.0,
      plan: "Office Chair",
      status: "Rejected",
      viewMore: "24-hour",
      type: "yearly",
    },
    {
      id: "#CFDE-2163",
      amount: 25.0,
      plan: "Lamp",
      status: "Verified",
      viewMore: "24-hour",
      type: "monthly",
    },
    {
      id: "#CFDE-2780",
      amount: 88.0,
      plan: "Bedside lamp",
      status: "Rejected",
      viewMore: "24-hour",
      type: "yearly",
    },
    {
      id: "#CFDE-2780",
      amount: 100.0,
      plan: "Sennheiser",
      status: "Rejected",
      viewMore: "24-hour",
      type: "yearly",
    },
    {
      id: "#CFDE-2163",
      amount: 50.0,
      plan: "Chair",
      status: "Verified",
      viewMore: "24-hour",
      type: "monthly",
    },
    {
      id: "#CFDE-2780",
      amount: 75.0,
      plan: "Office Chair",
      status: "Rejected",
      viewMore: "24-hour",
      type: "yearly",
    },
    {
      id: "#CFDE-2163",
      amount: 25.0,
      plan: "Lamp",
      status: "Verified",
      viewMore: "24-hour",
      type: "monthly",
    },
    {
      id: "#CFDE-2780",
      amount: 88.0,
      plan: "Bedside lamp",
      status: "Rejected",
      viewMore: "24-hour",
      type: "yearly",
    },
  ];


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  

  return (
    <Fragment>
      <div className="recent-table table-responsive">
        <Table>
          <thead>
            <tr>
              <th className="f-light">Id</th>
              <th className="f-light">Amount</th>
              <th className="f-light">Plan</th>
              <th className="f-light">Status</th>
              <th className="f-light">View More</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, j) => (
              <tr key={j}>
                <td>
                  <div className="product-content">
                    <div>
                      <h6 className="f-14 mb-0">
                        <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/orderhistory`}>
                          {item.title}
                        </Link>
                      </h6>
                      <span className="f-light f-12">Id : {item.id}</span>
                    </div>
                  </div>
                </td>
                <td className="f-w-12">${item.amount}</td>
                <td className="f-w-12">{item.type}</td>
                <td className="f-w-12">{item.status}</td>
                <td className="view-more">
                  <i className="icon-more-alt"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* Pagination */}
      <Col xl="6">
        <Card>
          <CardBody>
            <Pagination aria-label="Page navigation example" className="pagination-primary" >
              <PaginationItem>
                <PaginationLink previous href="#javascript" />
              </PaginationItem>
              {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink onClick={() => paginate(index + 1)} href="#javascript">
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationLink next href="#javascript" />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default RecentOrderContentTab