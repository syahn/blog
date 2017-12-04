import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Post from "../components/Post";

export default ({ data }) => {
  return <Post post={data.markdownRemark} />;
};

export const pageQuery = graphql`
  query TechPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        description
        category
      }
      fields {
        categorySlug
      }
    }
  }
`;
