const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/geng/projects/geng.io/latest/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/geng/projects/geng.io/latest/src/pages/404.js"))),
  "component---src-pages-about-me-js": hot(preferDefault(require("/Users/geng/projects/geng.io/latest/src/pages/about-me.js"))),
  "component---src-pages-besides-work-js": hot(preferDefault(require("/Users/geng/projects/geng.io/latest/src/pages/besides-work.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/geng/projects/geng.io/latest/src/pages/index.js"))),
  "component---src-pages-posts-js": hot(preferDefault(require("/Users/geng/projects/geng.io/latest/src/pages/posts.js")))
}

