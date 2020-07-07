import React from 'react';
import styled from 'styled-components';

import { Title, Text } from '../common/Text';
import { Email, Phone, Twitter } from '../common/Icons';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Contact = () => (
  <Wrapper>
    <Title black bold>
      ASK ABOUT A PROJECT! GET TO KNOW ME! SEND ME SPAM!
    </Title>
    <Content>
      <Link href="mailto:me@deniswells.com" target="_blank">
        <Email style={{ fontSize: '24px', marginRight: '10px' }} blue />
        <Text black>me@deniswells.com</Text>
      </Link>
      <Link href="tel:12097516169">
        <Phone style={{ fontSize: '24px', marginRight: '10px' }} blue />
        <Text black>(209) 751-6168</Text>
      </Link>
      <Link href="https://twitter.com/deniswells59" target="_blank">
        <Twitter style={{ fontSize: '24px', marginRight: '10px' }} blue />
        <Text black>@deniswells59</Text>
      </Link>
    </Content>
  </Wrapper>
);

export default Contact;
