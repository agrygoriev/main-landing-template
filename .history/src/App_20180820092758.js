import React, { Component } from "react";
import Route from "react-router-dom/Route";
import convert from "color-convert";
import logo from "./assets/img/logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/pix_style.css";
import "./App.css";

import colors from "./content/colors.json";
import contacts from "./content/contacts.json";
import footerInfo from "./content/footer.json";

import MainPage from "./containers/main-page";
import PrivacyPage from "./containers/privacy-page";
import TermsPage from "./containers/terms-page";
import BlogPage from "./containers/blog-page";
import ContactsPage from "./containers/contacts-page";

import ArticlePage from "./containers/article-page";
import termsData from "./content/terms.json";
import privacyData from "./content/privacy.json";
import mainPageProps from "./content/mainpage.json";
import navbarProps from "./content/navbar.json";

import articles from "./content/articles.json";
import testimonialsContent from "./content/testimonials.json";
import authorData from "./content/author.json";
import relativeContent1 from "./content/relative-content-1.json";
import relativeContent2 from "./content/relative-content-2.json";
import cardsContent from "./content/cards.json";
import tellMeMoreProps from "./content/tellmemore.json";
const mainPagePropsEn = {
  logo: logo,
  colors: colors,
  contacts: contacts.en,
  corporate: mainPageProps.en,
  footer: footerInfo.en,
  navbar: navbarProps.en,
  relative1: relativeContent1.en,
  relative2: relativeContent2.en,
  cards: cardsContent.en,
  author: authorData.en,
  testimonials: testimonialsContent.en,
  tellmemore: tellMeMoreProps.en
};
const mainPagePropsDe = {
  logo: logo,
  colors: colors,
  contacts: contacts.de,
  corporate: mainPageProps.de,
  footer: footerInfo.de,
  navbar: navbarProps.de,
  relative1: relativeContent1.de,
  relative2: relativeContent2.de,
  cards: cardsContent.de,
  author: authorData.de,
  testimonials: testimonialsContent.de,
  tellmemore: tellMeMoreProps.de
};
const mainPagePropsEs = {
  logo: logo,
  colors: colors,
  contacts: contacts.es,
  corporate: mainPageProps.es,
  footer: footerInfo.es,
  navbar: navbarProps.es,
  relative1: relativeContent1.es,
  relative2: relativeContent2.es,
  cards: cardsContent.es,
  author: authorData.es,
  testimonials: testimonialsContent.es,
  tellmemore: tellMeMoreProps.es
};
// console.log(mainPagePropsEn);
const privacyPropsEn = {
  text: privacyData.en,
  navbar: navbarProps.en,
  colors: colors
};
const privacyPropsDe = {
  text: privacyData.de,
  navbar: navbarProps.de,
  colors: colors
};
const privacyPropsEs = {
  text: privacyData.es,
  navbar: navbarProps.es,
  colors: colors
};
const termsProps = {
  data: termsData,
  colors: colors
};
const blogPropsEn = {
  heading: articles.en.heading,
  subheading: articles.en.subheading,
  articles: articles.en.text,
  colors: colors,
  btntext: articles.en.btntext,
  navbar: navbarProps.en,
  contacts: contacts.en,
  tellmemore: tellMeMoreProps.en,
  footer: footerInfo.en
};
const blogPropsDe = {
  heading: articles.de.heading,
  subheading: articles.de.subheading,
  articles: articles.de.text,
  colors: colors,
  btntext: articles.de.btntext,
  navbar: navbarProps.de,
  contacts: contacts.de,
  tellmemore: tellMeMoreProps.de,
  footer: footerInfo.de
};
const blogPropsEs = {
  heading: articles.es.heading,
  subheading: articles.es.subheading,
  articles: articles.es.text,
  colors: colors,
  btntext: articles.es.btntext,
  navbar: navbarProps.es,
  contacts: contacts.es,
  tellmemore: tellMeMoreProps.es,
  footer: footerInfo.es
};
const MainPageWithPropsDe = () => {
  return <MainPage {...mainPagePropsDe} />;
};
const MainPageWithPropsEn = () => {
  return <MainPage {...mainPagePropsEn} />;
};
const MainPageWithPropsEs = () => {
  return <MainPage {...mainPagePropsEs} />;
};
const PrivacyPolicyWithPropsEn = () => {
  return <PrivacyPage {...privacyPropsEn} />;
};
const PrivacyPolicyWithPropsDe = () => {
  return <PrivacyPage {...privacyPropsDe} />;
};
const PrivacyPolicyWithPropsEs = () => {
  return <PrivacyPage {...privacyPropsEs} />;
};
const ContactsPagePropsEn = () => {
  return <ContactsPage {...contacts.en} />;
};
const ContactsPagePropsDe = () => {
  return <ContactsPage {...contacts.de} />;
};
const ContactsPagePropsEs = () => {
  return <ContactsPage {...contacts.es} />;
};
const BlogPageWithPropsEn = () => {
  return <BlogPage {...blogPropsEn} />;
};
const BlogPageWithPropsDe = () => {
  return <BlogPage {...blogPropsDe} />;
};
const BlogPageWithPropsEs = () => {
  return <BlogPage {...blogPropsEs} />;
};
// const ArticlePageWithPropsEn = () => {
//   return <ArticlePage {...blogPropsEn} {...props} />;
// };
// const TermsPageWithProps = () => {
//   return <TermsPage {...termsProps} />;
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en"
    };
    const hex2RgbColor = color => convert.hex.rgb(color);
    colors.primaryRgb = hex2RgbColor(colors.primary);
    colors.secondaryRgb = hex2RgbColor(colors.secondary);
    colors.tertiaryRgb = hex2RgbColor(colors.tertiary);
    // console.log(colors);
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={MainPageWithPropsEn} />
          <Route exact path="/de/" component={MainPageWithPropsDe} />
          <Route exact path="/es/" component={MainPageWithPropsEs} />
          <Route path="/privacy/" component={PrivacyPolicyWithPropsEn} />
          <Route path="/de/privacy/" component={PrivacyPolicyWithPropsDe} />
          <Route path="/es/privacy/" component={PrivacyPolicyWithPropsEs} />
          <Route exact path="/blog/" component={BlogPageWithPropsEn} />
          <Route exact path="/de/blog/" component={BlogPageWithPropsDe} />
          <Route exact path="/es/blog/" component={BlogPageWithPropsEs} />
          <Route path="/contacts/" component={ContactsPagePropsEn} />
          <Route exact path="/de/contacts/" component={ContactsPagePropsDe} />
          <Route exact path="/es/contacts/" component={ContactsPagePropsDe} />
          {/*<Route path="/terms/" component={TermsPageWithProps} />
          <TellMeMore
            heading={tellMeMoreProps.heading}
            text={tellMeMoreProps.text}
            btntext={tellMeMoreProps.btntext}
            colors={colors}
          />
          <Route exact path="/blog/:id" component={ArticlePageWithProps} /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
