import React from 'react';
import Helmet from 'react-helmet';

import GlobalStyles from './GlobalStyles';
import favicon from '../images/favicon.ico';

const Layout = () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="Denis likes to make websites and friends. Come on in and learn more."
      />
      <title>Denis Wells</title>
      <link rel="icon" href={favicon} />
    </Helmet>

    <GlobalStyles />
  </>
);

export default Layout;
