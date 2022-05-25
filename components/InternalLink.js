import React from 'react';
import ActiveLink from "./ActiveLink";
import {useIsEnglish} from "../hooks/useIsEnglish";
import Link from "next/link";
import getInternalPageLink from "../lib/getInternalPageLink";

const InternalLink = ({page = "", className = "", isActiveLink = false, withArrow, children}) => {
  const isEnglish = useIsEnglish()

  const href = getInternalPageLink[page](isEnglish);

  if (isActiveLink) {
    return (
      <ActiveLink href={href}><a className={className}>{children}</a></ActiveLink>
    )
  }

  return (
    <Link href={href}>
      <a className={className}>
        {children}{withArrow ? <>&nbsp;&rarr;</> : null}
      </a>
    </Link>
  );
};

export default InternalLink;
