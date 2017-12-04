import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { Container, PostHeader } from "../components/UI";

export default ({ data }) => {
  let posts;

  if (data.allMarkdownRemark !== null) {
    const { edges } = data.allMarkdownRemark;
    posts = edges;
  } else {
    return;
  }

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
