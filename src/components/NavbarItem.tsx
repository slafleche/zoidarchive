import React from "react";
import classnames from "classnames";
import SmartLink from "./ActiveLink";
import navBarStyles from "../../styles/components/navbar.css";

interface IProps {
  className?: string;
  url: string;
  label: string;
  children: JSX.Element;
}

export function NavbarItem(props: IProps) {
  const { className, url, children, label } = props;
  return (
    <li className={classnames(className, navBarStyles.item)}>
      <SmartLink
        href={url}
        className={navBarStyles.link}
        label={label}
      >
        {children}
      </SmartLink>
    </li>
  );
}
