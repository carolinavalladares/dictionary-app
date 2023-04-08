import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  const { font, setFont, setIsDarkTheme, isDarkTheme } =
    useContext(ThemeContext);

  return { font, setFont, isDarkTheme, setIsDarkTheme };
}
