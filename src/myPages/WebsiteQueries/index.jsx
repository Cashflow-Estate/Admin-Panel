
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Breadcrumbs } from '../../AbstractElements';
import DealsQueriesPagination from '../DealsSection/comp/DealsQueriesPagination';

const WebsiteQueries = () => {
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
            <h1>Website Queries</h1>
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

export default WebsiteQueries;


// import React, { useState } from 'react';
// import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
// import { Breadcrumbs } from '../../AbstractElements';
// import DealsQueriesPagination from '../DealsSection/comp/DealsQueriesPagination';

// const WebsiteQueries = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [queriesPerPage] = useState(4); // Number of queries per page
//     const [expandedQueries, setExpandedQueries] = useState([]);

//     const queries = [
//         { id: 1, title: "Query Title 1", name: "Syed M.Abid", description: "This is a brief description of the query or question. You can provide more details here if needed. This is a brief description of the query or question. You can provide more details here if needed. brief description of the query or question. You can provide more details here if needed. This is a brief description of the query or question. description of the query or question. You can provide more details here if needed. This is a brief description of the query or question. You can provide more details here if needed. brief description of the query or question. You can provide more details here if needed. This is a brief description of the query or question." },
//         { id: 2, title: "Query Title 2", name: "John Doe", description: "This is another query description." },
//         { id: 3, title: "Query Title 3", name: "Jane Smith", description: "Yet another query description." },
//         { id: 4, title: "Query Title 4", name: "Someone Else", description: "Yet another query description." },
//         // Add more queries as needed
//     ];

//     // Pagination logic
//     const indexOfLastQuery = currentPage * queriesPerPage;
//     const indexOfFirstQuery = indexOfLastQuery - queriesPerPage;
//     const currentQueries = queries.slice(indexOfFirstQuery, indexOfLastQuery);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const handleExpand = (index) => {
//         setExpandedQueries(prevState => {
//             const newExpandedQueries = [...prevState];
//             newExpandedQueries[index] = !newExpandedQueries[index]; // Toggle the expanded state
//             return newExpandedQueries;
//         });
//     };

//     return (
//         <div>
//             <Breadcrumbs mainTitle="Queries" parent="Queries" title="Website Queries" />
//             <Container fluid>
//                 <Row>
//                     {currentQueries.map((query, index) => (
//                         <Col key={query.id} sm="6">
//                             <div style={{ marginBottom: '20px', border: '1px solid green', borderRadius: '5px', height: '100%' }}>
//                                 <Card style={{ height: '100%' }}>
//                                     <CardBody style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//                                         <CardTitle tag="h4">{query.title}</CardTitle>
//                                         <CardText tag="h6">Name: {query.name}</CardText>
//                                         <CardText style={{ flex: 1, overflowY: 'auto' }}>
//                                             {query.description}
//                                         </CardText>
//                                         {/* Add a button to toggle the text expansion */}
//                                         <Button onClick={() => handleExpand(index)}>
//                                             {expandedQueries[index] ? "Read Less" : "Read More"}
//                                         </Button>
//                                     </CardBody>
//                                 </Card>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//             <div style={{ position: 'absolute', bottom: '-15px', right: '40px' }}>
//                 <DealsQueriesPagination // Update component name
//                     queriesPerPage={queriesPerPage}
//                     totalQueries={queries.length}
//                     paginate={paginate}
//                     currentPage={currentPage}
//                 />
//             </div>
//         </div>
//     );
// };

// export default WebsiteQueries;
