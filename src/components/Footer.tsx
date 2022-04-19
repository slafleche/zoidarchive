import classNames from "classnames";
import Link from "next/link";
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
          <span className={footerStyles.link}>
            <Link href="/content-integrity">Content Integrity</Link>
          </span>
          <span className={footerStyles.link}>
            <Link href="/accessibility">Accessibility</Link>
          </span>
          <span className={footerStyles.link}>
            <Link href="/experts">Experts</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
