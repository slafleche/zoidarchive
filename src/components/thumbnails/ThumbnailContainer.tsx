import classNames from "classnames";
import layoutStyles from "styles/components/layout.css";
import thumbnailStyles from "styles/components/thumbnails.css";

interface IProps {
  className?: string;
  titleClass?: string;
  children: React.ReactNode;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
}

export function ThumbnailContainer(props: IProps) {
  const { className, children, headingLevel = 2, titleClass = "" } = props;
  const H = `h${headingLevel}` as "h1";

  return (
    <section className={classNames(thumbnailStyles.root, className)}>
      <H className={classNames(thumbnailStyles.sectionTitle, titleClass)}>
        Explore Content
      </H>
      <div
        role="list"
        className={classNames(
          thumbnailStyles.thumbnails,
          layoutStyles.fullWidth
        )}
      >
        {children}
      </div>
    </section>
  );
}
