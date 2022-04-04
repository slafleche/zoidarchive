import { useEffect, useState } from "react";
import Button from "./inputs/Button";
import classNames from "classnames";
import scrollToTopStyles from "../../styles/components/scrollToTop.css";
import SVG from "react-inlinesvg";
import { debounce } from "../utils/utils";

interface IProps {
  className?: string;
}

const getHeight = () => {
  return (
    window.innerHeight ||
    document.body.clientHeight ||
    document.documentElement.clientHeight ||
    screen.availHeight
  );
};

const getScrollPosition = () => {
  return (
    window.scrollY ||
    document.body.scrollTop ||
    document.documentElement.scrollTop
  );
};

const ScrollToTop = (props: IProps) => {
  const { className } = props;
  const [visible, setVisible] = useState(false);
  const [windowHeight, setWindowHeight] = useState<number>();
  const [scrollPosition, setScrollPosition] = useState<number>();

  const calculateScrollPosition = () => {
    debounce(() => {
      setScrollPosition(getScrollPosition());
    });
  };

  const calculateWindowHeight = () => {
    debounce(() => {
      setWindowHeight(getHeight());
    });
  };

  useEffect(function setEventListeners() {
    window.addEventListener("resize", calculateWindowHeight);
    window.addEventListener("scroll", calculateScrollPosition);
    return () => {
      window.removeEventListener("resize", calculateWindowHeight);
      window.removeEventListener("scroll", calculateScrollPosition);
    };
  }, []);

  // Init values
  useEffect(
    function initVars() {
      calculateWindowHeight();
      calculateScrollPosition();
      if (windowHeight && scrollPosition) {
        const breakPoint = windowHeight / 2;

        console.log("breakPoint: ", breakPoint);
        console.log("windowHeight: ", windowHeight);
        console.log("scrollPosition: ", scrollPosition);

        debounce(() => {
          if (scrollPosition >= breakPoint) {
            setVisible(true);
          }
        });
      } else {
        setVisible(false);
      }
    },
    [scrollPosition, windowHeight]
  );

  return (
    <>
      {visible && (
        <div className={classNames(className, scrollToTopStyles.root)}>
          <Button
            title="Scroll back to top"
            className={scrollToTopStyles.button}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <SVG
              title="Search"
              className={scrollToTopStyles.icon}
              src="images/backToTop.svg"
            />
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
