import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  opacity: ${props => props.opacity};
`;

const Star = ({ size = 10, top, left, opacity = 1 }) => {
  return (
    <StyledSVG
      width={size}
      height={size}
      viewBox="0 0 40 40"
      top={top}
      left={left}
      opacity={opacity}
    >
      <filter id="blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      </filter>

      <circle cx="50%" cy="50%" r="20" fill="#fcfcfc" filter="url(#blur)" />
    </StyledSVG>
  );
};

export default Star;
