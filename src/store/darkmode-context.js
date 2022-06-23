import React, { useState, useEffect } from "react";

const DarkmodeContext = React.createContext({
  isDarkmode: false,
  onToggle: () => {},
});

export function DarkmodeContextProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkmodeInformation = localStorage.getItem("darkmode");

    if (darkmodeInformation === "1") {
      setIsDarkMode(true);
      document.body.classList.toggle("dark-theme");
    }
  }, []);

  const darkmodeToggleHandler = () => {
    if (isDarkMode) {
      localStorage.removeItem("darkmode");
      setIsDarkMode(false);
    } else {
      localStorage.setItem("darkmode", "1");
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
