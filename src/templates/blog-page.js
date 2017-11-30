import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PostHeader = styled.p`
  font-size: 1.5rem;
  color: #343a40;
  font-weight: 500;
`;

export default ({ data }) => {
  console.log(data);
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <Container>
        {posts
          .filter(post => post.node.frontmatter.templateKey === "blog-post")
          .map(({ node: post }) => {
            return (
              <div
                className="content"
                style={{ padding: "6em 2.5em 0" }}
                key={post.id}
              >
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
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
