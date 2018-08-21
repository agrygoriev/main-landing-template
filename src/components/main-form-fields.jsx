import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default class MainFormFields extends Component {
  render() {
    return (
      <div className="pix-content au-green-bg pix-padding-h-20 pix-padding-top-40 pix-padding-bottom-40 text-center">
        <h2 className="pix-white secondary-font padding-v-0">
          30 Unexpectedly Frugal Ways To Save Money
        </h2>
        <h5 className="pix-no-margin-top pix-yellow">
          Oh, you didn’t think nobody worried about that stuff?
        </h5>
        <h4 className="pix-white third-font">
          The best advices from famous businessmen in 2018
        </h4>
        <p className="pix-white big-text">
          Contact us and get your copy of "Beginner's Guide" right now!
        </p>
        <Form className="pix-form-style pixfort-form pix-padding-top-20 pix-form-light-white-bg ui-sortable ui-droppable">
          <FormGroup>
            <Input
              type="text"
              name="name"
              id="nameField"
              placeholder="Enter your full name"
              className="pix-lightblue-transparent"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter your email address"
              className="pix-lightblue-transparent"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="phone"
              name="phone"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className="pix-lightblue-transparent"
            />
          </FormGroup>
          <FormGroup className="checkbox" check>
            <Label className="pix-white" check>
              <Input type="checkbox" /> Yes, I agree to the GDPR terms and
              conditions
            </Label>
          </FormGroup>
          <FormGroup className="checkbox" check>
            <Label className="pix-white" check>
              <Input type="checkbox" /> Yes, I would like to receive future
              communications
            </Label>
          </FormGroup>
          <Button className="btn au-yellow-bg btn-lg pix-white btn-block third-font">
            Submit information
          </Button>
        </Form>
      </div>
    );
  }
}
