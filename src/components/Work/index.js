import React from 'react';

import useWorkData from '../../hooks/useWorkData';

import { Title } from '../common/Text';

import Wrapper from './partials/Wrapper';
import Item from './partials/Item';

const Work = () => {
  const [workData, imageData] = useWorkData();
  const getImageFromName = imageName => {
    const image = imageData.find(data => data.originalName === imageName);

    return image;
  };

  return (
    <Wrapper>
      <Title black bold>
        LOOK WHAT I CAN DO!
      </Title>
      {workData.map(({ node: example }) => {
        const primaryImage = getImageFromName(example.primaryImage);
        const secondaryImage = getImageFromName(example.secondaryImage);

        return (
          <Item
            key={example.id}
            example={example}
            primaryImage={primaryImage}
            secondaryImage={secondaryImage}
          />
        );
      })}
    </Wrapper>
  );
};

export default Work;
