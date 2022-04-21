import NextLink from "next/link";

interface IProps {
  href: string;
  children: React.ReactNode;
}

const Link = (props: IProps) => {
  const { href, children } = props;

  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return <NextLink href={href}>{children}</NextLink>;
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
};

export default Link;
