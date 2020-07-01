import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Image = styled.div`
  ${'' /* background-image: ${props => `url(${props.img})`}; */}
  background-image: url(images/DW/main.png);
  height: 290px;
  width: 50%;
  position: absolute;
  background-position: 50% 50%;
  background-size: cover;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(28, 181, 224);
  border-radius: 2px;
`;

const Images = ({ img1FluidData, img2FluidData }) => (
  <div>
    <Img fluid={img1FluidData} />
  </div>
);

export default Images;
