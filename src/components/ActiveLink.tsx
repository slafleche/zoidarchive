import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React from "react";
import classNames from "classnames";

// interface IPropsWithAs {

// }
interface IBaseProps {
  activeClassName?: string;
  className?: string;
  children: JSX.Element;
}

interface IPropsWithAs extends IBaseProps {
  as: string;
}
interface IPropsWithHref extends IBaseProps {
  href: string;
}

type IProps = IPropsWithAs | IPropsWithHref;

export function ActiveLink(props: IProps) {
  const { activeClassName = "isActive", children } = props;

  const destination =
    (props as IPropsWithAs).as || (props as IPropsWithHref).href;

  const { asPath, isReady } = useRouter();

  const [className, setClassName] = useState("");
  const [allClasses = className, setAllClassName] = useState(className);
  const [active, setActive] = useState(false);
  const [linkPathname, setLinkPathname] = useState("");

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;
      setLinkPathname(
        new URL(destination as unknown as string | URL, location.href).pathname
      );

      const isActive = linkPathname === activePathname;

      const newClassName = classNames(className, {
        [activeClassName]: isActive,
      });

      setActive(isActive);

      if (newClassName !== className) {
        setAllClassName(newClassName);
      }
    }
  }, [asPath, isReady, destination, activeClassName, className, linkPathname]);

  return (
    <Link href={destination} {...props}>
      <a className={allClasses} aria-current={active}>
        {children}
      </a>
    </Link>
  );
}

export default ActiveLink;
