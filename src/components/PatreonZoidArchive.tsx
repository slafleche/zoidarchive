import classNames from "classnames";
import SVG from "react-inlinesvg";
import contentStyles from "../../styles/components/content.css";
import { ExternalIcon } from "./ExternalIcon";
import { ExternalLink } from "./ExternalLink";

interface IProps {
  className?: string;
  includeIcon?: boolean;
  iconClass?: string;
}

export function PatreonZoidArchive(props: IProps) {
  const { className, includeIcon = true, iconClass } = props;

  return (
    <ExternalLink
      {...props}
      url="https://www.patreon.com/zoidarchive"
      iconClass={classNames(contentStyles.externalLink)}
    >
      <>Zoid Archive Patreon</>
    </ExternalLink>
  );
}
