/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import thumbnailStyles from "styles/components/thumbnails.css";
import utilityStyles from "styles/utilities.css";
import Image from "next/image";

interface IProps {
  className?: string;
  title: string;
  illustrationSrc: string;
  illustrationClass: string;
  backgroundClass: string;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  url: string;
  alt: string;
}

export function Thumbnail(props: IProps) {
  const {
    className = "",
    illustrationSrc,
    illustrationClass = "",
    backgroundClass = "",
    alt,
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
                utilityStyles.linkForUI,
                thumbnailStyles.link
              )}
              title={title}
            >
              <H className={classNames(thumbnailStyles.title)}>{title}</H>
            </a>
          </Link>
        </span>
        <span className={thumbnailStyles.illustrationFrame}>
          <span
            className={classNames(
              thumbnailStyles.illustrationBg,
              backgroundClass
            )}
          />
          <span className={thumbnailStyles.illustrationContainer}>
            <Image
              layout="fill"
              className={classNames(
                thumbnailStyles.illustration,
                illustrationClass
              )}
              alt={alt}
              src={illustrationSrc}
            />
          </span>
        </span>
      </article>
    </div>
  );
}
