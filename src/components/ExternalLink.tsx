import classNames from "classnames";
import SVG from "react-inlinesvg";
import { ExternalIcon } from "./ExternalIcon";

interface IProps {
  className?: string;
  children: JSX.Element;
  includeIcon?: boolean;
  iconClass?: string;
}

export function ExternalLink(props: IProps) {
  const { className, children, includeIcon = true, iconClass } = props;

  return (
    <a
      href="https://www.patreon.com/zoidarchive"
      target="_blank"
      rel="noreferrer"
      className={classNames(className)}
    >
      <>
        {children}
        {includeIcon && <ExternalIcon className={iconClass} />}
      </>
    </a>
  );
}
