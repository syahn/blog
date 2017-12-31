import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components";
import DateConverter from "../utils/DateCoverter";
import config from "../../gatsby-config";
import ReactDisqusComments from "react-disqus-comments";
import logo from "../../src/favicon.png";
import {
  Container,
  PostHeader,
  Content,
  CategoryLink,
  BodyText,
  DateText
} from "./UI";

function Post({ post, site }) {
  if (post === null) {
    return null;
  }

  const { title, category, date } = post.frontmatter;
  
  return (
    <Container>
      <Helmet>
        <title>{`Frank's | ${title}`}</title>
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={site.siteMetadata.author.twitter}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={logo} />
        <meta name="twitter:image:alt" content={"Frank's"} /> 
      </Helmet>

      <Content>
        <CategoryLink>
          <Link to={post.fields.categorySlug}>{category}</Link>
        </CategoryLink>
        <PostHeader main>{title}</PostHeader>
        <DateText>{DateConverter(date)}</DateText>
        <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <ReactDisqusComments
          shortname={site.siteMetadata.disqusID}
          identifier={title}
          title={title}
          url={site.siteMetadata.siteUrl + post.frontmatter.path}
          category_id={post.id}
        /> */}
      </Content>
    </Container>
  );
}

export default Post;
