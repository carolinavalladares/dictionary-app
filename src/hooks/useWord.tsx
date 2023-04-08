import { useContext } from "react";
import { DictionaryContext } from "../contexts/DictionaryContext";

export default function useWord() {
  const { fetchWordData, wordData, requestStatus, words } =
    useContext(DictionaryContext);

  return { fetchWordData, wordData, requestStatus, words };
}
