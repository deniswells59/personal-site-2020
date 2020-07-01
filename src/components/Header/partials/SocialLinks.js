import React from 'react';
import styled from 'styled-components';

import { Github, LinkedIn } from '../../Icons';

const iconStyles = `
  margin: 20px;
`;

const GithubIcon = styled(Github)`
  ${iconStyles}
`;

const LinkedInIcon = styled(LinkedIn)`
  ${iconStyles}
`;

const SocialLinks = () => (
  <div>
    <a href="https://github.com/deniswells59" target="_blank">
      <GithubIcon />
    </a>
    <a
      href="https://www.linkedin.com/in/denis-wells-426726119/"
      target="_blank"
    >
      <LinkedInIcon />
    </a>
  </div>
);

export default SocialLinks;
