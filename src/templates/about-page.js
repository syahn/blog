import React from "react";
import styled from "styled-components";

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Post>
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {post.frontmatter.title}
      </h2>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Post>
  );
};
const Post = styled.section`
  margin: 7rem auto;
  max-width: 800px;
`;

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
