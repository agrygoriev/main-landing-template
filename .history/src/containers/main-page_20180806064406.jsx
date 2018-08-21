import React from "react";
import RelativeContentBlock1 from "../components/relative-content-1";
import RelativeContentBlock2 from "../components/relative-content-2";
import CardsContainer from "./cards-container";
import Author from "../components/author";
// import MainForm from "./main-form";
import CookieBar from "../components/cookie-bar";
import TestimonialsContainer from "./testimonials-container";
import MainCorporate from "./main-corporate";
import testimonialsData from "../testimonials.json";
import authorData from "../author.json";
import relativeContent1 from "../relative-content-1.json";
import relativeContent2 from "../relative-content-2.json";
import cardsContent from "../cards.json";

const MainPage = props => {
  // console.log(props);
  const corporateData = {
    colors: props.colors,
    headline: props.headline,
    subheading: props.subheading,
    btntext: props.btntext,
    bgimage: props.bgimage
  };

  return (
    <section className="pix-padding-top-50">
      {/* <MainForm className="pix_section pix-padding-v-85 light-black-bg form-container" /> */}
      <MainCorporate props={corporateData} />
      <RelativeContentBlock1 colors={props.colors} content={relativeContent1} />
      <RelativeContentBlock2 colors={props.colors} content={relativeContent2} />
      <CardsContainer colors={props.colors} content={cardsContent} />
      <TestimonialsContainer colors={props.colors} content={testimonialsData} />
      <Author author={authorData} colors={props.colors} />
      <CookieBar />
    </section>
  );
};
export default MainPage;
