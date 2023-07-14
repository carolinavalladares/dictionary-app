import { createContext, ReactNode, useEffect, useState } from "react";
import { WordDataType } from "../types/api";

interface DictionaryContextType {
  fetchWordData: (word: string) => void;
  wordData: WordDataType;
  requestStatus: string;
}

export const DictionaryContext = createContext({} as DictionaryContextType);

interface Props {
  children: ReactNode | ReactNode[];
}

export default function DictionaryContextProvider({ children }: Props) {
  const [wordData, setWordData] = useState<WordDataType>({} as WordDataType);
  const [requestStatus, setRequestStatus] = useState("success");

  const fetchWordData = async (word: string) => {
    setRequestStatus("loading");

    const resp = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await resp.json();

    if (resp.status > 299) {
      setRequestStatus("error");
      return;
    }

    setRequestStatus("success");
    setWordData(data[0]);
  };

  return (
    <DictionaryContext.Provider
      value={{ requestStatus, fetchWordData, wordData }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}
