import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center text-componentsColor400">
      <div className="mb-4">
        <BiErrorCircle className="text-5xl " />
      </div>
      <h2 className="text-2xl mb-4">No Definitions Found</h2>
      <p className="text-lg mb-4">
        Sorry pal, we couldn't find definitions for the word you were looking
        for.
      </p>
      <p>
        You can try the search again at later time or head to the web instead.
      </p>
    </div>
  );
};

export default Error;
