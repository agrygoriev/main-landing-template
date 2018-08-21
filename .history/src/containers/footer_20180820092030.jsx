import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import FooterLogo from "../assets/img/logo.svg";
import FooterMap from "../components/footer-map";
import ReactSVG from "react-svg";
const FooterBlock = props => {
  // console.log(props);
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
                <a href={props.info.hrefmain}>
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
                {props.contacts.heading}
              </h5>
              <div className="pix-padding-v-10">
                <p
                  style={{
                    color: tertiaryColor
                  }}
                >
                  {props.contacts.street} <br /> {props.contacts.city}
                  {props.contacts.postcode}
                  <br />
                  {props.contacts.country}
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
                  {props.info.copyright}
                </div>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4">
            <div className="pix-content">
              <div className="pix-padding-v-10">
                <div className="text-center mobile-text-center">
                  <Button
                    href={props.info.hrefprivacy}
                    className="btn pix-margin-h-20 normal"
                    style={{
                      color: secondaryColor,
                      backgroundColor: `rgba(${props.colors.secondaryRgb}, ${
                        props.colors.opacity
                      })`
                    }}
                  >
                    {props.info.textprivacy}
                  </Button>
                  <Button
                    href={props.info.hrefterms}
                    className="btn pix-padding-h-20 normal"
                    style={{
                      color: secondaryColor,
                      backgroundColor: `rgba(${props.colors.secondaryRgb}, ${
                        props.colors.opacity
                      })`
                    }}
                  >
                    {props.info.textterms}
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
