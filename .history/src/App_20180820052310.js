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
import NavigationBar from "./containers/nav-bar";

// import MainSection from "./containers/main-section";
import MainPage from "./containers/main-page";
import PrivacyPage from "./containers/privacy-page";
import TermsPage from "./containers/terms-page";
import BlogPage from "./containers/blog-page";
import ContactsPage from "./containers/contacts-page";
import TellMeMore from "./components/tell-me-more";
import ArticlePage from "./containers/article-page";
import termsData from "./content/terms.json";
import privacyData from "./content/privacy.json";
import mainPageProps from "./content/mainpage.json";
import navbarProps from "./content/navbar.json";
import tellMeMoreProps from "./content/tellmemore.json";
import articles from "./content/articles.json";
import testimonialsContent from "../content/testimonials.json";
import authorData from "../content/author.json";
import relativeContent1 from "../content/relative-content-1.json";
import relativeContent2 from "../content/relative-content-2.json";
import cardsContent from "../content/cards.json";
const lang = "en";
const mainPagePropsEn = {};
const mainPagePropsDe = {};
// const mainPagePropsEs = {};
mainPagePropsEn.contacts = contacts.en;
mainPagePropsEn.corporate = mainPageProps.en;
mainPagePropsEn.navbar = navbarProps.en;
mainPagePropsEn.relative1 = relativeContent1.en;
mainPagePropsEn.relative2 = relativeContent2.en;
mainPagePropsDe.contacts = contacts.de;
mainPagePropsDe.corporate = mainPageProps.de;
mainPagePropsDe.navbar = navbarProps.de;
mainPagePropsDe.relative1 = relativeContent1.de;
mainPagePropsDe.relative2 = relativeContent2.de;
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
  return <MainPage {...mainPagePropsDe} colors={colors} lang={lang.de} />;
};
const MainPageWithPropsEn = () => {
  return <MainPage {...mainPagePropsEn} colors={colors} lang={lang.en} />;
};
const MainPageWithPropsEs = () => {
  return <MainPage {...mainPageProps.es} colors={colors} lang={lang.es} />;
};
const PrivacyPolicyWithProps = () => {
  return <PrivacyPage {...privacyProps} />;
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
          <Route path="/en/" component={MainPageWithPropsEn} />
          <Route path="/de/" component={MainPageWithPropsDe} />
          <Route path="/es/" component={MainPageWithPropsEs} />
          {/* <NavigationBar lang={lang} logo={logo} colors={colors} /> */}
          <Route exact path="/" component={MainPageWithPropsEn} />
          <Route exact path="/de/" component={MainPageWithPropsDe} />
          <Route exact path="/es/" component={MainPageWithPropsEs} />
          {/*<Route path="/privacy/" component={PrivacyPolicyWithProps} />
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
