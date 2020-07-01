import React from 'react';
import styled from 'styled-components';

import { Text } from '../../common/Text';
import { DownArrow } from '../../common/Icons';

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
