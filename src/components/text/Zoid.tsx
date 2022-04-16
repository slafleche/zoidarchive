import React, { ReactNode } from "react";
import Abbr from "./Abbr";

interface IProps {
  className?: string;
  capital?: boolean;
}

export const Zoids = (props: IProps) => {
  const { className, capital = false } = props;

  return (
    <Abbr
      className={className}
      fullText="People with schizoid personality disorder"
      abbreviation={`"${capital ? "Zoids" : "zoids"}"`}
    />
  );
};

export const Zoid = (props: IProps) => {
  const { className, capital = false } = props;

  return (
    <Abbr
      className={className}
      fullText="Someone with schizoid personality disorder"
      abbreviation={`"${capital ? "Zoid" : "zoid"}"`}
    />
  );
};

export default Zoids;
