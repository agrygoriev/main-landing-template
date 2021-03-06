import React from "react";
import Route from "react-router-dom/Route";
import MainPage from "./main-page";
import PrivacyPage from "./privacy-page";
import TermsPage from "./terms-page";
import BlogPage from "./blog-page";
import ContactsPage from "./contacts-page";
import TellMeMore from "../components/tell-me-more";
import ArticlePage from "./article-page";
import termsData from "../terms.json";
import privacyData from "../privacy.json";
import mainPageProps from "../mainpage.json";
import tellMeMoreProps from "../tellmemore.json";
const MainSection = props => {
  const privacyProps = {
    text: privacyData,
    colors: props.colors
  };
  const termsProps = {
    data: termsData,
    colors: props.colors
  };
  // console.log(privacyProps);
  const MainPageWithProps = () => {
    return <MainPage {...mainPageProps} colors={props.colors} />;
  };
  const PrivacyPolicyWithProps = props => {
    return <PrivacyPage {...privacyProps} />;
  };
  const ContactsPageProps = () => {
    return <ContactsPage {...props} />;
  };
  const BlogPageWithProps = () => {
    return <BlogPage data={blogProps} />;
  };
  const ArticlePageWithProps = props => {
    return <ArticlePage data={blogProps} {...props} />;
  };
  const TermsPageWithProps = props => {
    return <TermsPage {...termsProps} />;
  };

  return (
    <main>
      <Route exact path="/" component={MainPageWithProps} />
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
