import ExternalLinkSVG from "@svg/externalLink.svg";
interface IProps {
  className?: string;
}

export function ExternalIcon(props: IProps) {
  const { className } = props;
  return <ExternalLinkSVG className={className} />;
}
