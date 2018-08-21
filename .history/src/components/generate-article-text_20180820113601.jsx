import React from "react";

const GenerateArticleText = props => {
  console.log(props);
  const createArticleText = props => {
    return { __html: props.data[0].text };
  };

  return (
    <div
      className="pix_section pix-padding-v-50"
      id="section_features__1"
    >
    <style>.entry-content h2,
.entry-content h3,
.entry-content h4,
.entry-content h5,
.entry-content h6 {
  color: `${props.colors.tertiary}`
}</style> 
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content pix-padding-bottom-30">
              <div className="pix-black-gray-light big-text">
                <div dangerouslySetInnerHTML={createArticleText(props)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateArticleText;
