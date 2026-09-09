import ActiveLink from "./ActiveLink";
import {useIsEnglish} from "../hooks/useIsEnglish";
import Link from "next/link";
import getInternalPageLink from "../lib/getInternalPageLink";

const InternalLink = ({page, className = "", isActiveLink = false, withArrow, children, ...props}) => {
  const isEnglish = useIsEnglish();
  const href = getInternalPageLink(page, isEnglish);
  const LinkComponent = isActiveLink ? ActiveLink : Link;

  return (
    <LinkComponent {...props} href={href} className={className}>
      {children}{withArrow ? <>&nbsp;&rarr;</> : null}
    </LinkComponent>
  );
};

export default InternalLink;
