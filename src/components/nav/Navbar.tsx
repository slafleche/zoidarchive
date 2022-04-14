import React from "react";
import { NavbarItem } from "./NavbarItem";
import navBarStyles from "../../../styles/components/navbar.css";
import { SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import Sticky from "react-stickynode";
import classNames from "classnames";
import utilityClasses from "styles/utilityClasses.css";
import layoutClasses from "styles/components/layout.css";
import NavSearch from "./NavSearch";
import LogoNoBG from "public/svgs/logoNoBG.svg";

interface IProps {
  classes?: string;
  homepage?: boolean;
}

export function Navbar(props: IProps) {
  const { classes, homepage = false } = props;
  const id = "mainMenu";

  const menuItems = [
    {
      url: "/",
      label: "home",
    },
    {
      url: "/archive",
      label: "The Archive",
    },
    {
      url: "/contribute",
      label: "Contribute",
    },
    {
      url: "/contact",
      label: "Contact",
    },
  ];

  var navItems: Array<JSX.Element> = [];

  for (var i = 0; i < menuItems.length; i++) {
    const { url, label } = menuItems[i];

    const content =
      label === "home" ? (
        <>
          <span className={utilityClasses.isScOnly}>Home</span>
          <LogoNoBG className={navBarStyles.homeIcon} />
        </>
      ) : (
        label
      );

    navItems.push(
      <React.Fragment key={i}>
        <NavbarItem
          url={url}
          label={label}
          linkClass={url === "/archive" ? "isArchive" : ""}
        >
          <>{content}</>
        </NavbarItem>
      </React.Fragment>
    );
  }

  return (
    <div className={navBarStyles.root}>
      <Sticky>
        <div className={classNames(classes, navBarStyles.detachable)}>
          <nav
            aria-labelledby={id}
            className={classNames(navBarStyles.nav, layoutClasses.content)}
          >
            <SkipNavLink>Skip to content</SkipNavLink>
            <h2 id={id} className={utilityClasses.isScOnly}>
              Main Menu
            </h2>
            <ul className={navBarStyles.items}>
              {navItems}
              <NavSearch />
            </ul>
          </nav>
        </div>
      </Sticky>
    </div>
  );
}
