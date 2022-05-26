const pages = {
  index: (isEnglish) => isEnglish ? "/en/" : "/",
  programming: (isEnglish) => isEnglish ? "/en/programming/" : "/programmation/",
  about: (isEnglish) => isEnglish ? "/en/about/" : "/a-propos/",
  contact: (isEnglish) => isEnglish ? "/en/contact/" : "/contact/",
  resume: (isEnglish) => isEnglish ? "/en/resume/" : "/resume/",
}


export default pages
