import React from "react";

const GenerateArticleHeading = props => {
  console.log(props);
  return (
    <div
      className="pix_section article-page"
      id="section_titles_1"
      style={{
        backgroundColor: `rgba(${props.colors.secondaryRgb}, ${
          props.colors.opacity
        })`,
        padding: "40px 0"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content pix-padding-bottom-30 text-center">
              <h2
                className="secondary-font"
                style={{
                  color: props.colors.secondary,
                  marginTop: 0,
                  textAlign: "center",
                  textTransform: "uppercase"
                }}
              >
                {props.data[0].heading}
              </h2>
              <div>
                <span className="pix-bar au-green-bg pix-margin-bottom-20 pix-margin-top-10" />
              </div>
              <p className="pix-black-gray-light big-text-20 pix-small-width-text">
                {props.data[0].subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateArticleHeading;
