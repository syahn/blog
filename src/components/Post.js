import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components";
import DateConverter from "../utils/DateCoverter";
import ReactDisqusComments from "react-disqus-comments";
import {
  Container,
  PostHeader,
  Content,
  CategoryLink,
  BodyText,
  DateText
} from "./UI";

function Post({ post, site }) {
  if (post === null) {
    return null;
  } 

  return (
    <Container>
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <Content>
        <CategoryLink>
          <Link to={post.fields.categorySlug}>{post.frontmatter.category}</Link>
        </CategoryLink>
        <PostHeader main>{post.frontmatter.title}</PostHeader>
        <DateText>{DateConverter(post.frontmatter.date)}</DateText>
        <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <ReactDisqusComments
          shortname={site.siteMetadata.disqusID}
          identifier={post.frontmatter.title}
          title={post.frontmatter.title}
          url={site.siteMetadata.siteUrl + post.frontmatter.path}
          category_id={post.id}
        /> */}
      </Content>
    </Container>
  );
}

export default Post;
