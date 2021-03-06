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
import FooterBlock from "./containers/footer";
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
import tellMeMoreProps from "./content/tellmemore.json";
import articles from "./content/articles.json";
const lang = "en";
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
const NavigationBarWithProps = match => {
  return (
    <NavigationBar match={{ match }} lang={lang} logo={logo} colors={colors} />
  );
};
const MainPageWithPropsDe = () => {
  return <MainPage {...mainPageProps.de} colors={colors} lang={lang.de} />;
};
const MainPageWithPropsEn = () => {
  return <MainPage {...mainPageProps.en} colors={colors} lang={lang.en} />;
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
          <Route path="/:id" component={NavigationBarWithProps} />
          {/* <NavigationBar lang={lang} logo={logo} colors={colors} /> */}
          {/* <Route exact path="/" component={MainPageWithPropsEn} />
          <Route exact path="/de/" component={MainPageWithPropsDe} />
          <Route exact path="/es/" component={MainPageWithPropsEs} />
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
          <FooterBlock
            lang={lang}
            info={footerInfo}
            contacts={contacts}
            logo={logo}
            colors={colors}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
