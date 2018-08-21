import React from "react";

const CardsHeading = props => {
  // const primaryColor = props.colors.primary;
  const secondaryColor = props.colors.secondary;
  const tertiaryColor = props.colors.tertiary;
  return (
    <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
      <div className="pix-content pix-padding-bottom-30 text-center">
        <h1
          className="text-center secondary-font"
          style={{
            color: secondaryColor,
            textTransform: "uppercase",
            marginTop: 0
          }}
        >
          {props.heading}
        </h1>
        <h5
          className="pix-md-width-text"
          style={{
            color: tertiaryColor,
            textTransform: "uppercase",
            marginTop: 0
          }}
        >
          {props.subheading}
        </h5>
      </div>
    </div>
  );
};
export default CardsHeading;
