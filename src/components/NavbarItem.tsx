import React from "react";
import classnames from "classnames";
import ActiveLink from "./ActiveLink";
import navBarStyles from "../../styles/components/navbar.css";

interface IProps {
  className?: string;
  url: string;
  label: string;
}

export function NavbarItem(props: IProps) {
  const { className, url, label } = props;

  return (
    <li className={classnames(className, navBarStyles.item)}>
      <ActiveLink href={url} className={navBarStyles.link}>
        {label}
      </ActiveLink>
    </li>
  );
}