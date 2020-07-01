import React from 'react';

import { Title } from '../common/Text';

import Wrapper from './partials/Wrapper';
import Images from './partials/Images';

const WorkList = ({ workData, imageData }) => {
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
          <div key={example.id}>
            <h2>{example.title}</h2>
            <Images
              primaryImage={primaryImage}
              secondaryImage={secondaryImage}
            />
          </div>
        );
      })}
    </Wrapper>
  );
};

export default WorkList;
