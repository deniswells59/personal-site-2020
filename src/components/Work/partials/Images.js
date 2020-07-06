import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 348px;
  max-width: 1000px;
`;

const PrimaryImageWrapper = styled.div`
  position: absolute;
  width: 50%;
  top: 0;
  left: 0;
  z-index: 10;
`;

const SecondaryImageWrapper = styled.div`
  position: absolute;
  width: 50%;
  top: 50px;
  right: 12px;
  z-index: 1;
`;

const containerStyles = {
  display: 'inline-block',
  position: 'relative',

  width: '100%',
  maxWidth: '600px',
  height: '290px',

  boxShadow: '1px 1px 3px 0px rgba(0, 0, 0, 0.5)',
  border: '1px solid rgb(28, 181, 224)',
  borderRadius: '2px',
};

const imgStyles = {
  pointerEvents: 'none',
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: '-1',
};

const Images = ({ primaryImage, secondaryImage }) => (
  <Wrapper>
    <PrimaryImageWrapper>
      <Img style={containerStyles} imgStyle={imgStyles} fluid={primaryImage} />
    </PrimaryImageWrapper>
    <SecondaryImageWrapper>
      <Img
        style={containerStyles}
        imgStyle={imgStyles}
        fluid={secondaryImage}
      />
    </SecondaryImageWrapper>
  </Wrapper>
);

export default Images;
