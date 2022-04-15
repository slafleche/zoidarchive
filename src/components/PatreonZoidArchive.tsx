import classNames from "classnames";
import contentStyles from "styles/components/content.css";
import { ExternalIcon } from "./text/ExternalIcon";
import { ExternalLink } from "./text/ExternalLink";

interface IProps {
  className?: string;
  icon?: boolean;
  
}

export function PatreonZoidArchive(props: IProps) {
  const { className, icon=true } = props;

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
