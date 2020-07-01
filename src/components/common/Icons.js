import styled from 'styled-components';

import { AiFillGithub } from 'react-icons/ai';
import { TiSocialLinkedin } from 'react-icons/ti';
import { BsArrowDown } from 'react-icons/bs';

const iconStyles = `
  color: #fff;
  font-size: 48px;
`;

export const Github = styled(AiFillGithub)`
  ${iconStyles}
`;

export const LinkedIn = styled(TiSocialLinkedin)`
  ${iconStyles}
`;

export const DownArrow = styled(BsArrowDown)`
  ${iconStyles}
`;
