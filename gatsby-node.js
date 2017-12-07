const path = require("path");
const _ = require("lodash");

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === "File") {
    const parsedFilePath = path.parse(node.absolutePath);
    const slug = `/${parsedFilePath.dir.split("---")[1]}/`;
    createNodeField({ node, name: "slug", value: slug });
  } else if (
    node.internal.type === "MarkdownRemark" &&
    typeof node.slug === "undefined"
  ) {
    const fileNode = getNode(node.parent);
    let slug = fileNode.fields.slug;

    if (typeof node.frontmatter.path !== "undefined") {
      slug = node.frontmatter.path;
    }
    createNodeField({
      node,
      name: "slug",
      value: slug
    });

    if (typeof node.frontmatter.category !== "undefined") {
      const categorySlug = `/categories/${_.kebabCase(
        node.frontmatter.category
      )}/`;
      createNodeField({ node, name: "categorySlug", value: categorySlug });
    }

    // if (node.frontmatter.tags) {
    //   const tagSlugs = node.frontmatter.tags.map(
    //     tag => `/tags/${_.kebabCase(tag)}/`
    //   );
    //   createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    // }

    // if (typeof node.frontmatter.category !== 'undefined') {
    //   const categorySlug = `/categories/${_.kebabCase(node.frontmatter.category)}/`;
    //   createNodeField({ node, name: 'categorySlug', value: categorySlug });
    // }
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const categoryTemplate = path.resolve("./src/templates/category-page.js");

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
              date
              title
              image
              heading
              category
              description
              intro {
                blurbs {
                  image
                  text
                }
                heading
                description
              }
              main {
                heading
                description
                image1 {
                  alt
                  image
                }
                image2 {
                  alt
                  image
                }
                image3 {
                  alt
                  image
                }
              }
              testimonials {
                author
                quote
              }
              full_image
              pricing {
                heading
                description
                plans {
                  description
                  items
                  plan
                  price
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let categories = [];
      if (typeof node.frontmatter.category !== "undefined") {
        categories = categories.concat(node.frontmatter.category);
      }

      categories = _.uniq(categories);
      _.each(categories, category => {
        const categoryPath = `/categories/${_.kebabCase(category)}/`;
        createPage({
          path: categoryPath,
          component: categoryTemplate,
          context: {
            category
          }
        });
      });

      createPage({
        path: node.frontmatter.path,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        context: {} // additional data can be passed via context
      });

      // if (node.frontmatter.layout === "page") {
      //   createPage({
      //     path: edge.node.path,
      //     component: path.resolve(`src/templates/blog-page.js`),
      //     context: {
      //       // slug: edge.node.fields.slug
      //     }
      //   });
      // } else {

      // }
    });
  });
};
