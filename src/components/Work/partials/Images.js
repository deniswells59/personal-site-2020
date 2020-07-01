import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 50%;
  max-width: 500px;
  position: absolute;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(28, 181, 224);
  border-radius: 2px;
`;

const PrimaryImageWrapper = styled(ImageWrapper)`
  top: 0;
  left: 0;
  z-index: 10;
`;

const SecondaryImageWrapper = styled(ImageWrapper)`
  top: 48px;
  right: 24px;
  z-index: 1;
`;

const Images = ({ primaryImage, secondaryImage }) => (
  <Wrapper>
    <PrimaryImageWrapper>
      <Img fluid={primaryImage} />
    </PrimaryImageWrapper>
    <SecondaryImageWrapper>
      <Img fluid={secondaryImage} />
    </SecondaryImageWrapper>
  </Wrapper>
);

export default Images;
