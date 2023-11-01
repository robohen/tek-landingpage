import React, { createContext, useContext, useState, useEffect } from 'react';

const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    // Load night mode state from local storage on initial render
    const storedNightMode = localStorage.getItem('nightMode');
    if (storedNightMode) {
      setIsNightMode(storedNightMode === 'true');
    }
  }, []);

  const toggleNightMode = () => {
    const newNightMode = !isNightMode;
    setIsNightMode(newNightMode);
    // Store the night mode state in local storage
    localStorage.setItem('nightMode', newNightMode.toString());
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};

export const useNightMode = () => {
  return useContext(NightModeContext);
};