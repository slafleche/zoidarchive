import classNames from "classnames";
import socialsStyles from "../../styles/components/socials.css";
import SVG from "react-inlinesvg";
import { SocialLink } from "./SocialIcon";


export interface ISocials {
  youtube?: string;
  fiverr?: string;
  discord?: string;
  patreon?: string;
  reddit?: string;
}

interface IProps {
  className?: string;
  socials?: ISocials;
  align?: "right" | "left";
}

export function Socials(props: IProps) {
  const { className, socials = {}, align = "left" } = props;
  const { patreon, youtube, fiverr, discord, reddit } = socials;

  if (patreon || youtube || fiverr || discord || reddit) {
    return (
      <>
        <div
          className={classNames(
            socialsStyles.root,
            {
              isLeftAligned: align == "left",
              isRightAligned: align == "right",
            },
            className
          )}
        >
          <SocialLink
            className={socialsStyles.link}
            url={reddit}
            icon="images/socials/reddit.svg"
            iconClassName={classNames(socialsStyles.icon)}
          />
          <SocialLink
            className={socialsStyles.link}
            url={discord}
            icon="images/socials/discord.svg"
            iconClassName={classNames(socialsStyles.icon)}
          />
          <SocialLink
            className={socialsStyles.link}
            url={youtube}
            icon="images/socials/youtube.svg"
            iconClassName={classNames(socialsStyles.icon)}
          />
          <SocialLink
            className={socialsStyles.link}
            url={fiverr}
            icon="images/socials/fiverr.svg"
            iconClassName={classNames(socialsStyles.icon)}
          />
          <SocialLink
            className={socialsStyles.link}
            url={patreon}
            icon="images/socials/patreon.svg"
            iconClassName={classNames(socialsStyles.icon)}
          />
        </div>
      </>
    );
  } else {
    return null;
  }
}
