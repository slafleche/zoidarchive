import classNames from "classnames";
import footerStyles from "styles/components/footer.css";
import { PatreonZoidArchive } from "./PatreonZoidArchive";

interface IProps {
  className?: string;
}

function Footer(props: IProps) {
  const { className } = props;
  return (
    <footer className={classNames(className, footerStyles.root)}>
      <PatreonZoidArchive className={footerStyles.patreon} />
    </footer>
  );
}

export default Footer;
