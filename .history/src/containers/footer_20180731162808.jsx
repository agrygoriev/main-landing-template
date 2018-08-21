import React from "react";
import FooterLogo from "../assets/img/logo.svg";
import FooterMap from "../components/footer-map";
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
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 column ui-droppable col-md-4">
            <div className="pix-content">
              <div className="mobile-text-center">
                <a href="/">
                  <img src={FooterLogo} alt="Logo" width="auto" height="auto" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 column ui-droppable col-md-4">
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
          </div>
          <div className="col-sm-12 col-xs-12 column ui-droppable col-md-4">
            <div className="pix-content">
              <FooterMap />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 column ui-droppable col-md-8">
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
          </div>
          <div className="col-xs-12 col-sm-6 column ui-droppable col-md-4">
            <div className="pix-content">
              <div className="pix-padding-v-10">
                <div className="pix-white text-right mobile-text-center pix-margin-links">
                  <a
                    href="/privacy/"
                    className="btn pix-padding-h-20 normal"
                    style={{
                      color: secondaryColor
                    }}
                  >
                    {props.textprivacy}
                  </a>
                  <a
                    href="/terms/"
                    className="btn pix-padding-h-20 normal"
                    style={{
                      color: secondaryColor
                    }}
                  >
                    {props.textterms}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterBlock;
