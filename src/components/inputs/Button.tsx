import React, { useEffect, useState } from "react";
import classNames from "classnames";
import navBarStyles from "../../../styles/components/navbar.css";

interface IProps {
  className?: string;
  children: JSX.Element;
  disabled?: boolean;
  title?: string;
  type?: "submit";
  buttonRef?: React.Ref<HTMLButtonElement>;
}

function Button(props: IProps) {
  const { className, type, children, ...rest } = props;
  return (
    <button
      type={type}
      className={classNames(className, navBarStyles.item)}
      {...rest}
    >
      <>{children}</>
    </button>
  );
}

export default Button;
