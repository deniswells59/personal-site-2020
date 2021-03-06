import React, { useState } from 'react';
import styled from 'styled-components';

import About from '../About';
import Work from '../Work';
import Contact from '../Contact';

import Nav from './partials/Nav';

const Layout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const NAV_TYPES = {
  ABOUT: 'ABOUT',
  WORK: 'WORK',
  CONTACT: 'CONTACT',
};

const NAV_OPTIONS = {
  [NAV_TYPES.ABOUT]: {
    Component: About,
  },
  [NAV_TYPES.WORK]: {
    Component: Work,
  },
  [NAV_TYPES.CONTACT]: {
    Component: Contact,
  },
};

const NavSite = () => {
  const [currentNav, setCurrentNav] = useState(NAV_TYPES.WORK);
  const optionKeys = Object.keys(NAV_OPTIONS);

  return (
    <Layout>
      <Nav options={optionKeys} setCurrentNav={setCurrentNav} />

      {optionKeys.map(optionKey => {
        const option = NAV_OPTIONS[optionKey];
        const { Component } = option;

        return currentNav === optionKey && <Component key={optionKey} />;
      })}
    </Layout>
  );
};

export default NavSite;
