// import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useWorkData = () => {
  const data = useStaticQuery(workExamplesQuery);
  const workData = data.allWorkJson.edges;

  const imageData = data.allFile.edges.map(({ node }) => {
    return node.childImageSharp.fluid;
  });

  const orderedWorkData = workData.sort((a, b) => {
    const orderA = a.order;
    const orderB = b.order;

    if (orderA < orderB) return -1;
    if (orderA > orderB) return 1;
    return 0;
  });

  return [orderedWorkData, imageData];
};

const workExamplesQuery = graphql`
  query WorkExamplesQuery {
    allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
    allWorkJson {
      edges {
        node {
          id
          order
          description
          githubLink
          primaryImage
          secondaryImage
          link
          title
        }
      }
    }
  }
`;

export default useWorkData;
