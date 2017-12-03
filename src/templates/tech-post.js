import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Post>
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <PostHeader>{post.frontmatter.title}</PostHeader>
      <PostBody>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p>{post.frontmatter.description}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </PostBody>
    </Post>
  );
}

const Post = styled.section`
  margin: 7rem auto;
  max-width: 800px;
`;

const PostHeader = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const PostBody = styled.div`
  margin: 0 auto;
`;

export const pageQuery = graphql`
  query TechPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        description
      }
    }
  }
`;
