import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import WorkList from './WorkList';

const Work = () => {
  const data = useStaticQuery(workExamplesQuery);
  const workData = data.allWorkJson.edges;

  return <WorkList workData={workData} />;
};

const workExamplesQuery = graphql`
  query WorkExamplesQuery {
    allWorkJson {
      edges {
        node {
          id
          description
          githubLink
          img1Name
          img2Name
          link
          title
        }
      }
    }
  }
`;

export default Work;
