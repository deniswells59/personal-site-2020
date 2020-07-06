// import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useWorkData = () => {
  const data = useStaticQuery(workExamplesQuery);
  const workData = data.allWorkJson.edges;

  const imageData = data.allFile.edges.map(({ node }) => {
    return node.childImageSharp.fluid;
  });

  return [workData, imageData];
};

const workExamplesQuery = graphql`
  query WorkExamplesQuery {
    allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 1000) {
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