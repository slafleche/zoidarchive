import classNames from "classnames";
import threeColumnLayoutStyles from "styles/components/threeColumnLayout.css";
import { useId } from "@reach/auto-id";
import TableOfContents from "src/components/TableOfContents";
import Sticky from "react-stickynode";
import { navBarVars } from "styles/components/navbar.css";
import { measurement } from "styles/utils/styleUtils";
import { footerVars } from "styles/components/footer.css";
import ArchiveNav from "src/archive/ArchiveNav";

interface IProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  LeftColumn?: JSX.Element;
}

function ThreeColumns(props: IProps) {
  const { className, children, LeftColumn } = props;
  const id = `article-${useId(props.id)}`;
  const stickyTop = measurement(navBarVars.height).val;
  // const stickyBottom = measurement(footerVars.height).val;
  const stickyBottom = `#${id}`;

  return (
    <div className={classNames(threeColumnLayoutStyles.root, className)}>
      <div className={classNames(threeColumnLayoutStyles.nav)}>
        <Sticky top={stickyTop} bottomBoundary={stickyBottom} innerZ="1">
          <div className={threeColumnLayoutStyles.stickyColumn}>
            {LeftColumn ? LeftColumn : <ArchiveNav />}
          </div>
        </Sticky>
      </div>
      <div id={id} className={classNames(threeColumnLayoutStyles.main)}>
        {children}
      </div>
      <div className={classNames(threeColumnLayoutStyles.toc)}>
        <Sticky top={stickyTop} bottomBoundary={stickyBottom}>
          <div className={threeColumnLayoutStyles.stickyColumn}>
            <TableOfContents articleID={id} />
          </div>
        </Sticky>
      </div>
    </div>
  );
}

export default ThreeColumns;
