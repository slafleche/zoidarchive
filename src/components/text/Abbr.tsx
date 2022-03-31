import React, { ReactNode } from "react";
import classnames from "classnames";
import Tooltip from "@reach/tooltip";

interface IProps {
  className?: string;
  abbreviation: string;
  fullText: string;
}

const Abbr: React.FC<IProps> = ({ className, abbreviation, fullText }) => (
  <Tooltip label={fullText}>
    <abbr className={className}>{abbreviation}</abbr>
  </Tooltip>
);

export default Abbr;
