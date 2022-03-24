import classNames from "classnames";
import SVG from "react-inlinesvg";

interface IProps {
  className?: string;
}

export function ExternalIcon(props: IProps) {
  const { className } = props;
  return (
    <SVG className={classNames(className)} src={"images/externalLink.svg"} />
  );
}
