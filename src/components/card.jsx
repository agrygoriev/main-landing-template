import React from "react";

const Card = props => {
  const primaryColor = props.colors.primary;
  const secondaryColor = props.colors.secondary;
  return (
    <div className="col-md-4 col-xs-12 col-sm-12 column ui-droppable">
      <div
        style={{
          backgroundColor: primaryColor,
          borderRadius: 3,
          borderTop: "thick solid " + props.color,
          borderWidth: 3,
          padding: 20,
          marginTop: 20,
          marginBottom: 20,
          boxShadow:
            "0px 2px 5px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.05)"
        }}
      >
        <div className="pix-padding-h-10">
          <h5
            className="secondary-font"
            style={{
              color: secondaryColor,
              textTransform: "uppercase",
              lineHeight: 1.3,
              marginBottom: 10
            }}
          >
            {props.heading}
          </h5>
          <h6 style={{ marginBottom: 25 }}>
            <span
              className="label label-dafault"
              style={{
                backgroundColor: "rgba(" + props.tagColor + ", 0.2)",
                color: "#777",
                textTransform: "uppercase"
              }}
            >
              {props.tag}
            </span>
          </h6>
          <p className="big-text pix-margin-bottom-20">{props.text}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
