// Active Link wrapper for Next.js 15+ Pages Router
import {useRouter} from 'next/router';
import Link from 'next/link';

const ActiveLink = ({children, activeClassName = "active-next-link", className = "", ...props}) => {
  const {asPath} = useRouter();

  const isActive = asPath === props.href || asPath === props.as;
  
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
