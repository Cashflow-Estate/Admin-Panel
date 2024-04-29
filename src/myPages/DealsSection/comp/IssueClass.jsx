import React, { Fragment, useState, useEffect } from 'react';
import { Col, FormGroup, Input, Row } from 'reactstrap';
import { H6 } from '../../../AbstractElements';

const IssueClass = ({ register }) => {
    const [monthlyCashMin, setMonthlyCashMin] = useState('');
    const [monthlyCashMax, setMonthlyCashMax] = useState('');
    const [annualCashMin, setAnnualCashMin] = useState('');
    const [annualCashMax, setAnnualCashMax] = useState('');

    // Calculate annual returns when monthly cash flow min changes
    useEffect(() => {
        if (monthlyCashMin !== '') {
            // Assuming deal price is 122, as mentioned in the comment
            const dealPrice = 122;
            const minReturn = ((122 * monthlyCashMin) / dealPrice) * 100;
            setAnnualCashMin(minReturn.toFixed(2));
        }
    }, [monthlyCashMin]);

    // Calculate annual returns when monthly cash flow max changes
    useEffect(() => {
        if (monthlyCashMax !== '') {
            // Assuming deal price is 122, as mentioned in the comment
            const dealPrice = 122;
            const maxReturn = ((122 * monthlyCashMax) / dealPrice) * 100;
            setAnnualCashMax(maxReturn.toFixed(2));
        }
    }, [monthlyCashMax]);

    return (
        <Fragment>
            <Row>
            <Col sm="4">
          <FormGroup>
            <H6>{"Interest"}</H6>

            <Input
              className="form-control"
              type="number"
              name="upfrontDown"
              placeholder="Upfront Down"
              {...register("upfrontDown", { required: true })}
            />
          </FormGroup>
        </Col>
                <Col sm="4">
                    <FormGroup>
                        <H6>{"Monthly Cash Flow Minimum"}</H6>
                        <Input 
                            className="form-control" 
                            type="number" 
                            name="monthly_cash" 
                            placeholder="Approximate monthly cashflow minimum" 
                            {...register('monthly_cash', { required: true })}
                            onChange={(e) => setMonthlyCashMin(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col sm="4">
                    <FormGroup>
                        <H6>{"Monthly Cash Flow Maximum"}</H6>
                        <Input 
                            className="form-control" 
                            type="number" 
                            name="monthly_cash_max" 
                            placeholder="Approximate monthly cashflow maximum" 
                            {...register('monthly_cash_max', { required: true })}
                            onChange={(e) => setMonthlyCashMax(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col sm="4">
                    <FormGroup>
                        <H6>{"Approx Annual Minimum Return(%)"}</H6>
                        <Input 
                            className="form-control" 
                            type="text" 
                            name="annually_cash" 
                            value={annualCashMin}
                            readOnly
                        />
                    </FormGroup>
                </Col>
                <Col sm="4">
                    <FormGroup>
                        <H6>{"Approx Annual Maximum Return(%)"}</H6>
                        <Input 
                            className="form-control" 
                            type="text" 
                            name="annually_cash_max" 
                            value={annualCashMax}
                            readOnly
                        />
                    </FormGroup>
                </Col>
                <Col sm="4">
                    <FormGroup>
                        <H6>{"Closing Date"}</H6>
                        <input className="form-control" type="date" name="closing_date"  {...register('closing_date', { required: true })} />
                        {/* <span style={{ color: 'red' }}>{errors.client_name && 'Client Name is required'}</span> */}
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default IssueClass;

// import React, { Fragment, useState } from 'react';
// import { Col, FormGroup, Input, Row } from 'reactstrap';
// import { Big, Comment, Issues, Medium, Resolved, Small } from '../../../Constant';
// import DatePicker from 'react-datepicker';
// import { H6 } from '../../../AbstractElements';
// import { End, Start } from '../../../myConstants';

// const IssueClass = ({ register }) => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [comment, setComment] = useState('');

//     const handleStartDateChange = date => {
//         setStartDate(date);
//     };

//     const handleEndDateChange = date => {
//         setEndDate(date);
//     };

//     const handleCommentChange = event => {
//         setComment(event.target.value);
//     };

//     return (
//         <Fragment>
//             <Row>
//             <Col sm="4">
//           <FormGroup>
//             <H6>{"Interest"}</H6>

//             <Input
//               className="form-control"
//               type="number"
//               name="upfrontDown"
//               placeholder="Upfront Down"
//               {...register("upfrontDown", { required: true })}
//             />
//           </FormGroup>
//         </Col>
//                 <Col sm="4">
//                     <FormGroup>
//                         <H6>{"Monthly Cash Flow Minimum"}</H6>
//                         <input className="form-control" type="text" name="monthly_cash" placeholder="Approximate monthly cashflow minimum" {...register('monthly_cash', { required: true })} />
//                         {/* <span style={{ color: 'red' }}>{errors.monthly_cash && 'Client Name is required'}</span> */}
//                     </FormGroup>
//                 </Col>
//                 <Col sm="4">
//                     <FormGroup>
//                         <H6>{"Monthly Cash Flow Maximum"}</H6>
//                         <input className="form-control" type="text" name="monthly_cash_max" placeholder="Approximate monthly cashflow maximum" {...register('monthly_cash_max', { required: true })} />
//                         {/* <span style={{ color: 'red' }}>{errors.monthly_cash && 'Client Name is required'}</span> */}
//                     </FormGroup>
//                 </Col>
//                 <Col sm="4">
//                     <FormGroup>
//                         <H6>{"Approx Annual Minimum Return(%)"}</H6>
//                         <input className="form-control" type="text" name="annually_cash"  {...register('annually_cash', { required: true })} />
//                         {/* <span style={{ color: 'red' }}>{errors.client_name && 'Client Name is required'}</span> */}
//                     </FormGroup>
//                 </Col>
          
//                 <Col sm="4">
//                     <FormGroup>
//                         <H6>{"Approx Annual Maximum Return(%)"}</H6>
//                         <input className="form-control" type="text" name="annually_cash_max"  {...register('annually_cash', { required: true })} />
//                         {/* <span style={{ color: 'red' }}>{errors.client_name && 'Client Name is required'}</span> */}
//                     </FormGroup>
//                 </Col>
//                 <Col sm="4">
//                     <FormGroup>
//                         <H6>{"Closing Date"}</H6>
//                         <input className="form-control" type="date" name="closing_date"  {...register('closing_date', { required: true })} />
//                         {/* <span style={{ color: 'red' }}>{errors.client_name && 'Client Name is required'}</span> */}
//                     </FormGroup>
//                 </Col>
               
//             </Row>
//         </Fragment>
//     );
// };

// export default IssueClass;