import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import github from "../img/github-icon.svg";
import styled from "styled-components";
import Header from "../components/Header";

import "../assets/main.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Frank's" />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
