import React from "react";
import classNames from "classnames";
import SmartLink from "./ActiveLink";
import navBarStyles from "../../../styles/components/navbar.css";

interface IProps {
  className?: string;
  url: string;
  label: string;
  children: JSX.Element;
  linkClass?: string;
}

export function NavbarItem(props: IProps) {
  const { className, url, children, label, linkClass } = props;
  return (
    <li className={classNames(className, navBarStyles.item)}>
      <SmartLink
        href={url}
        className={classNames(navBarStyles.link, linkClass)}
        label={label}
      >
        {children}
      </SmartLink>
    </li>
  );
}
