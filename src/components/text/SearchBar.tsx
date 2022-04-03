import React, { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import inputStyles from "../../../styles/components/input.css";
import utilityClasses from "../../../styles/utilityClasses.css";
import SVG from "react-inlinesvg";
import searchBarStyles from "../../../styles/components/searchBar.css";
import TextInput from "../inputs/TextInput";
import Button from "../inputs/Button";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

interface IProps {
  className?: string;
  compact?: boolean;
}

function SearchBar(props: IProps) {
  const { className, compact = true } = props;
  const [key, setKey] = useState("Ctrl ");
  const id = "search";

  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const openModal = useCallback(
    (e: React.SyntheticEvent | KeyboardEvent) => {
      if ("key" in e) {
        var special = e.metaKey || e.ctrlKey;
        if (e.key == "k" && special) {
          setShowSearchModal(true);
        }

        if (showSearchModal && e.key === "Escape") {
          setShowSearchModal(false);
          exitHandler(e);
        }
      }
    },
    [showSearchModal]
  );

  const exitHandler = (e: React.SyntheticEvent | KeyboardEvent) => {
    if (inputRef && inputRef.current) {
      (inputRef.current as any).focus();
    }
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
      document.addEventListener("keydown", openModal, false);
      return function cleanup() {
        document.removeEventListener("keydown", openModal, false);
      };
    },
    [compact, openModal]
  );

  return (
    <>
      <form
        className={classNames(searchBarStyles.root, className)}
        onSubmit={(e) => e.preventDefault()}
      >
        {compact && (
          <Button
            onClick={(e) => {
              // e.preventDefault();
              setShowSearchModal(true);
            }}
            className={classNames(searchBarStyles.openPopup, {
              focus,
            })}
          >
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

        <TextInput
          id={id}
          className={classNames(searchBarStyles.input, {
            [`${searchBarStyles.compactInput}`]: compact,
            [`${searchBarStyles.fullSizeInput}`]: !compact,
          })}
          type="search"
          refs={inputRef}
          value={query}
          onChange={onChange}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
        />
        <Button
          type="submit"
          className={classNames(searchBarStyles.submit)}
          title="Search"
        >
          <SVG
            title="Search"
            src="images/search.svg"
            className={classNames(searchBarStyles.icon, { focus })}
          />
        </Button>
      </form>
      <Dialog
        aria-label="Search Site"
        style={{ color: "red" }}
        isOpen={showSearchModal}
        onDismiss={() => {
          setShowSearchModal(false);
        }}
      >
        <button
          onClick={() => {
            setShowSearchModal(false);
          }}
        >
          <SVG title="Close" src="images/close.svg" />
        </button>
      </Dialog>
    </>
  );
}

export default SearchBar;
