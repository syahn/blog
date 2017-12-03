import React from "react";
// import PropTypes from 'prop-types';
import Link from "gatsby-link";
import Helmet from "react-helmet";
import kebabCase from "lodash/kebabCase";
import styled from "styled-components";
// import Sidebar from '../components/Sidebar';

class CategoriesRoute extends React.Component {
  render() {
    console.log("site", this.props.data);
    const { title } = this.props.data.site.siteMetadata;
    const categories = this.props.data.allMarkdownRemark.group;

    return (
      <Container>
        <Helmet title={`All Categories - ${title}`} />
        <h1>Categories</h1>
        {categories.map(category => (
          <li key={category.fieldValue} className="categories__list-item">
            <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  max-width: 300px;
  margin: 5rem auto;
`;

// CategoriesRoute.propTypes = {
//   data: PropTypes.shape({
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired
//       })
//     }),
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.array.isRequired
//     })
//   })
// };

export default CategoriesRoute;

export const pageQuery = graphql`
  query CategoryesQuery {
    site {
      siteMetadata {
        title
        menu {
          label
          path
        }
      }
    }
    allMarkdownRemark(
      limit: 200
      filter: { frontmatter: { layout: { eq: "post" } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
