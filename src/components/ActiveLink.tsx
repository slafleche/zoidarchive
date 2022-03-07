import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React from "react";
import classNames from "classnames";

const ActiveLink = ({ children, ...props }) => {
  const { className = "", activeClassName = "isActive" } = props;
  const { asPath, isReady } = useRouter();
  const [allClasses = className, setAllClassName] = useState(className || "");
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(props.as || props.href, location.href)
        .pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      const isActive = linkPathname === activePathname;

      const newClassName = classNames(className, {
        [activeClassName]: isActive,
      });

      setActive(isActive);

      if (newClassName !== className) {
        setAllClassName(newClassName);
      }
    }
  }, [asPath, isReady, props.as, props.href, activeClassName, className]);

  return (
    <Link href={props.href} {...props}>
      <a className={allClasses} aria-current={active}>
        {children}
      </a>
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string,
  className: PropTypes.string,
};

export default ActiveLink;
