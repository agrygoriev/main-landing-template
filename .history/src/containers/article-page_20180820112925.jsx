import React from "react";
import logo from "../assets/img/logo.svg";
import GenerateArticleHeading from "../components/generate-article-heading";
import GenerateArticleText from "../components/generate-article-text";
import NavigationBar from "./nav-bar";
import FooterBlock from "./footer";

const ArticlePage = props => {
  console.log(props);
  const articleId = props.content.articles;
  const paramId = props.match.params.id;
  const result = articleId.filter(
    props => parseInt(props.id, 10) === parseInt(paramId, 10)
  );
  // console.log(result);
  return (
    <React.Fragment>
      <NavigationBar navbar={props.navbar} logo={logo} colors={props.colors} />
      <section className="blog-page-wrapper">
        <GenerateArticleHeading data={result} colors={props.content.colors} />
        <GenerateArticleText data={result} />
      </section>
      <FooterBlock
        lang={props.lang}
        info={props.footer}
        contacts={props.contacts}
        logo={props.logo}
        colors={props.colors}
      />
    </React.Fragment>
  );
};
export default ArticlePage;
