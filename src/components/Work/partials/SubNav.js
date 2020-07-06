import React from 'react';
import styled from 'styled-components';

import { Title, Text } from '../../common/Text';

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ItemWrapper = styled.div`
  margin: 32px 0px 8px;
`;

const Button = styled.button`
  background: none;
  border: none;

  padding: 0px;
`;

const ButtonText = styled(Text)`
  margin: 2px 0px;
  font-size: 16px;
  cursor: pointer;

  ${props => props.selected && `color: #1cb5e0;`}

  &:hover {
    color: #1cb5e0;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const LinkText = styled(Text)`
  color: gray;
  margin: 0px;
  font-size: 12px;
`;

const SubNav = ({ workData, currentSubNavIndex, setCurrentSubNavIndex }) => (
  <Wrapper>
    <Title black bold>
      LOOK WHAT I CAN DO!
    </Title>

    <ListWrapper>
      {workData.map(({ node: example }, idx) => (
        <ItemWrapper key={example.id}>
          <Button onClick={() => setCurrentSubNavIndex(idx)}>
            <ButtonText black bold selected={idx === currentSubNavIndex}>
              {example.title}
            </ButtonText>
          </Button>
          <Link href={example.link} target="_blank">
            <LinkText black>{example.link}</LinkText>
          </Link>
        </ItemWrapper>
      ))}
    </ListWrapper>
  </Wrapper>
);

export default SubNav;
