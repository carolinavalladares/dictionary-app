import React from "react";

import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col text-componentsColor400">
      <div className="mb-4">
        <AiOutlineLoading className="animate-spin text-5xl" />
      </div>
      <p className="text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
