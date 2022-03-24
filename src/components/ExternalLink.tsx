import classNames from "classnames";
import SVG from "react-inlinesvg";
import { ExternalIcon } from "./ExternalIcon";

interface IProps {
  url: string;
  className?: string;
  children: JSX.Element;
  includeIcon?: boolean;
  iconClass?: string;
}

export function ExternalLink(props: IProps) {
  const { className, url, children, includeIcon = true, iconClass } = props;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={classNames(className)}
    >
      <>
        {children}
        {includeIcon && (
          <ExternalIcon className={iconClass}/>
        )}
      </>
    </a>
  );
}
