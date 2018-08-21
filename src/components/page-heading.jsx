import React from "react";

const PageHeading = props => {
  // console.log(props);
  return (
    <div
      className="pix_section"
      style={{
        backgroundColor: `rgba(${props.colors.secondaryRgb}, ${
          props.colors.opacity
        })`,
        padding: "40px 0",
        paddingTop: 65
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content pix-padding-bottom-30 text-center">
              <h2
                className="secondary-font"
                style={{
                  marginTop: 0,
                  color: props.colors.secondary,
                  textTransform: "uppercase"
                }}
              >
                <strong>{props.heading}</strong>
              </h2>
              <div>
                <span
                  className="pix-bar au-green-bg pix-margin-bottom-20 pix-margin-top-10"
                  style={{ backgroundColor: props.colors.tertiary }}
                />
              </div>
              <p className="pix-black-gray-light big-text-20 pix-small-width-text">
                {props.subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
