import React from "react";
import TestimonialsHeading from "../components/testimonials-heading";
import Testimonial from "../components/testimonial";
const TestimonialsContainer = props => {
  console.log(props);
  const testimonialData = props;
  const pageHeadingData = props.heading;
  pageHeadingData.colors = props.colors;
  const CreateTestimonialsList = props => {
    const text = props.cards;
    const articles = text.map((element, i) => (
      <Testimonial
        id={element.id}
        key={i}
        image={element.image}
        name={element.name}
        title={element.title}
        text={element.text}
        colors={props.colors}
      />
    ));
    return (
      <div className="pix_section" style={{ paddingTop: 85, paddingBottom: 0 }}>
        <div className="container">
          <div className="row">{articles}</div>
        </div>
      </div>
    );
  };
  return (
    <section className="pix_section pix-padding-v-50">
      <div className="container">
        <div className="row">
          <TestimonialsHeading
            heading={pageHeadingData.heading}
            subheading={pageHeadingData.subheading}
            upheadline={pageHeadingData.upheadline}
            colors={props.colors}
          />
          <CreateTestimonialsList {...testimonialData} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsContainer;
