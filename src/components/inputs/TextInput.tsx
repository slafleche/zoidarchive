import React from "react";
import classNames from "classnames";
import inputStyles from "../../../styles/components/input.css";

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
