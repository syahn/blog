import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Post from "../components/Post";

export default ({ data }) => {
  return <Post post={data.markdownRemark} site={data.site} />;
};

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    site {
      siteMetadata {
        disqusID
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
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

// (formatString: "DD MMMM, YYYY")
