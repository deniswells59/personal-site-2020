import React from 'react';

import { Title } from '../common/Text';
import Wrapper from './partials/Wrapper';

const WorkList = ({ workData }) => (
  <Wrapper>
    <Title black bold>
      LOOK WHAT I CAN DO!
    </Title>
    {workData.map(({ node: example }) => {
      return (
        <div key={example.id}>
          <h2>{example.title}</h2>
        </div>
      );
    })}
  </Wrapper>
);

export default WorkList;
