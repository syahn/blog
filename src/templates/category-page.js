import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { Container } from "../components/UI";

const PostHeader = styled.p`
  font-size: 1.5rem;
  color: #343a40;
  font-weight: 500;
`;

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <Container>
        {posts.map(({ node: post }) => {
          return (
            <div
              className="content"
              style={{ padding: "6em 2.5em 0" }}
              key={post.id}
            >
              <PostHeader>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </PostHeader>

              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>

              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.frontmatter.path}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          );
        })}
      </Container>
    </div>
  );
};
const Post = styled.section`
  margin: 7rem auto;
  max-width: 800px;
`;

export const pageQuery = graphql`
  query CategoryQuery($category: String) {
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
        }
      }
    }
  }
`;
