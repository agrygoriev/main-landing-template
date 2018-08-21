import React from "react";
const PrivacyPage = props => {
  const CreatePrivacyPolice = props => {
    console.log(props);
    const text = props.data.paragraphs;
    const paragraphs = text.map((element, i) => (
      <section className="clear-list-item" key={i}>
        <h6 className="list-heading" style={{ color: props.colors.secondary }}>
          {element.heading}
        </h6>
        <p className="list-paragraph" style={{ color: "#777" }}>
          {element.text}
        </p>
      </section>
    ));

    return (
      <article className="pix-black-gray-light big-text pix-margin-bottom-20 clear-list">
        {paragraphs}
      </article>
    );
  };
  return (
    <main className="blog-page-wrapper">
      <section className="pix_section pix-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-xs-12 col-sm-7 column ui-droppable">
              <div className="pix-content">
                <h1
                  className="secondary-font pix-sm-lineheight"
                  style={{
                    color: props.data.colors.secondary,
                    // marginBottom: 0,
                    marginTop: 0
                  }}
                >
                  {props.data.heading}
                </h1>
                <h5 className="pix-black-gray-light">{props.data.update}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-5 column ui-droppable col-md-12">
              <div
                className="pix-content"
                style={{
                  backgroundColor: `rgba(${props.data.colors.secondaryRgb}, ${
                    props.data.colors.opacity
                  })`,
                  color: props.data.colors.secondary,
                  margin: "30px 0",
                  padding: "30px 20px",
                  borderRadius: 3
                }}
              >
                <CreatePrivacyPolice
                  paragraphs={props.data.text}
                  colors={props.data.colors}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default PrivacyPage;
