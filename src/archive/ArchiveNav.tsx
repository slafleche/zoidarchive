import React, { useEffect, useState } from "react";
import classNames from "classnames";
import utilityStyles from "styles/utilities.css";
import archiveNavStyles from "styles/components/archiveNav.css";
import Link from "next/link";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@reach/accordion";
import { useRouter } from "next/router";

interface IProps {
  className?: string;
}

export interface ICategory {
  title: string;
  body: string;
  slug: string;
}

function ArchiveNav(props: IProps) {
  const categories: ICategory[] = [];
  const [navData, setNavData] = useState<Array<any>>([]);
  const [currentPath, setCurrentPath] = useState<string>();
  const id = "archiveNav";
  const { className } = props;
  const { asPath } = useRouter();
  let content;

  useEffect(() => {
    fetch(
      `/api/archive-nav?${new URLSearchParams({
        format: "asCategory,asChain",
      })}`
    )
      .then((res) => res.json())
      .then((res) => {
        setNavData(res.asCategories);
        setCurrentPath(new URL(asPath, location.href).pathname);
      });
  }, [asPath]);

  if (!Array.isArray(navData)) {
    return null;
  } else {
    content = navData.map((section, i: number) => {
      return (
        <li key={i} className={archiveNavStyles.category}>
          <div className={archiveNavStyles.sectionHeading}>
            <h3 className={classNames(archiveNavStyles.categoryTitle)}>
              {section.sectionURL ? (
                <Link href={`${section.sectionURL}`} passHref>
                  <a
                    className={archiveNavStyles.link}
                    aria-current={currentPath === section.sectionURL}
                  >
                    {section.category}
                  </a>
                </Link>
              ) : (
                section.category
              )}
            </h3>
          </div>

          <ul className={archiveNavStyles.categoryItems}>
            {section.pages.map((page, c) => {
              const url = `${page.typeSlug}/${encodeURIComponent(page.slug)}`;
              return (
                <li key={`${i}-${c}`} className={archiveNavStyles.categoryItem}>
                  <Link href={url} passHref>
                    <a
                      className={archiveNavStyles.link}
                      aria-current={currentPath === url}
                    >
                      {page.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
  }

  return (
    <nav
      aria-describedby={id}
      className={classNames(className, archiveNavStyles.root)}
    >
      <h2 id={id} className={utilityStyles.isScOnly}>
        Archive Navigation
      </h2>
      <ul className={archiveNavStyles.categories}>{content}</ul>
    </nav>
  );
}

export default ArchiveNav;
