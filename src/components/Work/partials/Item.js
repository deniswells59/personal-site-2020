import React from 'react';
import styled from 'styled-components';

import Images from './Images';
import Description from './Description';

const Wrapper = styled.div`
  margin: 4em 0em;
  ${props => !props.visible && `display: none;`}
`;

const Item = ({ visible, example, primaryImage, secondaryImage }) => (
  <Wrapper visible={visible}>
    <Images primaryImage={primaryImage} secondaryImage={secondaryImage} />
    <Description
      title={example.title}
      githubLink={example.githubLink}
      exampleLink={example.link}
      description={example.description}
    />
  </Wrapper>
);

export default Item;
