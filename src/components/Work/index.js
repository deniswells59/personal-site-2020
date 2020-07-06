import React, { useState } from 'react';
import styled from 'styled-components';

import useWorkData from '../../hooks/useWorkData';

import ItemListWrapper from './partials/ItemListWrapper';
import SubNav from './partials/SubNav';
import Item from './partials/Item';

const Wrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;

const Work = () => {
  const [currentSubNavIndex, setCurrentSubNavIndex] = useState(0);
  const [workData, imageData] = useWorkData();

  const getImageFromName = imageName => {
    const image = imageData.find(data => data.originalName === imageName);

    return image;
  };

  return (
    <Wrapper>
      <SubNav
        workData={workData}
        currentSubNavIndex={currentSubNavIndex}
        setCurrentSubNavIndex={setCurrentSubNavIndex}
      />

      <ItemListWrapper>
        {workData.map(({ node: example }, idx) => {
          const primaryImage = getImageFromName(example.primaryImage);
          const secondaryImage = getImageFromName(example.secondaryImage);

          return (
            <Item
              key={example.id}
              visible={idx === currentSubNavIndex}
              example={example}
              primaryImage={primaryImage}
              secondaryImage={secondaryImage}
            />
          );
        })}
      </ItemListWrapper>
    </Wrapper>
  );
};

export default Work;
