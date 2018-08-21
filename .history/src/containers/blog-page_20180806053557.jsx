import React from "react";
import PageHeading from "../components/page-heading";
import ArticleTeaser from "../components/article-teaser";

const BlogPage = props => {
  console.log(props);
  const CreateBlogArticlesList = props => {
    const text = props.data.text;
    const articles = text.map((element, i) => (
      <ArticleTeaser
        id={element.id}
        key={i}
        heading={element.heading}
        subheading={element.subheading}
        image={element.image}
        colors={props.colors}
      />
    ));
    return <div className="article-wrapper">{articles}</div>;
  };

  return (
    <section className="blog-page-wrapper">
      <PageHeading
        heading={props.data.heading}
        subheading={props.data.subheading}
        colors={props.colors}
      />
      <CreateBlogArticlesList data={props.data} colors={props.colors} />;
    </section>
  );
};
export default BlogPage;
