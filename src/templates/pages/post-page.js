import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import PostPage from "../../components/PostPage";
import { Container, Content } from "../../components/UI";

const PostHeader = styled.p`
  font-size: 1.5rem;
  color: #343a40;
  font-weight: 500;
`;

export default ({ data }) => {
  let { edges: posts } = data.allMarkdownRemark;

  return <PostPage posts={posts} />;
};

const Post = styled.section`
  margin: 7rem auto;
  max-width: 800px;
`;

export const pageQuery = graphql`
  query PageQuery($path: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { menu: { eq: $path } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
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
