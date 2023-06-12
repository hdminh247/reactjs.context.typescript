export default function PageWrapper(props: Props) {
  return <div className={`page-wrapper ${props.className}`}>{props.children}</div>;
}

interface Props {
  children: JSX.Element;
  className?: string;
}
