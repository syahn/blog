import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Script from "react-load-script";
import styled from "styled-components";
import { Container, Content, CategoryLink, PostHeader } from "../components/UI";

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
                <Link to={post.frontmatter.path}>
                  <PostHeader>{post.frontmatter.title}</PostHeader>
                  <small>{post.frontmatter.date}</small>
                  <p>{post.excerpt}</p>
                </Link>
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
