import classNames from "classnames";
import layoutStyles from "styles/components/layout.css";
import { useEffect, useState } from "react";
import tableOfContentsStyles from "styles/components/tableOfContents.css";

interface IHeading {
  title: string;
  id: string;
}

interface IProps {
  className?: string;
  articleID: string | null; // Will be null initially
}

const TableOfContents = (props: IProps) => {
  const { className, articleID } = props;
  const [headings, setHeadings] = useState<Array<IHeading>>([]);

  useEffect(
    function setEventListeners() {
      const mainContent = document.querySelector(`#${articleID}`);
      if (mainContent) {
        const headingElements = Array.from(
          mainContent.querySelectorAll(` h2, h3`)
        );

        console.log(
          " `#${articleID} h2, #${articleID} h3`: ",
          `#${articleID} h2, #${articleID} h3`
        );
        console.log(" headings: ", headingElements);

        if (Array.isArray(headingElements) && headingElements.length > 0) {
          const uniqueIDs = {};
          const hList: IHeading[] = [];
          headingElements.forEach((h) => {
            if (h && h.textContent) {
              const id = `#${h.textContent
                .trim()
                .toLowerCase()
                .replaceAll(/\s/gi, "-")}`;

              if (!uniqueIDs.hasOwnProperty(id)) {
                // Unique ID
                hList.push({
                  title: h.textContent,
                  id: id,
                });
                uniqueIDs[id] = 0;
              } else {
                // ID exists, add a number after to ensure uniqueness
                hList.push({
                  title: h.textContent,
                  id: `${id}-${uniqueIDs[id]}`,
                });
                uniqueIDs[id] = uniqueIDs[id] + 1;
              }
            }
          });
          setHeadings(hList);
        }
      }
    },
    [articleID]
  );

  const tocContents = headings.map((h, i) => {
    return (
      <li key={i} className={tableOfContentsStyles.item}>
        <a href={h.id} className={tableOfContentsStyles.item}>
          {h.title}
        </a>
      </li>
    );
  });

  return (
    <>
      {Array.isArray(headings) && (
        <div className={classNames(tableOfContentsStyles.root, className)}>
          <h2 className={tableOfContentsStyles.title}>On This Page</h2>
          <ul className={tableOfContentsStyles.items}>{tocContents}</ul>
        </div>
      )}
    </>
  );
};

export default TableOfContents;
