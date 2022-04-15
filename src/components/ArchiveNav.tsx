import React, { useEffect, useState } from "react";
import classNames from "classnames";
import navBarStyles from "styles/components/navbar.css";

interface IProps {
  className?: string;
}

export interface ICategory {
  title: string;
  body: string;
  slug: string;
}

function ArchiveNav(props: IProps) {
  const categories: ICategory[] = [];
  const [navData, setNavData] = useState<Array<any>>([]);

  const getData = () => {
    fetch("/api/archive-nav")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setNavData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const { className } = props;
  return <ul>todo</ul>;
}

export default ArchiveNav;
