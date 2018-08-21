import React from "react";

const TellMeMore = props => {
  // console.log(props);
  return (
    <div
      className="pix_section"
      style={{
        backgroundColor: `rgba(${props.colors.secondaryRgb}, ${
          props.colors.opacity
        })`,
        padding: "10px 0"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content pix-padding-v-10">
              <div className="media">
                <div className="media-body media-middle media-box-area pix-no-h-padding">
                  <div className="pix-inner">
                    <h6
                      className="secondary-font"
                      style={{
                        color: props.colors.secondary,
                        marginBottom: 0,
                        marginTop: 0
                      }}
                    >
                      {props.content.heading}
                    </h6>
                    <p
                      style={{
                        color: "#000",
                        marginBottom: 0,
                        marginTop: 0
                      }}
                    >
                      {props.content.text}
                    </p>
                  </div>
                </div>
                <div className="media-right media-middle text-center media-box-area">
                  <div className="pix-inner">
                    <a
                      href={props.content.href}
                      className="btn btn-md"
                      style={{
                        backgroundColor: props.colors.tertiary,
                        color: props.colors.primary
                      }}
                    >
                      {props.content.btntext}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TellMeMore;
