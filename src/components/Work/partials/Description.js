import React from 'react';
import styled from 'styled-components';

import { Title, Text } from '../../common/Text';
import { ExternalLink, Github } from '../../common/Icons';

const LinkWrapper = styled.div`
  width: 108px;
  display: flex;
  justify-content: space-between;
`;

const Description = ({ title, description, githubLink, exampleLink }) => (
  <>
    <Title black bold small>
      {title}
    </Title>

    <LinkWrapper>
      <a target="_blank" rel="noreferrer" href={githubLink}>
        <Github blue />
      </a>
      <a target="_blank" rel="noreferrer" href={exampleLink}>
        <ExternalLink blue />
      </a>
    </LinkWrapper>

    <Text black>{description}</Text>
  </>
);

export default Description;
