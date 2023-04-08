import React from "react";
import SearchBar from "./SearchBar";
import { BiBookAlt } from "react-icons/bi";
import Theme from "./Theme";

const Nav = () => {
  return (
    <header className="bg-backgroundPrimary py-4 shadow-md">
      <div className="flex items-center justify-between max-w-3xl m-auto">
        <a href="/">
          <BiBookAlt className="text-2xl text-textColor" />
        </a>

        <Theme />
      </div>
      <div className="max-w-3xl m-auto flex items-center w-full mt-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Nav;
