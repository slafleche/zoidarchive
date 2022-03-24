import classNames from "classnames";
import cardStyles from "../../styles/components/card.css";
import Image from "next/image";
import { stringifyQuery } from "next/dist/server/server-route-utils";
import { OptionalWrap } from "./OptionalWrap";
import { ISocials, Socials } from "./Socials";
import SVG from "react-inlinesvg";
import { ExternalIcon } from "./ExternalIcon";
import { ExternalLink } from "./ExternalLink";

enum CardStyle {
  LeftImage,
  RightImage,
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
}

export function Card(props: IProps) {
  const {
    style = CardStyle.LeftImage,
    className,
    headingLevel = 3,
    title,
    description,
    socials,
    imageSrc,
  } = props;

  const H = `h${headingLevel}` as "h1";

  const imageCell = (
    <div
      className={classNames(
        cardStyles.cell,
        cardStyles.image,
        style === CardStyle.LeftImage ? cardStyles.left : cardStyles.right
      )}
      style={{ backgroundImage: `url(${imageSrc})` }}
    ></div>
  );

  const textCell = (
    <div
      className={classNames(
        cardStyles.cell,
        cardStyles.text,
        style === CardStyle.RightImage ? cardStyles.left : cardStyles.right
      )}
    >
      <H className={classNames(cardStyles.title)}>{title}</H>
      <div className={cardStyles.cardContent}>
        {description}
        <Socials socials={socials} className={cardStyles.socials} />
      </div>
    </div>
  );

  const childProps: IChildProps = {
    className: cardStyles.link,
  };

  return (
    <article className={classNames(cardStyles.root, className)}>
      <div className={cardStyles.cells}>
        {style === CardStyle.LeftImage ? imageCell : textCell}
        {style === CardStyle.RightImage ? imageCell : textCell}
      </div>
    </article>
  );
}
