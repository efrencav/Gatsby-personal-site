const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ecavazos/Documents/code/Gatsby-personal-site/frontend/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ecavazos/Documents/code/Gatsby-personal-site/frontend/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/ecavazos/Documents/code/Gatsby-personal-site/frontend/src/pages/contact.js"))),
  "component---src-pages-courses-js": hot(preferDefault(require("/Users/ecavazos/Documents/code/Gatsby-personal-site/frontend/src/pages/courses.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ecavazos/Documents/code/Gatsby-personal-site/frontend/src/pages/index.js")))
}

