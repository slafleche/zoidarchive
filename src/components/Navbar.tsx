import React from "react";
import classnames from "classnames";
import utilityClasses from "../../styles/utilityClasses.css";
// import { useRouter } from "next/router";
import { NavbarItem } from "./NavbarItem";
import navBarStyles from "../../styles/components/navbar.css";

interface IProps {
  classes?: string;
  //   currentRoute: string;
}

export function Navbar(props: IProps) {
  const id = "mainMenu";
  //   const router = useRouter();

  //   const [active, setActive] = useState(false);
  //   const handleClick = () => {
  //     setActive(!active);
  //   };

  const menuItems = [
    {
      url: "/",
      label: "Home",
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

  var navItems = [];
  for (var i = 0; i < menuItems.length; i++) {
    const { url, label } = menuItems[i];
    navItems.push(
      <React.Fragment key={i}>
        <NavbarItem url={url} label={label} />
      </React.Fragment>
    );
  }

  return (
    <>
      <div className={classnames(props.classes, navBarStyles.root)}>
        <nav aria-labelledby={id} className={navBarStyles.nav}>
          <h2 id={id} className={utilityClasses.isScOnly}>
            Main Menu
          </h2>
          <ul className={navBarStyles.items}>
            {/* Skip nav */}
            {navItems}
          </ul>
        </nav>
      </div>
    </>
  );
}
