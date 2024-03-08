import React, { Fragment, useState } from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input, Button, CardHeader, Collapse } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';

const CreateFaqs = () => {
    const [faqs, setFaqs] = useState([
        { question: '', answer: '' }
    ]);

    const addFAQ = () => {
        setFaqs([...faqs, { question: '', answer: '' }]);
    };

    const handleQuestionChange = (index, e) => {
        const newFaqs = [...faqs];
        newFaqs[index].question = e.target.value;
        setFaqs(newFaqs);
    };

    const handleAnswerChange = (index, e) => {
        const newFaqs = [...faqs];
        newFaqs[index].answer = e.target.value;
        setFaqs(newFaqs);
    };

  

    return (
        <Fragment>
             <Breadcrumbs
        mainTitle="Create Faqs"
        parent="FAQ's"
        title="Create Faqs"
      />
            <Card>
                <CardBody>
                    <Form>
                        {faqs.map((faq, index) => (
                            <FormGroup key={index}>
                                <Label for={`question${index}`}>Question</Label>
                                <Input
                                    type="text"
                                    name={`question${index}`}
                                    id={`question${index}`}
                                    placeholder="Enter question"
                                    value={faq.question}
                                    onChange={(e) => handleQuestionChange(index, e)}
                                />
                                <Label for={`answer${index}`} className="mt-3">Answer</Label>
                                <Input
                                    type="textarea"
                                    name={`answer${index}`}
                                    id={`answer${index}`}
                                    placeholder="Enter answer"
                                    value={faq.answer}
                                    onChange={(e) => handleAnswerChange(index, e)}
                                />
                            </FormGroup>
                        ))}
                    </Form>
                    <Button color="success" onClick={addFAQ}>Add FAQ</Button>
                </CardBody>
            </Card>
        </Fragment>
    );
};

export default CreateFaqs;
