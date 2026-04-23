// Active Link wrapper for Next.js 15+ Pages Router
import {useRouter} from 'next/router';
import Link from 'next/link';
import {normalizePath} from '../lib/getInternalPageLink';

const ActiveLink = ({children, activeClassName = "active-next-link", className = "", ...props}) => {
  const {asPath} = useRouter();
  const currentPath = normalizePath(asPath);
  const hrefPath = normalizePath(props.href);
  const alternatePath = props.as ? normalizePath(props.as) : null;

  const isActive = currentPath === hrefPath || currentPath === alternatePath;

  const finalClassName = isActive
    ? `${className} ${activeClassName}`.trim()
    : className;

  return (
    <Link {...props} className={finalClassName || undefined}>
      {children}
    </Link>
  );
};

export default ActiveLink;
