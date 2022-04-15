import classNames from "classnames";
import threeColumnLayoutStyles from "styles/components/threeColumnLayout.css";
import { useId } from "@reach/auto-id";
import TableOfContents from "src/components/TableOfContents";
import Sticky from "react-stickynode";
import { navBarVars } from "styles/components/navbar.css";
import { measurement } from "styles/utils/styleUtils";
import { footerVars } from "styles/components/footer.css";
import ArchiveNav from "src/components/ArchiveNav";

interface IProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  LeftColumn?: JSX.Element;
}

function ThreeColumns(props: IProps) {
  const { className, children, LeftColumn } = props;
  const id = `article-${useId(props.id)}`;

  return (
    <div className={classNames(threeColumnLayoutStyles.root, className)}>
      <div className={classNames(threeColumnLayoutStyles.nav)}>
        {LeftColumn ? LeftColumn : <ArchiveNav />}
      </div>
      <div id={id} className={classNames(threeColumnLayoutStyles.main)}>
        {children}
      </div>
      <div className={classNames(threeColumnLayoutStyles.toc)}>
        <Sticky
          top={measurement(navBarVars.height).val}
          bottomBoundary={measurement(footerVars.height).val}
        >
          <TableOfContents articleID={id} />
        </Sticky>
      </div>
    </div>
  );
}

export default ThreeColumns;
