import React from 'react'
import styled from 'styled-components'
import Post from '../../components/Post'
import { Container, CategoryLink } from '../../components/UI'
import Helmet from 'react-helmet'
import twitterImage from '../../assets/twitter-logo.svg'

export default ({ data }) => {
  const post  = data.markdownRemark;

  return (
    <Container>
      <Helmet>
        <title>{`About | ${post.frontmatter.title}`}</title>
      </Helmet>
      <Content>
        <AboutHeader>{post.frontmatter.title}</AboutHeader>
        <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
        <TwitterLogo imageUrl={twitterImage} href="https://twitter.com/frankahn_" target="_blank" />
        <Email>{'/ frankahn9@gmail.com'}</Email>
      </Content>
    </Container>
  )
}

const Content = styled.div`
  padding: 2rem 2rem 0 10.5rem;

  @media (max-width: 680px) {
    padding: 1rem 1.5rem 0;
  }
`

const AboutHeader = styled.div`
  font-size: 1.3rem;
  color: #343a40;
  font-weight: 700;
  margin: 0.1rem 0 1.8rem;
  line-height: 2.2rem;
`

const BodyText = styled.p`
  font-family: 'KoPub Batang';
  font-weight: lighter;
  font-size: 0.95rem;
  line-height: 1.8rem;
  margin-top: 1rem;

  span {
    display: block;
  }

  @media (max-width: 486px) {
    span {
      display: inline;
    }
  }
`

const TwitterLogo = styled.a`
  background: ${props => `url(${props.imageUrl}) no-repeat`};
  position: relative;
  display: inline-block;
  top: 6px;
  left: -6px;
  width: 30px;
  height: 30px;
`

const Email = styled.span`
  position: relative;
  color: rgba(0,0,0,0.4);
  font-family: 'KoPub Batang'; 
  font-size: 0.95rem;
  top: -4px;
  left: -8px;
`;

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
