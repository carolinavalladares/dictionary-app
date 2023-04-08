import { createContext, ReactNode, useEffect, useState } from "react";
import { getWord } from "../utils/requests";
import { WordDataType } from "../types/api";

interface DictionaryContextType {
  // contextWord: string;
  // setContextWord: React.Dispatch<string>;
  fetchWordData: (word: string) => void;
  wordData: WordDataType;
  requestStatus: string;
  words: string[];
}

export const DictionaryContext = createContext({} as DictionaryContextType);

interface Props {
  children: ReactNode | ReactNode[];
}

export default function DictionaryContextProvider({ children }: Props) {
  // const [contextWord, setContextWord] = useState<string>("");
  const [wordData, setWordData] = useState<WordDataType>({} as WordDataType);
  const [requestStatus, setRequestStatus] = useState("success");
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    getWords();
  });

  async function getWords() {
    const req = await fetch("./words.json");

    const data = await req.json();

    const wordsArr = data.words.split(" ");

    setWords(wordsArr);
  }

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

    console.log(resp);
    console.log(data);

    if (resp.status > 299) {
      setRequestStatus("error");
      return;
    }

    setRequestStatus("success");
    setWordData(data[0]);
  };

  return (
    <DictionaryContext.Provider
      value={{ requestStatus, fetchWordData, wordData, words }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}
