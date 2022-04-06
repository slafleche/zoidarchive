import classNames from "classnames";
import Link from "next/link";
import SVG from "react-inlinesvg";
import thumbnailStyles from "../../../styles/components/thumbnails/thumbnails.css";

interface IProps {
  className?: string;
  title: string;
  illustrationSrc: string;
  illustrationClass: string;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  url: string;
  description?: string;
  textClass: string;
}

export function Thumbnail(props: IProps) {
  const {
    className = "",
    illustrationSrc,
    illustrationClass = "",
    textClass = "",
    url,
    title,
    description,
  } = props;
  return (
    <Link href={url} passHref>
      <a
        tabIndex={0}
        className={classNames(thumbnailStyles.cell, className)}
        title={title}
      >
        <span className={classNames(thumbnailStyles.text, textClass)}>
          <span className={classNames(thumbnailStyles.title)}>{title}</span>
          {description && (
            <span className={classNames(thumbnailStyles.description)}>
              {description}
            </span>
          )}
        </span>
        <SVG
          className={classNames(
            thumbnailStyles.illustration,
            illustrationClass
          )}
          src={illustrationSrc}
        />
      </a>
    </Link>
  );
}
