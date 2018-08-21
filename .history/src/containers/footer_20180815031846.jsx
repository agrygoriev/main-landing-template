import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import FooterLogo from "../assets/img/logo.svg";
import FooterMap from "../components/footer-map";
import ReactSVG from "react-svg";
const FooterBlock = props => {
  const primaryColor = props.colors.primary;
  const secondaryColor = props.colors.secondary;
  const tertiaryColor = props.colors.tertiary;
  return (
    <footer
      className="pix_section pix-padding-v-20"
      id="footer"
      style={{
        backgroundColor: primaryColor
      }}
    >
      <Container>
        <Row>
          <Col xs="12" sm="6" md="4">
            <div className="pix-content">
              <div className="mobile-text-center">
                <a href="/">
                  <ReactSVG
                    path={FooterLogo}
                    svgClassName="logo"
                    svgStyle={{ height: 40, fill: secondaryColor }}
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4">
            <div className="pix-content">
              <h5
                style={{
                  color: secondaryColor,
                  fontWeight: 700
                }}
              >
                {props.heading}
              </h5>
              <div className="pix-padding-v-10">
                <p
                  style={{
                    color: tertiaryColor
                  }}
                >
                  {props.street} <br /> {props.city}
                  {props.postcode}
                  <br />
                  {props.country}
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" xs="12" md="4">
            <div className="pix-content">
              <FooterMap />
            </div>
          </Col>
          <Col xs="12" sm-="6" md="8">
            <div className="pix-content">
              <div className="pix-padding-v-10">
                <div
                  className="big-text pix-padding-v-10 mobile-text-center"
                  style={{
                    color: secondaryColor
                  }}
                >
                  {props.copyright}
                </div>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4">
            <div className="pix-content">
              <div className="pix-padding-v-10">
                <div className="pix-white text-right mobile-text-center pix-margin-links">
                  <Button
                    href="/privacy/"
                    className="btn pix-padding-h-20 normal"
                    style={{
                      color: secondaryColor
                    }}
                  >
                    {props.textprivacy}
                  </Button>
                  <Button
                    href="/terms/"
                    className="btn pix-padding-h-20 normal"
                    style={{
                      color: secondaryColor
                    }}
                  >
                    {props.textterms}
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default FooterBlock;
