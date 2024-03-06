import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import Questionss from './comp/Questions';


const ViewFaqs = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='FAQ' parent="All" title="FAQ" />
            <Container fluid={true}>
                <div className="faq-wrap">
                    <Row>
                        <Questionss />
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};
export default ViewFaqs;