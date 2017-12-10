import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import moment from "moment";
import { Container, Content, CategoryLink, PostHeader, BodyText } from "./UI";

export default function PostPage({ posts }) {
  return (
    <Container>
      {posts.map(({ node: post }) => {
        return (
          <Content key={post.id}>
            <CategoryLink>
              <Link to={post.fields.categorySlug}>
                {post.frontmatter.category}
              </Link>
            </CategoryLink>
            <Link to={post.frontmatter.path}>
              <PostHeader>{post.frontmatter.title}</PostHeader>
              <small>{moment(post.frontmatter.date).format("MMM Do YY")}</small>
              <BodyText>{post.excerpt}</BodyText>
            </Link>
          </Content>
        );
      })}
    </Container>
  );
}
