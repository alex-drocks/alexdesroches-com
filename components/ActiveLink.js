import Link from 'next/link';
import {usePagePath} from '../hooks/usePagePath';
import {normalizePath} from '../lib/getInternalPageLink';

const ActiveLink = ({children, activeClassName = "active-next-link", className = "", ...props}) => {
  const currentPath = normalizePath(usePagePath());
  const hrefPath = normalizePath(props.href);
  const alternatePath = props.as ? normalizePath(props.as) : null;

  const isActive = currentPath === hrefPath || currentPath === alternatePath;

  const finalClassName = isActive
    ? `${className} ${activeClassName}`.trim()
    : className;

  return (
    <Link {...props} className={finalClassName || undefined} aria-current={isActive ? "page" : undefined}>
      {children}
    </Link>
  );
};

export default ActiveLink;
