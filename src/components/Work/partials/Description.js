import React from 'react';
import styled from 'styled-components';

import { Title, Text } from '../../common/Text';
import { ExternalLink, Github } from '../../common/Icons';

const LinkWrapper = styled.div`
  width: 108px;
  display: flex;
  justify-content: space-between;
`;

const Description = ({
  title,
  description,
  githubLink,
  exampleLink,
  img1,
  img2,
}) => (
  <>
    <Title black bold small>
      {title}
    </Title>

    <LinkWrapper>
      <a target="_blank" href={githubLink}>
        <Github blue />
      </a>
      <a target="_blank" href={exampleLink}>
        <ExternalLink blue />
      </a>
    </LinkWrapper>

    <Text black>{description}</Text>
  </>
);

export default Description;

{
  /* div className="work-links">
        <a target="_blank" href={githubLink} className="work-href">
          <i className="icon-social-github icons"></i>
        </a>
        <a target="_blank" href={exampleLink} className="work-href">
          <i className="icon-link icons"></i>
        </a>
      </div>
    </div>

    <p className="work-desc">{description}</p> */
}
