import { useEffect, useState } from "react";
import DictionaryContextProvider from "./contexts/DictionaryContext";
import Dictionary from "./components/Dictionary";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <DictionaryContextProvider>
      <ThemeContextProvider>
        <Dictionary />
      </ThemeContextProvider>
    </DictionaryContextProvider>
  );
}

export default App;
