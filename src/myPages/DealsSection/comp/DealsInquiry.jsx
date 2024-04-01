import React from "react";
import { Fragment } from "react";
import { Breadcrumbs } from '../../../AbstractElements';
import AllInquiryTable from "./AllInquiryTable";
const DealsInquiry = () => {
 return(

<Fragment>
     <Breadcrumbs mainTitle="Inquiry" parent="Inquiry" title="View Inquiry" />
     <AllInquiryTable/>
  </Fragment>
 ) 
};

export default DealsInquiry;

// import React, { useState } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Breadcrumbs } from '../../../AbstractElements';
// import DealsInquiryPagination from './DealsInquiryPagination';

// const DealsInquiry = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [InquiryPerPage] = useState(6); // Number of Inquiry per page
//     const [expandedInquiry, setExpandedInquiry] = useState([]); // State to track expanded Inquiry

//     // Static data (replace with your actual data)
//     const Inquiry = [
//       "Query 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       "Query 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       "Query 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       "Query 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "Query 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proident",
//       "Query 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "Query 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proidentExcepteur sint occaecat cupidatat non proident",
//       "Query 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       "Query 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   ];

//     // Pagination logic
//     const indexOfLastQuery = currentPage * InquiryPerPage;
//     const indexOfFirstQuery = indexOfLastQuery - InquiryPerPage;
//     const currentInquiry = Inquiry.slice(indexOfFirstQuery, indexOfLastQuery);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const handleExpand = (index) => {
//         const expanded = [...expandedInquiry];
//         expanded[index] = true;
//         setExpandedInquiry(expanded);
//     };

//     return (
//         <div>
//             <Breadcrumbs mainTitle="Inquiry" parent="Inquiry" title="View Inquiry" />
//             <h1>Deals Inquiry</h1>
//             <div className="row">
//                 {currentInquiry.map((query, index) => (
//                     <div key={index} className="col-md-4 mb-3">
//                         <Card>
//                             <Card.Body style={{ maxHeight: expandedInquiry[index] ? 'none' : '200px', overflowY: 'auto' }}>
//                                 <Card.Title>Query {indexOfFirstQuery + index + 1}</Card.Title>
//                                 <Card.Text>
//                                     {query}
//                                 </Card.Text>
//                                 {/* Add a button to expand the text */}
//                                 {!expandedInquiry[index] && (
//                                     <Button onClick={() => handleExpand(index)}>Read More</Button>
//                                 )}
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//             <div style={{ position: 'absolute', bottom: '-15px', right: '40px' }}>
//                 <DealsInquiryPagination
//                     currentPage={currentPage}
//                     InquiryPerPage={InquiryPerPage}
//                     totalInquiry={Inquiry.length}
//                     paginate={paginate}
//                 />
//             </div>
//         </div>
//     );
// };

// export default DealsInquiry;
