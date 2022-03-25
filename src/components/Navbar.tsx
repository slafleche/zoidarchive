import React from "react";
import classnames from "classnames";
// import { useRouter } from "next/router";
import { NavbarItem } from "./NavbarItem";
import navBarStyles from "../../styles/components/navbar.css";
import { SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import Sticky from "react-stickynode";
import Tooltip from "@reach/tooltip";
import SVG from "react-inlinesvg";
import classNames from "classnames";
import utilityClasses from "../../styles/utilityClasses.css";
import layoutClasses from "../../styles/components/layout.css";

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
      url: "/faq",
      label: "FAQ",
    },
    {
      url: "/resources",
      label: "Resources",
    },
    {
      url: "/communities",
      label: "Communities",
    },
    {
      url: "/contribute",
      label: "Contribute",
    },
    {
      url: "/search",
      label: "Search",
    },
  ];

  var navItems: Array<JSX.Element> = [];

  for (var i = 0; i < menuItems.length; i++) {
    const { url, label } = menuItems[i];

    const content =
      label === "home" ? (
        <>
          <span className={utilityClasses.isScOnly}>Home</span>
          <SVG className={navBarStyles.homeIcon} src={"images/logoNoBG.svg"} />
        </>
      ) : (
        label
      );

    navItems.push(
      <React.Fragment key={i}>
        <NavbarItem url={url} label={label}>
          <>{content}</>
        </NavbarItem>
      </React.Fragment>
    );
  }

  return (
    <div className={navBarStyles.root}>
      <Sticky>
        <div className={classnames(classes, navBarStyles.detachable)}>
          <nav
            aria-labelledby={id}
            className={classNames(navBarStyles.nav, layoutClasses.content)}
          >
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
