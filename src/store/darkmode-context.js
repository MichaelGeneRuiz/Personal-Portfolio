import React, { useState, useEffect } from "react";

const DarkmodeContext = React.createContext({
  isDarkmode: true,
  onToggle: () => {},
});

export function DarkmodeContextProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const darkmodeInformation = localStorage.getItem("darkmode");

    if (darkmodeInformation === "0") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
      document.body.classList.toggle("dark-theme");
    }
  }, []);

  const darkmodeToggleHandler = () => {
    if (isDarkMode) {
      localStorage.setItem("darkmode", "0");
      setIsDarkMode(false);
    } else {
      localStorage.removeItem("darkmode");
      setIsDarkMode(true);
    }

    document.body.classList.toggle("dark-theme");
  };

  return (
    <DarkmodeContext.Provider
      value={{
        isDarkmode: isDarkMode,
        onToggle: darkmodeToggleHandler,
      }}
    >
      {props.children}
    </DarkmodeContext.Provider>
  );
}

export default DarkmodeContext;
