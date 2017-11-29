import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Script from "react-load-script";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const PostHeader = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Container>
          {posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({ node: post }) => {
              return (
                <div
                  className="content"
                  style={{ padding: "2em 4em" }}
                  key={post.id}
                >
                  <PostHeader>
                    <Link
                      className="has-text-primary"
                      to={post.frontmatter.path}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </PostHeader>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>

                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link
                      className="button is-small"
                      to={post.frontmatter.path}
                    >
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              );
            })}
        </Container>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
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
