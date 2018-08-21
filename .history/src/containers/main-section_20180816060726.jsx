import React from "react";
import Route from "react-router-dom/Route";
import MainPage from "./main-page";
import PrivacyPage from "./privacy-page";
import TermsPage from "./terms-page";
import BlogPage from "./blog-page";
import ContactsPage from "./contacts-page";
import TellMeMore from "../components/tell-me-more";
import ArticlePage from "./article-page";
import termsData from "../content/terms.json";
import privacyData from "../content/privacy.json";
import mainPageProps from "../content/mainpage.json";
import tellMeMoreProps from "../content/tellmemore.json";
import articles from "../content/articles.json";

const MainSection = props => {
  // console.log(props);
  console.log(mainPageProps);
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
  const mainPagePropsDe = {};
  // console.log(privacyProps);
  const MainPageWithProps = () => {
    return (
      <MainPage {...mainPageProps} colors={props.colors} lang={props.lang.en} />
    );
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

  return (
    <main>
      <Route exact path="/" component={MainPageWithProps} />
      <Route exact path="/de/" component={MainPageWithPropsDe} />
      <Route path="/privacy/" component={PrivacyPolicyWithProps} />
      <Route exact path="/blog/" component={BlogPageWithProps} />
      <Route path="/contacts/" component={ContactsPageProps} />
      <Route exact path="/blog/:id" component={ArticlePageWithProps} />
      <Route path="/terms/" component={TermsPageWithProps} />
      <TellMeMore
        heading={tellMeMoreProps.heading}
        text={tellMeMoreProps.text}
        btntext={tellMeMoreProps.btntext}
        colors={props.colors}
      />
    </main>
  );
};
export default MainSection;
