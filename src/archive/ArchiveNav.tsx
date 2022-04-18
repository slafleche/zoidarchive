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
  const id = "archiveNav";
  const { className } = props;
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
      });
  }, []);

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
                  <a className={archiveNavStyles.link}>{section.category}</a>
                </Link>
              ) : (
                section.category
              )}
            </h3>
          </div>

          <ul className={archiveNavStyles.categoryItems}>
            {section.pages.map((page, c) => {
              return (
                <li key={`${i}-${c}`} className={archiveNavStyles.categoryItem}>
                  <Link
                    href={`${page.typeSlug}/${encodeURIComponent(page.slug)}`}
                    passHref
                  >
                    <a className={archiveNavStyles.link}>{page.title}</a>
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
