import React from "react";
import styled from "styled-components";
import Post from "../components/Post";

export default ({ data }) => {
  return <Post post={data.markdownRemark} />;
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
