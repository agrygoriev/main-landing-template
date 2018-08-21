import React from "react";
const RelativeContentBlock1 = props => {
  // console.log(props);
  const primaryColor = props.colors.primary;
  const secondaryColor = props.colors.secondary;
  // const tertiaryColor = props.colors.tertiary;
  const icon = require("../assets/img/" + props.content.icon);
  return (
    <section
      className="pix_section pix-relative highlight-section pix-no-margin-bottom"
      style={{
        backgroundColor: primaryColor
      }}
    >
      <div className="highlight-right pix-showcase-highlight-1" />
      <div className="container highlight-gray-mobile">
        <div className="row">
          <div className="col-md-6 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content pix-padding-v-130 text-center">
              <div className="pix-margin-bottom-20">
                <img className="icon-weights" src={icon} alt="icon" />
              </div>
              <h3
                className="pix-no-margin-top secondary-font"
                style={{
                  color: secondaryColor,
                  textTransform: "uppercase"
                }}
              >
                {props.content.heading}
              </h3>
              <p className="big-text pix-margin-bottom-30">
                {props.content.p1}
              </p>
              <p className="big-text pix-margin-bottom-30">
                {props.content.p2}
              </p>
              <p className="big-text pix-margin-bottom-30">
                {props.content.p3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelativeContentBlock1;
