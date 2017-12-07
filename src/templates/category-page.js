import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import PostPage from "../components/PostPage";
import { Container, PostHeader, Content, CategoryLink } from "../components/UI";

export default ({ data }) => {
  console.log(data);
  const { edges: posts } = data.allMarkdownRemark;

  return <PostPage posts={posts} />;
};

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: $category }, layout: { eq: "post" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
