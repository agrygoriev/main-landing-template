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
const MainPage = props => {
  // console.log(props);
  const corporateData = {
    colors: props.colors,
    headline: props.headline,
    subheading: props.subheading,
    btntext: props.btntext,
    bgimage: props.bgimage
  };

  const cardsContent = {
    heading: "Not everyone inherits a fortune",
    subheading:
      "Financial independence takes work and discipline, but small steps can yield big rewards over time.",
    cards: [
      {
        id: 1,
        color: "#000080",
        heading: "Build smarter safety nets",
        text:
          "Emergency funds and insurance are part of the financial planning picture, but they’re rarely discussed in combination. The traditional definition of an emergency fund is a separate account for cash that can be used instead of credit in a sudden emergency like an unexpected car or appliance repair. But it might be wise to evaluate current deductibles on home, car and health insurance to see if those amounts should be built into one’s emergency fund - many people keep deductibles fairly high to keep premiums low. Would you have cash on hand to cover deductibles if you had a sudden claim? If not, put that money in reserve."
      },
      {
        id: 2,
        color: "#008000",
        heading: "Downsize",
        text:
          "Whether you are age 20 or 50, financial independence requires a personal evaluation of what money, property and items you will need to live happily and securely. It might also help to stop any “Keeping up with the Joneses” you’ve done in the past that’s unduly influenced your spending. Generally, you’ll get to your goal faster if you can cut your overall living expenses. For some, that means selling your home and moving to a smaller one or to an area with lower living costs and taxes. You can also sell or donate property you don’t need and use those proceeds to extinguish debt or add to savings or investments."
      },
      {
        id: 3,
        color: "#FFA500",
        heading: "Always know where you are financially",
        text:
          "Financial planning isn’t about making one set of financial decisions and assuming you’re set. Lives and situations change and your financial planning must be flexible enough to withstand both positive and negative changes without derailing your hopes for financial independence. If your forte is not investing, financial planning or tax matters, by all means bring in qualified experts to help. But financially independent people generally have their money issues at their fingertips not only for their own use, but for estate purposes as well."
      }
    ]
  };
  return (
    <section className="pix-padding-top-50">
      {/* <MainForm className="pix_section pix-padding-v-85 light-black-bg form-container" /> */}
      <MainCorporate props={corporateData} />
      <RelativeContentBlock1 colors={props.colors} content={relativeContent1} />
      <RelativeContentBlock2 colors={props.colors} content={relativeContent2} />
      <CardsContainer colors={props.colors} content={cardsContent} />
      <TestimonialsContainer {...testimonialsData} colors={props.colors} />
      <Author author={authorData} colors={props.colors} />
      <CookieBar />
    </section>
  );
};
export default MainPage;
