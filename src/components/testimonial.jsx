import React from "react";

const Testimonial = props => {
  // console.log(props);
  const image = require("../assets/img/" + props.image);
  return (
    <div className="col-md-4 col-xs-12 col-sm-4 column ui-droppable">
      <div
        className="pix-content"
        style={{
          color: props.colors.secondary,
          backgroundColor: `rgba(${props.colors.secondaryRgb}, ${
            props.colors.opacity
          })`,
          textAlign: "center",
          padding: "30px 20px",
          margin: "10px 0",
          borderRadius: 3,
          boxShadow: "1px 1px 2px #eee"
        }}
      >
        <div className="pix-round-shape-140 pix-margin-bottom-20">
          <img src={image} alt={props.heading} />
        </div>
        <h5
          style={{
            color: props.colors.secondary,
            marginBottom: 0
          }}
        >
          <strong>{props.name}</strong>
        </h5>
        <h6
          style={{
            color: props.colors.tertiary,
            marginTop: 0,
            marginBottom: 20
          }}
        >
          <strong>{props.title}</strong>
        </h6>
        <p
          className="pix-black-gray-light big-text pix-margin-bottom-20"
          style={{
            color: "black",
            marginTop: 0,
            marginBottom: 20,
            fontSize: "1em",
            lineHeight: 1.6
          }}
        >
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
