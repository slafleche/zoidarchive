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

export function Source(props: IProps) {
  const { className, socials = {}, align = "left" } = props;
  const { patreon, youtube, fiverr, discord, reddit } = socials;

  
    return (
      <>
        <div
          className={classNames(
            className
          )}
        >
          
        </div>
      </>
    );
  
}
