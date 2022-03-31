import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React from "react";
import classNames from "classnames";
import navBarStyles from "../../../styles/components/navbar.css";
import Tooltip from "@reach/tooltip";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";

// interface IPropsWithAs {

// }
interface IBaseProps {
  activeClassName?: string;
  className?: string;
  label: string;
  children: JSX.Element;
}

interface IPropsWithAs extends IBaseProps {
  as: string;
}
interface IPropsWithHref extends IBaseProps {
  href: string;
}

type IProps = IPropsWithAs | IPropsWithHref;

// Checks if link is current page
export function SmartLink(props: IProps) {
  const { activeClassName = "isActive", children, label, className } = props;

  const destination =
    (props as IPropsWithAs).as || (props as IPropsWithHref).href;

  const { asPath, pathname, basePath, isReady } = useRouter();
  const [active, setActive] = useState(false);
  const [linkPathname, setLinkPathname] = useState(destination);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;
      setLinkPathname(activePathname);
      setActive(activePathname === destination);

      // console.log(" ");
      // console.log("destination: ", destination);
      // console.log("activePathname: ", activePathname);
      // console.log("isActive: ", active);
    }
  }, [isReady, asPath, active, basePath, linkPathname, destination, className]);

  return (
    <Link href={linkPathname} passHref {...props}>
      <a
        tabIndex={0}
        className={classNames(navBarStyles.link, className, {
          [activeClassName]: active,
        })}
        aria-current={active}
        title={label}
      >
        {children}
      </a>
    </Link>
  );
}

export default SmartLink;
