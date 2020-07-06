import React from 'react';
import styled, { css } from 'styled-components';

import { AiFillGithub } from 'react-icons/ai';
import { TiSocialLinkedin } from 'react-icons/ti';
import { BsArrowDown, BsLink45Deg } from 'react-icons/bs';

const iconStyles = css`
  color: ${props => (props.blue ? '#1cb5e0' : '#fff')};
  font-size: 48px;
`;

export const Github = styled(({ blue, ...rest }) => <AiFillGithub {...rest} />)`
  ${iconStyles}
`;

export const LinkedIn = styled(({ blue, ...rest }) => (
  <TiSocialLinkedin {...rest} />
))`
  ${iconStyles}
`;

export const DownArrow = styled(({ blue, ...rest }) => (
  <BsArrowDown {...rest} />
))`
  ${iconStyles}
`;

export const ExternalLink = styled(({ blue, ...rest }) => (
  <BsLink45Deg {...rest} />
))`
  ${iconStyles}
`;
