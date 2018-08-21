import React from "react";

const RelativeContentBlock2 = props => {
  // console.log(props);
  // const primaryColor = props.colors.primary;
  const secondaryColor = props.colors.secondary;
  // const tertiaryColor = props.colors.tertiary;
  const image = require("../assets/img/" + props.content.image);
  return (
    <section className="relative-content-2">
      <div className="pix_section pix-padding">
        <div className="container">
          <div className="row pix-padding-v-30">
            <div className="col-xs-12 col-sm-6 column ui-droppable col-md-7">
              <div className="pix-content pix-padding-top-60">
                <h2
                  className="secondary-font"
                  style={{
                    color: secondaryColor,
                    textTransform: "uppercase",
                    marginTop: 0
                  }}
                >
                  {props.content.heading}
                </h2>
                <p className="big-text pix-margin-bottom-20">
                  {props.content.p1}
                </p>
              </div>
            </div>
            <div className="col-xs-12 text-center col-sm-6 column ui-droppable col-md-5">
              <div className="pix-content">
                <img
                  src={image}
                  className="img-responsive"
                  alt="Experience &amp; Savings"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RelativeContentBlock2;
