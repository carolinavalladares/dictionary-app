import { createContext, ReactNode, useEffect, useState } from "react";

interface ContextValuesType {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<boolean>;
  font: string;
  setFont: React.Dispatch<string>;
}

interface Props {
  children: ReactNode | ReactNode[];
}

export const ThemeContext = createContext({} as ContextValuesType);

export default function ThemeContextProvider({ children }: Props) {
  const [font, setFont] = useState(
    localStorage.getItem("dictionaryTheme")
      ? JSON.parse(localStorage.getItem("dictionaryTheme") as string).font
      : "serif"
  );
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("dictionaryTheme")
      ? JSON.parse(localStorage.getItem("dictionaryTheme") as string)
          .isDarkTheme
      : false
  );

  useEffect(() => {
    changeTheme();
  }, [isDarkTheme]);

  useEffect(() => {
    changeFont();
  }, [font]);

  const changeTheme = () => {
    const body = document.body;

    if (isDarkTheme) {
      body.classList.add("dark");
      localStorage.setItem(
        "dictionaryTheme",
        JSON.stringify({ font, isDarkTheme })
      );
    } else {
      body.classList.remove("dark");
      localStorage.setItem(
        "dictionaryTheme",
        JSON.stringify({ font, isDarkTheme })
      );
    }
  };

  const changeFont = () => {
    localStorage.setItem(
      "dictionaryTheme",
      JSON.stringify({ font, isDarkTheme })
    );

    console.log(font);
  };

  return (
    <ThemeContext.Provider
      value={{ font, setFont, setIsDarkTheme, isDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
