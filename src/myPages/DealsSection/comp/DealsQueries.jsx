import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import DealsQueriesPagination from './DealsQueriesPagination';

const DealsQueries = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [queriesPerPage] = useState(6); // Number of queries per page
    const [expandedQueries, setExpandedQueries] = useState([]); // State to track expanded queries

    // Static data (replace with your actual data)
    const queries = [
      "Query 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Query 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Query 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Query 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Query 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proident",
      "Query 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Query 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proident",
      "Query 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Query 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  ];


    // Pagination logic
    const indexOfLastQuery = currentPage * queriesPerPage;
    const indexOfFirstQuery = indexOfLastQuery - queriesPerPage;
    const currentQueries = queries.slice(indexOfFirstQuery, indexOfLastQuery);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleExpand = (index) => {
        const expanded = [...expandedQueries];
        expanded[index] = true;
        setExpandedQueries(expanded);
    };

    return (
        <div>
            <Breadcrumbs mainTitle="Queries" parent="Queries" title="View Queries" />
            <h1>Deals Queries</h1>
            <div className="row">
                {currentQueries.map((query, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <Card>
                            <Card.Body style={{ maxHeight: expandedQueries[index] ? 'none' : '200px', overflowY: 'auto' }}>
                                <Card.Title>Query {indexOfFirstQuery + index + 1}</Card.Title>
                                <Card.Text>
                                    {query}
                                </Card.Text>
                                {/* Add a button to expand the text */}
                                {!expandedQueries[index] && (
                                    <Button onClick={() => handleExpand(index)}>Read More</Button>
                                )}
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div style={{ position: 'absolute', bottom: '-15px', right: '40px' }}>
                <DealsQueriesPagination
                    currentPage={currentPage}
                    queriesPerPage={queriesPerPage}
                    totalQueries={queries.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default DealsQueries;
