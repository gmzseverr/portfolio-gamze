import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // İlk açılışta tarayıcıdan veya localStorage'dan tema durumunu kontrol edelim
    const storedTheme = localStorage.getItem("theme");
    return (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Tema durumunu localStorage'da saklıyoruz
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
