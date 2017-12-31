import React from "react";
import styled from "styled-components";

export const Container = styled.nav`
  max-width: 700px;
  margin: 4rem auto;
`;

export const Content = styled.div`
  padding: 2rem 7rem 0;

  @media (max-width: 680px) {
    padding: 1rem 1.5rem 0;
  }
`;

export const CategoryLink = styled.span`
  font-size: 0.7rem;
  border-radius: 1rem;
  padding: 0.2rem 0.7rem;
  margin-right: 1rem;
  background: rgba(0, 0, 0, 0.1);
  &:hover {
    color: #1c4376;
  }
`;

export const PostHeader = styled.div`
  font-size: ${props => (props.main ? "1.5rem" : "1.3rem")};
  color: #343a40;
  font-weight: 700;
  margin-top: 0.3rem;
  line-height: 2.2rem;
`;

export const DateText = styled.small`
  color: hsla(0, 0%, 0%, 0.5);
  font-size: 0.7rem;
`;

export const BodyText = styled.p`
  font-family: "KoPub Batang";
  font-size: 0.95rem;
  font-weight: lighter;
  line-height: 1.8rem;
  margin-top: 0.35rem;

  span {
    display: block;
  }
`;
