import React, { ReactNode } from "react";
import Abbr from "./Abbr";

interface IProps {
  className?: string;
}

const SPD = (props: IProps) => {
  const { className } = props;
  return (
    <Abbr
      className={className}
      fullText="Schizoid Personality Disorder"
      abbreviation={"SPD"}
    />
  );
};

export default SPD;
