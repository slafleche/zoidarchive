import classNames from "classnames";

interface IProps {
  className?: string;
  resourceURL: string;
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
}

// https://w3c.github.io/scholarly-html/
export function ScholarSource(props: IProps) {
  const { className, resourceURL, title, subTitle, children } = props;

  return (
    <article
      className={classNames(className)}
      resource={resourceURL}
      typeof="schema:ScholarlyArticle"
    >
      <header>
        <h1 property="schema:name">{title}</h1>
        {subTitle && (
          <p role="doc-subtitle" property="schema:alternateName">
            {subTitle}
          </p>
        )}
        {children}
      </header>
    </article>
  );
}
