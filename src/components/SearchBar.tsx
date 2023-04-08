import React, { useEffect, useState } from "react";
import useWord from "../hooks/useWord";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  const { fetchWordData, words } = useWord();
  const [word, setWord] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionsOpen, setSuggestionsOpen] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (word == "") {
      return;
    }

    fetchWordData(word);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  useEffect(() => {
    const suggestionsArr = words.filter((item) => {
      return item.includes(word) && item !== word;
    });

    setSuggestions(suggestionsArr);
    setSuggestionsOpen(true);

    if (!word) {
      setSuggestionsOpen(false);
    }
  }, [word]);

  const handleSuggestion = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const target = e.target as HTMLParagraphElement;
    const wordSuggestion = target.id;

    setWord(wordSuggestion);

    fetchWordData(wordSuggestion);

    setSuggestionsOpen(false);
    setSuggestions([]);
  };

  return (
    <div className="flex items-center justify-start flex-1 relative w-full">
      <form className="flex flex-1 w-full" onSubmit={handleSearch}>
        <div className="bg-componentColor200 rounded-md px-4 py-2 flex items-center w-full">
          <input
            onChange={(e) => handleInputChange(e)}
            placeholder="Search..."
            type="text"
            className="flex-1 bg-transparent outline-0"
            value={word}
          />
          <button className="p-0 outline-none">
            <BiSearch className="text-lg" />
          </button>
        </div>
      </form>

      {suggestions.length > 0 && suggestionsOpen ? (
        <div className="absolute top-full left-0  w-full mt-2 p-4 shadow-md bg-componentColor200 rounded-md z-50">
          <div>
            {suggestions.map((suggestion, index) => {
              return (
                <p
                  onClick={(e) => handleSuggestion(e)}
                  className="cursor-pointer mb-1"
                  key={index}
                  id={suggestion}
                >
                  {suggestion}
                </p>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
