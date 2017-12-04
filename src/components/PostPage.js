import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { Container, Content, CategoryLink, PostHeader } from "../components/UI";

export default function PostPage({ posts }) {
  return (
    <Container>
      {posts.map(({ node: post }) => {
        return (
          <Content key={post.id}>
            <Link to={post.frontmatter.path}>
              <CategoryLink>
                <Link to={post.fields.categorySlug}>
                  {post.frontmatter.category}
                </Link>
              </CategoryLink>
              <PostHeader>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </PostHeader>
              <small>{post.frontmatter.date}</small>
              <p>{post.excerpt}</p>
            </Link>
          </Content>
        );
      })}
    </Container>
  );
}
