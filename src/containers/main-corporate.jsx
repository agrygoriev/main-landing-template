import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const MainCorporate = props => {
  // console.log(props);
  const convert = require("color-convert");
  const headline = props.content.headline;
  const subheading = props.content.subheading;
  const buttonText = props.content.btntext;
  const image = require("../assets/img/" + props.content.bgimage);
  const secondaryColor = props.colors.secondary;
  const primaryColor = props.colors.primary;
  const tertiaryColor = props.colors.tertiary;
  const bgColor =
    "linear-gradient(rgba(" +
    convert.hex.rgb(secondaryColor)[0] +
    ", " +
    convert.hex.rgb(secondaryColor)[1] +
    ", " +
    convert.hex.rgb(secondaryColor)[2] +
    ", 0.4), rgba(" +
    convert.hex.rgb(secondaryColor)[0] +
    ", " +
    convert.hex.rgb(secondaryColor)[1] +
    ", " +
    convert.hex.rgb(secondaryColor)[2] +
    ", 0.6)),";
  // console.log(bgColor);
  // const colors = props.colors;
  return (
    <section
      className="pix_section pix-padding-v-130 pix-corporate-1"
      style={{
        backgroundImage: bgColor + "url(" + image + ")",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center"
      }}
    >
      <Container>
        <Row>
          <Col className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content">
              <h1
                style={{
                  color: primaryColor,
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: 20
                }}
              >
                {headline}
              </h1>
              <p
                style={{
                  color: primaryColor,
                  marginBottom: 20,
                  fontSize: "1em",
                  lineHeight: 1.3
                }}
              >
                {subheading}
              </p>
              <a href={props.content.hrefcontacts}>
                <Button
                  className="btn btn-lg"
                  style={{
                    color: primaryColor,
                    backgroundColor: tertiaryColor
                  }}
                >
                  <strong>{buttonText}</strong>
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainCorporate;
