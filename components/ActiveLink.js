// https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.js
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, {Children} from 'react';


const ActiveLink = ({children, activeClassName = "active-next-link", ...props}) => {
  const {asPath} = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};


export default ActiveLink;