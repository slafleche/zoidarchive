import classNames from "classnames";
import { ExternalIcon } from "./ExternalIcon";

interface IProps {
  url: string;
  className?: string;
  children: JSX.Element | string;
  includeIcon?: boolean;
  iconClass?: string;
}

export function ExternalLink(props: IProps) {
  const { className, children, includeIcon = true, iconClass, url } = props;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(className)}
    >
      <>
        {children}
        {includeIcon && (
          <>
            &nbsp;
            <ExternalIcon className={iconClass} />
          </>
        )}
      </>
    </a>
  );
}
