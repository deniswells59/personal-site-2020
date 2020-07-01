import React from 'react';
import styled from 'styled-components';

import { Text } from '../../Text';
import { DownArrow } from '../../Icons';

const Wrapper = styled.div`
  text-align: center;
  font-size: 12px;
`;

const CallToAction = () => (
  <Wrapper>
    <Text>THERE'S PROOF DOWN HERE</Text>
    <DownArrow />
  </Wrapper>
);

export default CallToAction;
