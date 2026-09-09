import {useSyncExternalStore} from "react";
import {useRouter} from "next/router";

// useRouter already subscribes to navigation changes.
const subscribe = () => () => {};

export function usePagePath() {
  const {asPath, pathname} = useRouter();

  // Use the exported route during hydration, including the shared 404 page.
  return useSyncExternalStore(subscribe, () => asPath, () => pathname);
}
