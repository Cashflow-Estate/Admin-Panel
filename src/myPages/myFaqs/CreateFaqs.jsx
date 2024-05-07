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
import SimpleMdeReact from "react-simplemde-editor";

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
      <Breadcrumbs back="/faqs/view" mainTitle="Create Faqs" parent="FAQ's" title="Create Faqs" />
      <Card>
        <CardBody>
          <Form>
            {faqs.map((faq, index) => (
              <FormGroup key={index} >
              <H6 for={`question${index}`} className="mb-2">Question</H6>
              <Input
                type="text"
                name={`question${index}`}
                id={`question${index}`}
                placeholder="Enter question"
                value={faq.question}
                onChange={(e) => handleQuestionChange(index, e)}
              />
              <div style={{marginTop:"12px"}}>

              <H6  for={`answer${index}`} >
                Answer
              </H6>
              <SimpleMdeReact
             
             id="editor_container"
             options={{
               spellChecker: false,
             }}
            //  onChange={handelChange}
           />
              </div>

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
