import SVG from "react-inlinesvg";

interface IProps {
  className?: string;
  url?: string;
  icon: string;
  iconClassName?: string;
}

export function SocialLink(props: IProps) {
  const { className, url, icon, iconClassName } = props;

  return (
    <>
      {url && (
        <a href={url} target="_blank" rel="noreferrer" className={className}>
          <SVG className={iconClassName} src={icon} />
        </a>
      )}
    </>
  );
}
