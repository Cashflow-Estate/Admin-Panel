import React, { Fragment, useState } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, CardFooter } from 'reactstrap';
import { Breadcrumbs, Btn } from '../../AbstractElements';
import HeaderCard from '../../myComponents/HeaderCard';

const CreateBanner = () => {
    const [bannerData, setBannerData] = useState({
        bannerName: '',
        bannerImage: '',
        bannerLink: '',
        selectedDesign: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBannerData({
            ...bannerData,
            [name]: value,
        });
    };

    const handleDesignChange = (e) => {
        setBannerData({
            ...bannerData,
            selectedDesign: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions like sending data to the server here
        console.log('Submitted Data:', bannerData);
    };

    return (
        <Fragment>
      <Breadcrumbs parent='Banners' title='Create Banners' mainTitle='Create Banners' />

            <Card>
                <HeaderCard title={"Create a new Banner"} />
                <Form className="form theme-form" onSubmit={handleSubmit}>
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="bannerName">{"Banner Name"}</Label>
                                    <Input 
                                        type="text" 
                                        id="bannerName" 
                                        name="bannerName" 
                                        className="form-control" 
                                        placeholder="Enter Banner Name"
                                        value={bannerData.bannerName}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="bannerImage">{"Banner Image URL"}</Label>
                                    <Input 
                                        type="text" 
                                        id="bannerImage" 
                                        name="bannerImage" 
                                        className="form-control" 
                                        placeholder="Enter Banner Image URL"
                                        value={bannerData.bannerImage}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>{"Select Banner Design"}</Label>
                                    <div>
                                        <Input 
                                            type="radio" 
                                            name="design" 
                                            value="design1"
                                            checked={bannerData.selectedDesign === "design1"}
                                            onChange={handleDesignChange}
                                        /> Design 1
                                        <Input 
                                            type="radio" 
                                            name="design" 
                                            value="design2"
                                            checked={bannerData.selectedDesign === "design2"}
                                            onChange={handleDesignChange}
                                        /> Design 2
                                        {/* Add more designs as needed */}
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="bannerLink">{"Banner Link"}</Label>
                                    <Input 
                                        type="text" 
                                        id="bannerLink" 
                                        name="bannerLink" 
                                        className="form-control" 
                                        placeholder="Enter Banner Link"
                                        value={bannerData.bannerLink}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter className="text-end">
                        <Btn attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >{"Create"}</Btn>
                        <Btn attrBtn={{ color: "secondary", type: "button" }} >{"Cancel"}</Btn>
                    </CardFooter>
                </Form>
            </Card>
        </Fragment>
    );
};

export default CreateBanner;
