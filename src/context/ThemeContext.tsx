import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<{themeApp: string,handleSwitcherThemeApp: () => void} | null>(null);

export const ThemeProvider = ({children}) => {
  const [themeApp, setThemeApp] = useState("light");

  const handleSwitcherThemeApp = () => {
    setThemeApp(themeApp === "light" ? "dark" : "light");
  };

  const value = {themeApp, handleSwitcherThemeApp};

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext)
}