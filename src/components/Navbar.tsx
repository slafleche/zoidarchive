import React from "react";
import classnames from "classnames";
import utilityClasses from "../../styles/utilityClasses.css";
// import { useRouter } from "next/router";
import { NavbarItem } from "./NavbarItem";
import navBarStyles from "../../styles/components/navbar.css";
import { SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import Sticky from "react-stickynode";
import Tooltip from "@reach/tooltip";

interface IProps {
  classes?: string;
  homepage?: boolean;
}

export function Navbar(props: IProps) {
  const { classes, homepage } = props;
  const id = "mainMenu";

  const menuItems = [
    {
      url: "/",
      label: "home",
    },
    {
      url: "/communities",
      label: "Communities",
    },
    {
      url: "/#page2",
      label: "Page 2",
    },
    {
      url: "/#page3",
      label: "Page 3",
    },
  ];

  var navItems: Array<JSX.Element> = [];

  for (var i = 0; i < menuItems.length; i++) {
    const { url, label } = menuItems[i];
    navItems.push(
      <React.Fragment key={i}>
        <NavbarItem url={url} label={label} />
      </React.Fragment>
    );
  }

  return (
    <div className={navBarStyles.root}>
      <Sticky>
        <div
          className={classnames(
            classes,
            navBarStyles.detachable,
            utilityClasses.isHidden
          )}
        >
          <nav aria-labelledby={id} className={navBarStyles.nav}>
            <SkipNavLink>Skip to content</SkipNavLink>
            <h2 id={id} className={utilityClasses.isScOnly}>
              Main Menu
            </h2>
            <ul className={navBarStyles.items}>{navItems}</ul>
          </nav>
        </div>
      </Sticky>
    </div>
  );
}
