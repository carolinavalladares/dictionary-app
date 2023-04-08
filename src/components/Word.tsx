import React, { useState, useEffect } from "react";
import useWord from "../hooks/useWord";
import { FaPlay } from "react-icons/fa";

const Word = () => {
  const { wordData } = useWord();
  const [audio, setAudio] = useState<string>("");

  if (!wordData) {
    return <div></div>;
  }

  useEffect(() => {
    if (wordData.phonetics.length < 1) {
      return;
    }

    const arr = wordData.phonetics.filter((item) => {
      return item.audio != "";
    });

    if (!arr[0]) {
      return;
    }

    setAudio(arr[0].audio);
  }, [wordData]);

  const handleAudio = () => {
    const wordAudio = new Audio(audio);

    wordAudio.play();
  };

  return (
    <div>
      <div className="flex items-start justify-between mb-10">
        <div>
          <h1 className="text-4xl font-semibold mb-2">{wordData.word}</h1>
          <p className="text-xl text-fuchsia-800">{wordData.phonetic}</p>
        </div>

        {audio == "" ? null : (
          <button
            onClick={handleAudio}
            className="bg-fuchsia-300 h-12 w-12 rounded-full flex items-center justify-center p-0 [&>svg]:w-4 [&>svg]:ml-1"
          >
            <FaPlay className="text-fuchsia-800 text-xl" />
          </button>
        )}
      </div>

      {wordData.meanings.map((meaning, index) => {
        return (
          <div key={index} className="border-t border-slate-300 mb-11 ">
            <p className="text-xl font-semibold bg-bodyBg w-fit -translate-y-2/3 pr-4 leading-none">
              {meaning.partOfSpeech}
            </p>

            <div className="pt-4 pb-7">
              <h3 className="text-textSubtitle mb-3">Meaning</h3>

              <ul className="list-disc ml-7">
                {meaning.definitions.map((item, index) => {
                  return (
                    <li key={index} className="mb-2">
                      {item.definition}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              {meaning.synonyms.length > 0 ? (
                <div className="flex gap-4">
                  <h3 className="text-textSubtitle mb-3">Synonyms</h3>
                  <p className="text-textAccent font-semibold">
                    {meaning.synonyms.join(", ")}
                  </p>
                </div>
              ) : null}
            </div>

            <div>
              {meaning.antonyms.length > 0 ? (
                <div className="flex gap-4">
                  <h3 className="text-textSubtitle mb-3">Antonyms</h3>
                  <p className="text-textAccent font-semibold">
                    {meaning.antonyms.join(", ")}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Word;
