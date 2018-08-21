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

// import MainSection from "./containers/main-section";
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
// console.log(mainPagePropsEn);
const privacyProps = {
  text: privacyData,
  colors: colors
};
const termsProps = {
  data: termsData,
  colors: colors
};
const blogProps = {
  heading: articles.heading,
  subheading: articles.subheading,
  articles: articles.text,
  colors: colors
};
const MainPageWithPropsDe = () => {
  return <MainPage {...mainPagePropsDe} />;
};
const MainPageWithPropsEn = () => {
  return <MainPage {...mainPagePropsEn} />;
};
const MainPageWithPropsEs = () => {
  return <MainPage {...mainPageProps.es} colors={colors} />;
};
const PrivacyPolicyWithPropsEn = () => {
  return <PrivacyPage {...privacyProps.en} />;
};
const PrivacyPolicyWithPropsDe = () => {
  return <PrivacyPage {...privacyProps.de} />;
};
const ContactsPageProps = () => {
  return <ContactsPage {...contacts} />;
};
const BlogPageWithProps = () => {
  return <BlogPage {...blogProps} />;
};
const ArticlePageWithProps = props => {
  return <ArticlePage {...blogProps} {...props} />;
};
const TermsPageWithProps = () => {
  return <TermsPage {...termsProps} />;
};

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
          <Route path="/es/" component={MainPageWithPropsEs} />
          {/* <NavigationBar lang={lang} logo={logo} colors={colors} />
          <Route path="/privacy/" component={PrivacyPolicyWithProps} />
          <Route exact path="/blog/" component={BlogPageWithProps} />
          <Route path="/contacts/" component={ContactsPageProps} />
          <Route path="/terms/" component={TermsPageWithProps} />
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
