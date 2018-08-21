import React from "react";
import logo from "../assets/img/logo.svg";
import NavigationBar from "./nav-bar";
import RelativeContentBlock1 from "../components/relative-content-1";
import RelativeContentBlock2 from "../components/relative-content-2";
import CardsContainer from "./cards-container";
import Author from "../components/author";
// import MainForm from "./main-form";
import CookieBar from "../components/cookie-bar";
import TestimonialsContainer from "./testimonials-container";
import MainCorporate from "./main-corporate";
import FooterBlock from "./footer";
import navbar from "../content/navbar.json";
import testimonialsContent from "../content/testimonials.json";
import authorData from "../content/author.json";
import relativeContent1 from "../content/relative-content-1.json";
import relativeContent2 from "../content/relative-content-2.json";
import cardsContent from "../content/cards.json";

const MainPage = props => {
  console.log(props);
  const corporateContent = {
    headline: props.headline,
    subheading: props.subheading,
    btntext: props.btntext,
    bgimage: props.bgimage
  };

  return (
    <React.Fragment>
      <NavigationBar {...navbar} logo={logo} colors={props.colors} />
      <section className="pix-padding-top-50">
        {/* <MainForm className="pix_section pix-padding-v-85 light-black-bg form-container" /> */}
        <MainCorporate
          lang={props.lang}
          content={corporateContent}
          colors={props.colors}
        />
        <RelativeContentBlock1
          content={relativeContent1}
          colors={props.colors}
        />
        <RelativeContentBlock2
          content={relativeContent2}
          colors={props.colors}
        />
        <CardsContainer content={cardsContent} colors={props.colors} />
        <TestimonialsContainer
          content={testimonialsContent}
          colors={props.colors}
        />
        <Author content={authorData} colors={props.colors} />
        <CookieBar />
      </section>
      <FooterBlock
        lang={props.lang}
        info={props.footerInfo}
        contacts={props.contacts}
        logo={props.logo}
        colors={props.colors}
      />
    </React.Fragment>
  );
};
export default MainPage;
