import React from "react";
import RelativeContentBlock1 from "../components/relative-content-1";
import RelativeContentBlock2 from "../components/relative-content-2";
import CardsContainer from "./cards-container";
import Author from "../components/author";
// import MainForm from "./main-form";
import CookieBar from "../components/cookie-bar";
import TestimonialsContainer from "./testimonials-container";
import MainCorporate from "./main-corporate";
import relativeContentBg from "../assets/img/bg-highlight-left.jpg";
import testimonialsData from "../testimonials.json";

const MainPage = props => {
  // console.log(props);
  const corporateData = {
    colors: props.colors,
    headline: props.headline,
    subheading: props.subheading,
    btntext: props.btntext,
    bgimage: props.bgimage
  };
  const relativeContent1 = {
    bgimage: { relativeContentBg },
    icon: "block-icon-1.svg",
    heading: "Financial independence is your freedom to choose",
    p1:
      "The key to financial freedom is very simple: convert your regular earned income into passive income or portfolio income.",
    p2:
      "Investing, budgeting, insurance, mortgages,credit, increasing income are an overwhelming areas of finance, so start small and learn what you can. Understanding the basics of money management will allow you to live well today and build a strong financial future.",
    p3:
      "Instead of the general advice you’ll get in personal views and you’ll learn what challenges real people are facing. With this in mind, it is very easy to achieve the goals you desire without giving up on things that you hold close to your heart."
  };
  const relativeContent2 = {
    image: "block-image-2.jpg",
    heading: "What you need to know to be ready for retirement",
    p1:
      "Are you expecting a company pension? How much will your Social Security payments be? These numbers will help you figure out how much you’ll need to save to have the standard of living that you want."
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
  const author = {
    name: "Jerry Kimes",
    title: "Financial Advisor",
    about:
      "My name is Jerry K. Kimes and I'm an independent financial planner and advisor located in Spingfield, New York. I was made a lot of mistakes before, sometimes crucial mistakes, which was shaped my financial future wrong way. I prided myself on what I created – maybe you’ve read before one of my blogs – InvestingFuture.com and PlanYourLife.com, or my book 'Beginner's Investments Guide'. Also I am an author of several articles for financial magazines all over the world and bunch of training programs. Everywhere I intended to show you my philosophies and strategies for saving and growing personal financial wealth, and here I also want to share best-practice tips to help you prepare for financial independence."
  };
  return (
    <section className="pix-padding-top-50">
      {/* <MainForm className="pix_section pix-padding-v-85 light-black-bg form-container" /> */}
      <MainCorporate props={corporateData} />
      <RelativeContentBlock1
        colors={corporateData.colors}
        content={relativeContent1}
      />
      <RelativeContentBlock2
        colors={corporateData.colors}
        content={relativeContent2}
      />
      <CardsContainer colors={props.colors} content={cardsContent} />
      <TestimonialsContainer {...testimonialsData} colors={props.colors} />
      <Author
        name={author.name}
        title={author.title}
        about={author.about}
        colors={corporateData.colors}
      />
      <CookieBar />
    </section>
  );
};
export default MainPage;
