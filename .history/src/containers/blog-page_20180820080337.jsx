import React from "react";
import PageHeading from "../components/page-heading";
import ArticleTeaser from "../components/article-teaser";

const BlogPage = props => {
  console.log(props);
  const CreateBlogArticlesList = props => {
    console.log(props);
    const text = props.data;
    const articles = text.map((element, i) => (
      <ArticleTeaser
        id={element.id}
        key={i}
        heading={element.heading}
        subheading={element.subheading}
        image={element.image}
        colors={props.colors}
        btntext={props.btntext}
      />
    ));
    return <div className="article-wrapper">{articles}</div>;
  };

  return (
    <section className="blog-page-wrapper">
      <PageHeading
        heading={props.heading}
        subheading={props.subheading}
        colors={props.colors}
      />
      <CreateBlogArticlesList data={props.articles} colors={props.colors} />;
    </section>
  );
};
export default BlogPage;
