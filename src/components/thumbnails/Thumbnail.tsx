import classNames from "classnames";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import SVG from "react-inlinesvg";
import thumbnailStyles from "../../../styles/components/thumbnails/thumbnails.css";
import utilityClasses from "../../../styles/utilityClasses.css";

interface IProps {
  className?: string;
  title: string;
  illustrationSrc: string;
  illustrationClass: string;
  backgroundClass: string;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  url: string;
}

export function Thumbnail(props: IProps) {
  const {
    className = "",
    illustrationSrc,
    illustrationClass = "",
    backgroundClass = "",
    headingLevel = 3,
    url,
    title,
  } = props;

  const router = useRouter();
  const H = `h${headingLevel}` as "h1";

  return (
    <div
      role="listitem"
      className={classNames(thumbnailStyles.cell, className)}
    >
      <article
        className={thumbnailStyles.cellContents}
        onClick={() => router.push(url)}
      >
        <span className={classNames(thumbnailStyles.text)}>
          <Link href={url} passHref>
            <a
              tabIndex={0}
              className={classNames(
                utilityClasses.linkForUI,
                thumbnailStyles.link
              )}
              title={title}
            >
              <H className={classNames(thumbnailStyles.title)}>{title}</H>
            </a>
          </Link>
        </span>
        <span className={thumbnailStyles.illustrationFrame}>
          <div
            className={classNames(thumbnailStyles.illustrationBg, backgroundClass)}
          />
          <SVG
            className={classNames(
              thumbnailStyles.illustration,
              illustrationClass
            )}
            src={illustrationSrc}
          />
        </span>
      </article>
    </div>
  );
}
