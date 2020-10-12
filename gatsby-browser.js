import React from 'react';

import WindowStateProvider from './src/providers/useWindowSize';

export const wrapRootElement = ({ element }) => (
  <WindowStateProvider>{element}</WindowStateProvider>
);
