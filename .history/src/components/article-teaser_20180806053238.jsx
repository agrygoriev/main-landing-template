import React from "react";

const ArticleTeaser = props => {
  console.log(props);
  const image = require("../assets/img/" + props.image);
  return (
    <div className="pix_section pix-padding-top-30 pix-padding-bottom-40">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12 text-center col-sm-12 column ui-droppable">
            <div className="pix-content">
              <img src={image} alt={props.heading} className="img-responsive" />
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content">
              <h2
                className="secondary-font"
                style={{
                  color: props.colors.secondary,
                  marginTop: 0,
                  textTransform: "uppercase"
                }}
              >
                <strong>{props.heading}</strong>
              </h2>
              <p className="pix-black-gray-light big-text pix-margin-bottom-20">
                {props.subheading}
              </p>
              <a
                href={props.id}
                className="btn"
                style={{
                  color: props.colors.primary,
                  backgroundColor: props.colors.secondary
                }}
              >
                <strong>Read More</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleTeaser;
