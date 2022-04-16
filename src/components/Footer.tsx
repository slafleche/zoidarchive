import classNames from "classnames";
import footerStyles from "styles/components/footer.css";
import layoutStyles from "styles/components/layout.css";

interface IProps {
  className?: string;
}

function Footer(props: IProps) {
  const { className } = props;
  return (
    <footer className={classNames(className, footerStyles.root)}>
      <div className={layoutStyles.content}>
        <div className={footerStyles.content}>
          <span className={footerStyles.copyright}>
            &copy; {new Date().getFullYear()} - Zoid Archive
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
