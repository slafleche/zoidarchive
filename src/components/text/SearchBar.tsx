import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import inputStyles from "../../../styles/components/input.css";
import utilityClasses from "../../../styles/utilityClasses.css";
import SVG from "react-inlinesvg";
import searchBarStyles from "../../../styles/components/searchBar.css";
import TextInput from "../inputs/TextInput";
import Button from "../inputs/Button";

interface IProps {
  className?: string;
  compact?: boolean;
}

function SearchBar(props: IProps) {
  const { className, compact = true } = props;
  const [key, setKey] = useState("Ctrl ");
  const id = "search";
  const ref = useRef(null);
  const [query, setQuery] = useState("");

  const doNothing = () => {
    return false;
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(
    function onFirstMount() {
      if (compact) {
        const osInfo = (navigator as any).userAgentData
          ? (navigator as any).userAgentData.platform
          : navigator.platform;

        if (osInfo === "macOS" || osInfo === "MacIntel") {
          setKey("⌘");
        }
      }
    },
    [key, compact]
  );

  return (
    <form
      onSubmit={doNothing}
      onChange={doNothing}
      className={classNames(searchBarStyles.root, className)}
    >
      <label htmlFor={id} className={searchBarStyles.label}>
        <SVG
          title="Search"
          src="images/search.svg"
          className={searchBarStyles.icon}
        />
      </label>
      <TextInput
        id={id}
        className={searchBarStyles.input}
        type="search"
        ref={ref}
        value={query}
        onChange={onChange}
        defaultValue=""
      />
      <Button
        type="submit"
        className={classNames(utilityClasses.isScOnly, searchBarStyles.submit)}
      >
        <>Submit</>
      </Button>
      {compact && (
        <Button className={searchBarStyles.openPopup}>
          <>
            <span className={utilityClasses.isScOnly}>
              Search from anywhere with keyboard shortcut:
            </span>
            <span className={classNames(inputStyles.inputShortcut)}>
              {key}k
            </span>
          </>
        </Button>
      )}
    </form>
  );
}

export default SearchBar;
