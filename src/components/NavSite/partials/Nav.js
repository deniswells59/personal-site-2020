import React from 'react';
import styled from 'styled-components';

import { Title } from '../../common/Text';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;

  width: 60%;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    padding: 16px 32px;
  }
`;

const NavText = styled(Title)`
  font-size: 14px;
  margin: 0px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  cursor: pointer;
`;

const Nav = ({ options, setCurrentNav }) => (
  <NavBar>
    {options.map(option => (
      <NavButton key={option} onClick={() => setCurrentNav(option)}>
        <NavText black>{option}</NavText>
      </NavButton>
    ))}
  </NavBar>
);

export default Nav;
