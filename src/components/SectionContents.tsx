import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import sectionContentStyles from "styles/components/sectionContentStyles.css";

interface IProps {
  className?: string;
  type: dataType;
}

export const enum dataType {
  relatedPages,
  bookPages,
  researchPages,
}

const SectionContents = (props: IProps) => {
  const { className, type } = props;
  const [sectionData, setSectionData] = useState<Array<any>>([]);

  useEffect(
    function init() {
      let endPoint;
      let data;
      if (type === dataType.relatedPages) {
        endPoint = "/api/related";
      } else if (type === dataType.bookPages) {
        endPoint = "/api/books";
      } else {
        // research
        endPoint = "/api/research";
      }
      fetch(endPoint)
        .then((res) => res.json())
        .then((res) => {
          const list: JSX.Element[] = [];
          res.pages.forEach((page, i) => {
            list.push(
              <li key={i} className={sectionContentStyles.item}>
                <Link
                  href={`${page.typeSlug}/${encodeURIComponent(page.slug)}`}
                  passHref
                >
                  <a className={sectionContentStyles.link}>{page.title}</a>
                </Link>
              </li>
            );
          });
          setSectionData(list);
        });
    },
    [type]
  );

  return (
    <>
      <div className={classNames(sectionContentStyles.root, className)}>
        <ul className={sectionContentStyles.items}>{sectionData}</ul>
      </div>
    </>
  );
};

export default SectionContents;

// Scroll to on load
// Open FAQ on hash
