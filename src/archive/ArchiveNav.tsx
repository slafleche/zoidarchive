import React, { useEffect, useState } from "react";
import classNames from "classnames";
import utilityClasses from "styles/utilityClasses.css";
import archiveNavStyles from "styles/components/archiveNav.css";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { threeColumnMediaQueries } from "../../styles/components/threeColumnLayout.css";

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

  const getData = () => {
    fetch("/api/archive-nav")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setNavData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const { className } = props;

  const isTwoColumns = useMediaQuery(threeColumnMediaQueries.twoColumns);
  const isOneColumn = useMediaQuery(threeColumnMediaQueries.oneColumn);

  if (!Array.isArray(navData)) {
    return null;
  }

  return (
    <nav
      aria-describedby={id}
      className={classNames(className, archiveNavStyles.root)}
    >
      <h2 id={id} className={utilityClasses.isScOnly}>
        Arhive Navigation
      </h2>
      <ul className={archiveNavStyles.categories}>
        {navData.map((section, i) => {
          return (
            <>
              <li key={i} className={archiveNavStyles.category}>
                <h3 className={archiveNavStyles.categoryTitle}>
                  {section.category}
                </h3>
                <ul className={archiveNavStyles.categoryItems}>
                  {section.pages.map((page, c) => {
                    return (
                      <>
                        <li
                          key={`${i}-${c}`}
                          className={archiveNavStyles.categoryItem}
                        >
                          <Link
                            href={`${page.typeSlug}/${encodeURIComponent(
                              page.slug
                            )}`}
                            passHref
                          >
                            <a className={archiveNavStyles.link}>
                              {page.title}
                            </a>
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
}

export default ArchiveNav;
