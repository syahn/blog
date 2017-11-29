import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const PostHeader = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <section className="section">
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PostHeader>{post.frontmatter.title}</PostHeader>
            <p>{post.frontmatter.description}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
