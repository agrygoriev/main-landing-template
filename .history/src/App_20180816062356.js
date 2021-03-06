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
import MainSection from "./containers/main-section";
const lang = {
  en: "en",
  de: "de",
  es: "es"
};
const privacyProps = {
  text: privacyData,
  colors: props.colors
};
const termsProps = {
  data: termsData,
  colors: props.colors
};
const blogProps = {
  heading: articles.heading,
  subheading: articles.subheading,
  articles: articles.text,
  colors: props.colors
};
const MainPageWithPropsDe = () => {
  return (
    <MainPage
      {...mainPageProps.de}
      colors={props.colors}
      lang={props.lang.de}
    />
  );
};
const MainPageWithPropsEn = () => {
  return (
    <MainPage
      {...mainPageProps.en}
      colors={props.colors}
      lang={props.lang.en}
    />
  );
};
const MainPageWithPropsEs = () => {
  return (
    <MainPage
      {...mainPageProps.es}
      colors={props.colors}
      lang={props.lang.es}
    />
  );
};
const PrivacyPolicyWithProps = props => {
  return <PrivacyPage {...privacyProps} />;
};
const ContactsPageProps = () => {
  return <ContactsPage {...props} />;
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
          <Route exact path="/es/" component={MainPageWithPropsEs} />
          <Route path="/privacy/" component={PrivacyPolicyWithProps} />
          <Route exact path="/blog/" component={BlogPageWithProps} />
          <Route path="/contacts/" component={ContactsPageProps} />
          <Route exact path="/blog/:id" component={ArticlePageWithProps} />
          <Route path="/terms/" component={TermsPageWithProps} />
          <header className="navigation">
            <NavigationBar lang={lang} logo={logo} colors={colors} />
          </header>
          <MainSection lang={lang} contacts={contacts} colors={colors} />
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
