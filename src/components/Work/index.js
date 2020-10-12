import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useWorkData from '../../hooks/useWorkData';
import { useWindowSize } from '../../providers/useWindowSize';

import ItemListWrapper from './partials/ItemListWrapper';
import SubNav from './partials/SubNav';
import Item from './partials/Item';

const Wrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;

const Work = () => {
  const [currentSubNavIndex, setCurrentSubNavIndex] = useState(0);
  const [subNavIsOn, setSubNavIsOn] = useState(false);

  const [workData, imageData] = useWorkData();
  const windowSizes = useWindowSize();

  useEffect(() => {
    checkIfSubNavShouldBeOn();
  }, [windowSizes]);

  const checkIfSubNavShouldBeOn = () => {
    const { innerWidth } = windowSizes;

    if (innerWidth > 800) {
      setSubNavIsOn(true);
    }
  };

  const getImageFromName = imageName => {
    const image = imageData.find(data => data.originalName === imageName);

    return image;
  };

  return (
    <Wrapper>
      {subNavIsOn && (
        <SubNav
          workData={workData}
          currentSubNavIndex={currentSubNavIndex}
          setCurrentSubNavIndex={setCurrentSubNavIndex}
        />
      )}

      <ItemListWrapper>
        {workData.map(({ node: example }, idx) => {
          const primaryImage = getImageFromName(example.primaryImage);
          const secondaryImage = getImageFromName(example.secondaryImage);

          const showItem = subNavIsOn ? currentSubNavIndex === idx : true;

          return (
            <Item
              key={example.id}
              visible={showItem}
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
