"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  resolvedTheme: "light",
  setTheme: () => {},
});

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme({ attribute, resolvedTheme, disableTransitionOnChange }) {
  const root = document.documentElement;
  let cleanup = null;

  if (disableTransitionOnChange) {
    const style = document.createElement("style");
    style.appendChild(
      document.createTextNode("*{transition:none!important}")
    );
    document.head.appendChild(style);
    cleanup = () => {
      window.getComputedStyle(document.body);
      requestAnimationFrame(() => {
        style.remove();
      });
    };
  }

  if (attribute === "class") {
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
  } else {
    root.setAttribute(attribute, resolvedTheme);
  }

  root.style.colorScheme = resolvedTheme;
  cleanup?.();
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
  storageKey = "theme",
}) {
  const [theme, setThemeState] = useState(defaultTheme);
  const [systemTheme, setSystemTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const nextTheme = storedTheme || defaultTheme;

    setThemeState(nextTheme);
    setSystemTheme(getSystemTheme());
  }, [defaultTheme, storageKey]);

  useEffect(() => {
    if (!enableSystem) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [enableSystem]);

  const resolvedTheme =
    theme === "system" && enableSystem ? systemTheme : theme;

  useEffect(() => {
    applyTheme({ attribute, resolvedTheme, disableTransitionOnChange });
  }, [attribute, disableTransitionOnChange, resolvedTheme]);

  const setTheme = (nextTheme) => {
    setThemeState(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
