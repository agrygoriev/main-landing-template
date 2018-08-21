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
import TellMeMore from "../components/tell-me-more";
import FooterBlock from "./footer";

const MainPage = props => {
  console.log(props);
  return (
    <React.Fragment>
      <NavigationBar navbar={props.navbar} logo={logo} colors={props.colors} />
      <section className="pix-padding-top-50">
        {/* <MainForm className="pix_section pix-padding-v-85 light-black-bg form-container" /> */}
        <MainCorporate
          lang={props.lang}
          content={props.corporate}
          colors={props.colors}
        />
        <RelativeContentBlock1
          content={props.relative1}
          colors={props.colors}
        />
        <RelativeContentBlock2
          content={props.relative2}
          colors={props.colors}
        />
        <CardsContainer content={props.cards} colors={props.colors} />
        <TestimonialsContainer
          content={props.testimonials}
          colors={props.colors}
        />
        <Author content={props.author} colors={props.colors} />
        <TellMeMore content={props.tellmemore} colors={props.colors} />
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
