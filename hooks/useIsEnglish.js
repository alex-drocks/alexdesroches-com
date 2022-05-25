import {useRouter} from "next/router";


function useIsEnglish() {
  const router = useRouter()
  const regEx = new RegExp(/\/en\//)
  const isEnglish = regEx.test(router.asPath)
  return Boolean(isEnglish)
}

export {useIsEnglish}
