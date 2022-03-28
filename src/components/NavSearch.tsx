import React, { useEffect, useState } from "react";
import classNames from "classnames";
import SmartLink from "./ActiveLink";
import navBarStyles from "../../styles/components/navbar.css";
import inputStyles from "../../styles/components/input.css";
import utilityClasses from "../../styles/utilityClasses.css";

interface IProps {
  className?: string;
  linkClass?: string;
}

function NavSearch(props: IProps) {
  const [key, setKey] = useState("Ctrl ");

  useEffect(
    function onFirstMount() {
      const osInfo = navigator.userAgentData
        ? navigator.userAgentData.platform
        : navigator.platform;

      if (osInfo === "macOS" || osInfo === "MacIntel") {
        setKey("⌘");
      }
    },
    [key]
  );

  const { className, linkClass } = props;
  return (
    <li className={classNames(className, navBarStyles.item)}>
      <button className={inputStyles.button}>
        Quick Search
        <span className={classNames(inputStyles.shortcut)}>{key}k</span>
      </button>
    </li>
  );
}

export default NavSearch;
