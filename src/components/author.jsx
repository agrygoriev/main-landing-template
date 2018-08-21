import React from "react";
import AuthorPortrait from "../assets/img/author.jpg";
const Author = props => {
  // console.log(props);
  return (
    <div className="pix_section pix-padding-v-40">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content pix-padding-h-30 pix-padding-v-30 text-center pix-margin-v-10">
              <div className="pix-round-shape-200">
                <img src={AuthorPortrait} alt="Author Portrait" />
              </div>
              <h3 style={{ color: props.colors.secondary, marginBottom: 0 }}>
                {props.content.name}
              </h3>
              <h6 style={{ color: props.colors.tertiary, marginTop: 0 }}>
                {props.content.title}
              </h6>
              <p
                className="pix-md-width-text"
                style={{ color: "#000", marginBottom: 30, fontSize: "1em" }}
              >
                {props.content.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Author;
