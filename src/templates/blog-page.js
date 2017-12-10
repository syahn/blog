import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import PostPage from "../components/PostPage";
import { Container, Content } from "../components/UI";

const PostHeader = styled.p`
  font-size: 1.5rem;
  color: #343a40;
  font-weight: 500;
`;

export default ({ data }) => {
  let { edges } = data.allMarkdownRemark;
  const posts = edges.filter(
    post => post.node.frontmatter.templateKey === "blog-post"
  );

  return <PostPage posts={posts} />;
};

const Post = styled.section`
  margin: 7rem auto;
  max-width: 800px;
`;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date
            path
            category
          }
          fields {
            categorySlug
          }
        }
      }
    }
  }
`;
