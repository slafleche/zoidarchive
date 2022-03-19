import React, { ReactNode } from "react";
import classnames from "classnames";
import Tooltip from "@reach/tooltip";

interface IProps {
  className?: string;
  title: string;
  children: ReactNode;
}

const Abbr: React.FC<IProps> = ({ className, title, children }) => (
  <Tooltip label={title}>
    <abbr title="Schizoid Personality Disorder" className={className}>
      {children}
    </abbr>
  </Tooltip>
);

export default Abbr;
