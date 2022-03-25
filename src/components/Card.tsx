import classNames from "classnames";
import cardStyles from "../../styles/components/card.css";
import Image from "next/image";
import { stringifyQuery } from "next/dist/server/server-route-utils";
import { OptionalWrap } from "./OptionalWrap";
import { ISocials, Socials } from "./Socials";
import SVG from "react-inlinesvg";
import { ExternalIcon } from "./ExternalIcon";
import { ExternalLink } from "./ExternalLink";

export enum CardStyle {
  SideImage,
  BackgroundImage,
}

export enum CardTheme {
  Light = "light",
  Dark = "dark",
}

interface IChildProps {
  href?: string;
  className?: string;
}

interface IProps {
  className?: string;
  style?: CardStyle;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  title: string;
  description: string | JSX.Element;
  imageSrc: string;
  socials: ISocials;
  theme?: CardTheme;
}

export function Card(props: IProps) {
  const {
    style = CardStyle.SideImage,
    className,
    headingLevel = 3,
    title,
    description,
    socials,
    imageSrc,
    theme = CardTheme.Light,
  } = props;

  const H = `h${headingLevel}` as "h1";

  return (
    <article className={classNames(cardStyles.root, className)}>
      <div className={classNames(cardStyles.cells)} data-theme={theme}>
        <div
          className={classNames(cardStyles.cell, cardStyles.imageCell)}
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
        <div className={classNames(cardStyles.cell, cardStyles.textCell)}>
          <H className={classNames(cardStyles.title)}>{title}</H>
          <div className={cardStyles.cardContent}>
            {description}
            <Socials socials={socials} className={cardStyles.socials} />
          </div>
        </div>
      </div>
    </article>
  );
}
