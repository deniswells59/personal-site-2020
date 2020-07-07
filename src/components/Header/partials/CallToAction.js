import React from 'react';
import styled from 'styled-components';

import { Text } from '../../common/Text';
import { DownArrow } from '../../common/Icons';

const Wrapper = styled.div`
  text-align: center;
`;

const DownArrowStyle = styled(DownArrow)`
  font-size: 32px;
`;

const ActionText = styled(Text)`
  font-size: 12px;
`;

const CallToAction = () => (
  <Wrapper>
    <ActionText>THERE'S PROOF DOWN HERE</ActionText>
    <DownArrowStyle />
  </Wrapper>
);

export default CallToAction;
