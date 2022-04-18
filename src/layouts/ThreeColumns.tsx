import classNames from "classnames";
import threeColumnLayoutStyles, {
  threeColumnMediaQueries,
} from "styles/components/threeColumnLayout.css";
import { useId } from "@reach/auto-id";
import TableOfContents from "src/components/TableOfContents";
import Sticky from "react-stickynode";
import { navBarVars } from "styles/components/navbar.css";
import { measurement } from "styles/utils/styleUtils";
import ArchiveNav from "src/archive/ArchiveNav";
import { useMediaQuery } from "react-responsive";
import BackSVG from "public/svgs/back.svg";
import Link from "next/link";
import utilityStyles from "styles/utilities.css";

interface IProps {
  className?: string;
  id?: string;
  title: string;
  children: React.ReactNode;
  LeftColumn?: JSX.Element;
  back?: boolean;
}

function ThreeColumns(props: IProps) {
  const { className, children, LeftColumn, title, back = false } = props;
  const id = `article-${useId(props.id || "0")}`;
  const stickyTop = measurement(navBarVars.height).val;
  const stickyBottom = `#${id}`;
  const isTwoColumns = useMediaQuery(threeColumnMediaQueries.twoColumns);
  const isOneColumn = useMediaQuery(threeColumnMediaQueries.oneColumn);
  const isThreeColumns = !isTwoColumns && !isOneColumn;

  return (
    <div className={classNames(threeColumnLayoutStyles.root, className)}>
      <div className={classNames(threeColumnLayoutStyles.nav)}>
        <Sticky top={stickyTop} bottomBoundary={stickyBottom} innerZ={1}>
          {LeftColumn ? LeftColumn : <ArchiveNav />}
        </Sticky>
      </div>
      <div id={id} className={classNames(threeColumnLayoutStyles.main)}>
        <div className={threeColumnLayoutStyles.h1Container}>
          <div className={threeColumnLayoutStyles.backLinkPosition}>
            {back && (
              <Link href="/archive" passHref>
                <a
                  className={threeColumnLayoutStyles.backLink}
                  title="Back"
                  aria-label="Back"
                >
                  <BackSVG className={threeColumnLayoutStyles.backIcon} />
                </a>
              </Link>
            )}
            <h1 className={threeColumnLayoutStyles.title}>{title}</h1>
          </div>
        </div>
        {!isThreeColumns && <TableOfContents articleID={id} />}
        {children}
      </div>
      {isThreeColumns && (
        <div className={classNames(threeColumnLayoutStyles.toc)}>
          <Sticky top={stickyTop} bottomBoundary={stickyBottom} innerZ={1}>
            <TableOfContents articleID={id} />
          </Sticky>
        </div>
      )}
    </div>
  );
}

export default ThreeColumns;
