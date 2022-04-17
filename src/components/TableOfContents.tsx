import classNames from "classnames";
import layoutStyles from "styles/components/layout.css";
import React, { useEffect, useState } from "react";
import tableOfContentsStyles from "styles/components/tableOfContents.css";
import Link from "next/link";
import router from "next/router";

// interface IHeading {
//   title: string;
//   id: string;
// }

interface IProps {
  className?: string;
  articleID: string | null; // Will be null initially
  accordion?: boolean;
}

const TableOfContents = (props: IProps) => {
  const hList: React.ReactNode[] = [];
  const { className, articleID, accordion = false } = props;
  const [tocContents, setTocContents] = useState<Array<React.ReactNode>>([]);
  // const [uniqueIDs, setUniqueIDs] = useState<Array<Object>>([]);

  useEffect(
    function idInit() {
      const mainContent = document.querySelector(`#${articleID}`);
      if (mainContent) {
        const headingElements = Array.from(
          mainContent.querySelectorAll(`#${articleID} h2, #${articleID} h3`)
        );
        let uniqueIDs = {};
        const tocContents = headingElements.map((h, i) => {
          if (!h || !h.textContent) {
            return null;
          } else {
            const id = `#${h.textContent
              .trim()
              .toLowerCase()
              .replaceAll(/\s/gi, "")
              .replaceAll(/\W/gi, "")}`;
            let uniqueID = id;

            if (!uniqueIDs.hasOwnProperty(id)) {
              uniqueIDs[id] = 0;
            } else {
              // ID exists, add a number after to ensure uniqueness
              (uniqueID = `${id}-${uniqueIDs[id]}`),
                (uniqueIDs[id] = uniqueIDs[id] + 1);
            }

            // console.log("uniqueID: ", uniqueID);
            return (
              <li key={i} className={tableOfContentsStyles.item}>
                <a
                  id={uniqueID}
                  href={uniqueID}
                  className={tableOfContentsStyles.link}
                  onClick={(e) => {
                    // router.push(`#${uniqueID}`);
                    h.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {h.textContent}
                </a>
              </li>
            );
          }
        });
        if (Array.isArray(headingElements) && headingElements.length > 0) {
          setTocContents(tocContents);
        }
        //     // Scroll to element on load
        //     if (window.location.hash) {
        //       const el = document.getElementById(window.location.hash);
        //       if (el) {
        //         el.scrollIntoView({ behavior: "smooth" });
        //       }
        //     }
        //   }
      }
    },
    [articleID]
  );

  useEffect(
    function idInit() {
      // Scroll to element on load
      if (window.location.hash) {
        const el = document.getElementById(window.location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [tocContents]
  );

  return (
    <>
      {Array.isArray(tocContents) && tocContents.length > 0 && (
        <div className={classNames(tableOfContentsStyles.root, className)}>
          <h2 className={tableOfContentsStyles.title}>On This Page</h2>
          <ul className={tableOfContentsStyles.items}>{tocContents}</ul>
        </div>
      )}
    </>
  );
};

export default TableOfContents;

// Scroll to on load
// Open FAQ on hash
