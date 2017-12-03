import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Script from "react-load-script";
import styled from "styled-components";
import { Container, Content } from "../components/UI";

const CategoryLink = styled.span`
  border-radius: 1rem;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
  background: rgba(0, 0, 0, 0.1);
`;

const PostHeader = styled.div`
  font-size: 2rem;
  color: #343a40;
  font-weight: 500;
  margin: 1rem 0;
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
          {posts.map(({ node: post }) => {
            return (
              <Content key={post.id}>
                <CategoryLink>
                  <Link to={post.fields.categorySlug}>
                    {post.frontmatter.category}
                  </Link>
                </CategoryLink>

                <small>{post.frontmatter.date}</small>
                <PostHeader>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </PostHeader>

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
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } }
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
          fields {
            categorySlug
          }
        }
      }
    }
  }
`;
