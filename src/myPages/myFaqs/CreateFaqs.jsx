import React, { Fragment, useState } from "react";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CardHeader,
  Collapse,
} from "reactstrap";
import { Breadcrumbs, H6 } from "../../AbstractElements";
import ReactQuill from "react-quill";

const CreateFaqs = () => {
  const [description, setDescription] = useState(""); // State to hold rich text description

  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

  const addFAQ = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
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
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Create Faqs" parent="FAQ's" title="Create Faqs" />
      <Card>
        <CardBody>
          <Form>
            {faqs.map((faq, index) => (
              <FormGroup key={index}>
                <H6 for={`question${index}`}>Question</H6>
                <Input
                  type="text"
                  name={`question${index}`}
                  id={`question${index}`}
                  placeholder="Enter question"
                  value={faq.question}
                  onChange={(e) => handleQuestionChange(index, e)}
                />
                <H6 for={`answer${index}`} className="mt-3">
                  Answer
                </H6>
                <ReactQuill
                  value={description}
                  onChange={handleDescriptionChange}
                  theme="snow" // You can change the theme if needed
                />
              </FormGroup>
            ))}
          </Form>
          <Button color="success" onClick={addFAQ}>
            Add FAQ
          </Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default CreateFaqs;
