import {useRouter} from "next/router";
import {isEnglishPath} from "../lib/getInternalPageLink";


function useIsEnglish() {
  const router = useRouter();
  return isEnglishPath(router.asPath);
}

export {useIsEnglish};
