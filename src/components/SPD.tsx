import React, { ReactNode } from "react";
import Abbr from "./Abbr";

interface IProps {
  className?: string;
}

const SPD: React.FC<IProps> = ({ className }) => (
  <Abbr
    className={className}
    fullText="Schizoid Personality Disorder"
    abbreviation={"SPD"}
  />
);

export default SPD;
