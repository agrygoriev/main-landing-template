import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import BookCover from "../components/book-cover";
import MainFormFields from "../components/main-form-fields";
export default class mainForm extends Component {
  render() {
    return (
      <section className="pix_section pix-padding-v-85 main-form">
        <Container>
          <Row>
            <Col className="col-md-6 col-xs-12 col-sm-12 column ui-droppable">
              <BookCover />
            </Col>
            <Col className="col-md-6 col-xs-12 col-sm-12 column ui-droppable">
              <MainFormFields />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
