import React, { useEffect, useState } from "react";
import classNames from "classnames";
import navBarStyles from "styles/components/navbar.css";

interface IProps {
  className?: string;
  children: JSX.Element;
  disabled?: boolean;
  title?: string;
  type?: "submit";
  buttonRef?: React.Ref<HTMLButtonElement>;
  onClick?: (e: any) => void;
}

function Button(props: IProps) {
  const { className, type, children, ...rest } = props;

  return (
    <button
      type={type}
      className={classNames(className, navBarStyles.item)}
      onClick={(e) => {
        // alert("from button");
        e.preventDefault();
      }}
      {...rest}
    >
      <>{children}</>
    </button>
  );
}

export default Button;
