import {usePagePath} from "./usePagePath";
import {isEnglishPath} from "../lib/getInternalPageLink";


function useIsEnglish() {
  return isEnglishPath(usePagePath());
}

export {useIsEnglish};
