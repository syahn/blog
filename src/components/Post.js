import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components";
import { Container, PostHeader, Content, CategoryLink, BodyText } from "./UI";

function Post({ post }) {
  return (
    <Container>
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <Content>
        <CategoryLink>
          <Link to={post.fields.categorySlug}>{post.frontmatter.category}</Link>
        </CategoryLink>
        <PostHeader main>{post.frontmatter.title}</PostHeader>
        <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Container>
  );
}

export default Post;
