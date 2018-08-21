import React from "react";

const TestimonialsHeading = props => {
  // console.log(props);
  return (
    <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
      <div className="pix-content">
        <h5 style={{ color: props.colors.tertiary, textAlign: "center" }}>
          <strong>{props.upheadline}</strong>
        </h5>
        <h2
          style={{
            color: props.colors.secondary,
            textAlign: "center",
            marginTop: 0
          }}
        >
          <strong>{props.heading}</strong>
        </h2>
        <h5 style={{ textAlign: "center" }}>{props.subheading}</h5>
      </div>
    </div>
  );
};

export default TestimonialsHeading;
