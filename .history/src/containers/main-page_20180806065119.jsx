import React from "react";
import RelativeContentBlock1 from "../components/relative-content-1";
import RelativeContentBlock2 from "../components/relative-content-2";
import CardsContainer from "./cards-container";
import Author from "../components/author";
// import MainForm from "./main-form";
import CookieBar from "../components/cookie-bar";
import TestimonialsContainer from "./testimonials-container";
import MainCorporate from "./main-corporate";
import testimonialsContent from "../testimonials.json";
import authorData from "../author.json";
import relativeContent1 from "../relative-content-1.json";
import relativeContent2 from "../relative-content-2.json";
import cardsContent from "../cards.json";

const MainPage = props => {
  // console.log(props.colors);
  const corporateContent = {
    headline: props.headline,
    subheading: props.subheading,
    btntext: props.btntext,
    bgimage: props.bgimage
  };

  return (
    <section className="pix-padding-top-50">
      {/* <MainForm className="pix_section pix-padding-v-85 light-black-bg form-container" /> */}
      <MainCorporate content={corporateContent} colors={props.colors} />
      <RelativeContentBlock1 content={relativeContent1} colors={props.colors} />
      <RelativeContentBlock2 content={relativeContent2} colors={props.colors} />
      <CardsContainer content={cardsContent} colors={props.colors} />
      <TestimonialsContainer
        content={testimonialsContent}
        colors={props.colors}
      />
      <Author content={authorData} colors={props.colors} />
      <CookieBar />
    </section>
  );
};
export default MainPage;
