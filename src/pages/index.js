import React from "react";
import Link, {withPrefix} from "gatsby-link";
import Helmet from "react-helmet";
import Script from "react-load-script";
import styled from "styled-components";
import PostPage from "../components/PostPage";
import logo from "../../src/favicon.png";
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
    const { allMarkdownRemark, site } = this.props.data;
    const posts = allMarkdownRemark.edges;
    const siteMeta = site.siteMetadata;

    return (
      <div>
        <Helmet>
          <title>{"Frank's"}</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:creator"
            content={siteMeta.author.twitter}
          />
          <meta name="twitter:title" content={"Frank's"} />
          <meta name="twitter:description" content={"Frank's blog"} />
          <meta name="twitter:image" content={siteMeta.siteUrl + logo} />
        </Helmet>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Container>
          <PostPage posts={posts} />
        </Container>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteUrl
        author {
          twitter
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            excerpt
            title
            date(formatString: "YYYY-MM-DD")
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
