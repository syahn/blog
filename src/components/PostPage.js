import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import DateConverter from "../utils/DateCoverter";
import {
  Container,
  Content,
  CategoryLink,
  PostHeader,
  BodyText,
  DateText
} from "./UI";

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
              <DateText>{DateConverter(post.frontmatter.date)}</DateText>
              <BodyText>{post.excerpt}</BodyText>
            </Link>
          </Content>
        );
      })}
    </Container>
  );
}
