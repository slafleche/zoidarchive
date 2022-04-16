import classNames from "classnames";
import threeColumnLayoutStyles, {
  threeColumnMediaQueries,
} from "styles/components/threeColumnLayout.css";
import { useId } from "@reach/auto-id";
import TableOfContents from "src/components/TableOfContents";
import Sticky from "react-stickynode";
import { navBarVars } from "styles/components/navbar.css";
import { measurement } from "styles/utils/styleUtils";
import { footerVars } from "styles/components/footer.css";
import ArchiveNav from "src/archive/ArchiveNav";
import { useMediaQuery } from "react-responsive";

interface IProps {
  className?: string;
  id?: string;
  preNav: React.ReactNode;
  children: React.ReactNode;
  LeftColumn?: JSX.Element;
}

function ThreeColumns(props: IProps) {
  const { className, children, LeftColumn, preNav } = props;
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
        {preNav}
        {!isThreeColumns && <TableOfContents articleID={id}  />}
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
