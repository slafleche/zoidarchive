import classNames from "classnames";
import threeColumnLayoutStyles from "styles/components/threeColumnLayout.css";
import { useId } from "@reach/auto-id";
import TableOfContents from "src/components/TableOfContents";
import Sticky from "react-stickynode";
import { navBarVars } from "styles/components/navbar.css";
import { measurement } from "utils/styleUtils";
import { footerVars } from "styles/components/footer.css";

interface IProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  navigation: React.ReactNode;
}

function ThreeColumns(props: IProps) {
  const { className, navigation, children } = props;
  const id = `article-${useId(props.id)}`;

  return (
    <div
      className={classNames(threeColumnLayoutStyles.root, className)}
    >
      <div className={classNames(threeColumnLayoutStyles.nav)}>
        {navigation}
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
