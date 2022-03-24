interface IProps {
  check: boolean;
  element?: string;
  elementProps?: any;
  children: React.ReactNode;
}

export function OptionalWrap(props: IProps) {
  const { check, element, children, elementProps } = props;
  const Tag = `${element || "div"}` as "div";
  if (check) {
    return <Tag {...elementProps}>{children}</Tag>;
  } else {
    return <>{children}</>;
  }
}
