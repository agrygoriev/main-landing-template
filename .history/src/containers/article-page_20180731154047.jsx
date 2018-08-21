import React from "react";
import GenerateArticleHeading from "../components/generate-article-heading";
import GenerateArticleText from "../components/generate-article-text";

const ArticlePage = props => {
  // console.log(props);
  const articleId = props.data.text;
  const paramId = props.match.params.id;
  const result = articleId.filter(
    props => parseInt(props.id, 10) === parseInt(paramId, 10)
  );

  return (
    <section className="blog-page-wrapper">
      <GenerateArticleHeading data={result} colors={props.data.colors} />
      <GenerateArticleText data={result} />
    </section>
  );
};
export default ArticlePage;
