import React, { ReactNode } from "react";
import useTheme from "../hooks/useTheme";

import Nav from "./Nav";

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => {
  const { font } = useTheme();

  return (
    <div
      className={`${
        font == "serif"
          ? "font-serif"
          : font == "sans-serif"
          ? "font-sansSerif"
          : font == "monospace"
          ? "font-monospace"
          : null
      }`}
    >
      <Nav />

      <div className="max-w-3xl m-auto mt-7">{children}</div>
    </div>
  );
};

export default Layout;
