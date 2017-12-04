import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { Container, Content, CategoryLink, PostHeader } from "../components/UI";

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <Container>
        {posts
          .filter(post => post.node.frontmatter.templateKey === "tech-post")
          .map(({ node: post }) => {
            return (
              <Content key={post.id}>
                <CategoryLink>
                  <Link to={post.fields.categorySlug}>
                    {post.frontmatter.category}
                  </Link>
                </CategoryLink>
                <PostHeader>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
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
              </Content>
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
  query TechQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
