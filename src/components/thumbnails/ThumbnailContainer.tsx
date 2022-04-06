import classNames from "classnames";
import thumbnailStyles from "../../../styles/components/thumbnails/thumbnails.css";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export function ThumbnailContainer(props: IProps) {
  const { className, children } = props;
  return <div className={classNames(thumbnailStyles.root)}>{children}</div>;
}
