import React, { RefObject, useEffect, useState } from "react";
import classNames from "classnames";
import SmartLink from "../nav/ActiveLink";
import navBarStyles from "../../../styles/components/navbar.css";
import inputStyles from "../../../styles/components/input.css";
import utilityClasses from "../../../styles/utilityClasses.css";
import SVG from "react-inlinesvg";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value: string;
  type?: "text" | "search";
  refs?: React.RefObject<HTMLInputElement>;
}

function TextInput(props: IProps) {
  const { type = "text", className, value = "", ...rest } = props;
  return (
    <input
      {...rest}
      type={type}
      value={value}
      className={classNames(className, inputStyles.text)}
    />
  );
}

export default TextInput;
