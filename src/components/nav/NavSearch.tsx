import React, { useState } from "react";
import classNames from "classnames";
import navBarStyles from "styles/components/navbar.css";
import SearchBar from "../text/SearchBar";

interface IProps {
  className?: string;
}

function NavSearch(props: IProps) {
  const [key, setKey] = useState("Ctrl ");
  const id = "search";
  const { className } = props;
  return (
    <li className={classNames(className, navBarStyles.item, "isLast")}>
      <SearchBar className={navBarStyles.compactSearch} />
    </li>
  );
}

export default NavSearch;
