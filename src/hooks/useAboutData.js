import { useStaticQuery, graphql } from 'gatsby';

const useAboutData = () => {
  const data = useStaticQuery(aboutQuery);

  const aboutData = data.allFile.edges[0].node.childDataJson;

  return aboutData;
};

const aboutQuery = graphql`
  query AboutQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "data" }, name: { eq: "about" } }
    ) {
      edges {
        node {
          id
          childDataJson {
            primary
            secondary
            imageLabel
          }
        }
      }
    }
  }
`;

// const imageQuery = graphql`
//   query ImageQuery {
//     allFile(filter: { name: { eq: "profile" } }) {
//       edges {
//         node {
//           id
//           childImageSharp {
//             fluid(maxWidth: 1000) {
//               originalName
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default useAboutData;
