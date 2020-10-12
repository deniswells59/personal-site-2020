import React, { createContext, useContext, useState, useEffect } from 'react';

const DEFAULT_STATE = { innerWidth: 0, innerHeight: 0 };

const WindowSizeCtx = createContext(DEFAULT_STATE);

const WindowStateProvider = ({ children }) => {
  const [widowSize, setWindowSize] = useState(DEFAULT_STATE);

  const resetWindowSize = () => {
    setWindowSize({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    resetWindowSize();

    const handleResize = () => {
      resetWindowSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowSizeCtx.Provider value={widowSize}>
      {children}
    </WindowSizeCtx.Provider>
  );
};

export default WindowStateProvider;
export const useWindowSize = () => useContext(WindowSizeCtx);
