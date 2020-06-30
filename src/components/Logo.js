import React from 'react'
import styled, { keyframes } from 'styled-components'

const DASH_STROKE_DISTANCE = 600
const ANIMATION_DURATION = 4
const LETTER_COLOR = '#fcfcfc'

const dash = keyframes`
 from {
    stroke-dashoffset: ${DASH_STROKE_DISTANCE};
  }
  to {
    stroke-dashoffset: 0;
  }
`

const AnimatedPath = styled.path`
  stroke-width: 2;
  fill: none;
  stroke-dasharray: ${DASH_STROKE_DISTANCE};
  stroke-dashoffset: ${DASH_STROKE_DISTANCE};
  animation: ${dash} ${ANIMATION_DURATION}s ease forwards;
  animation-delay: ${props => `${props.delay ?? 0}s`};
`

const StyledSVG = styled.svg`
  background-color: ${props => props.backgroundColor};
`

const Logo = ({ size = 50, backgroundColor = 'transparent' }) => {
  return (
    <StyledSVG
      viewBox="0 0 100 100"
      width={size}
      height={size}
      backgroundColor={backgroundColor}
    >
      <AnimatedPath
        stroke={LETTER_COLOR}
        d="M10,10 c60,3 60,70 0,73 L10,8.99"
      />
      <AnimatedPath
        delay="1"
        stroke={LETTER_COLOR}
        d="M42.5,76.5 L45.3,83 L60,65 L74.7,83 L90,15"
      />
    </StyledSVG>
  )
}

export default Logo
