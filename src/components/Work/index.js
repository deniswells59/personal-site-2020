import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import WorkList from './WorkList';

const Work = () => (
  <StaticQuery
    query={query}
    render={data => <WorkList workExamples={data.allWorkJson.edges} />}
  />
);

const query = graphql`
  query MyQuery {
    allWorkJson {
      edges {
        node {
          id
          description
          githubLink
          img1
          img2
          link
          title
        }
      }
    }
  }
`;

export default Work;
