const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/pierre/opurecreation/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/404.js"))),
  "component---src-pages-a-propos-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/a-propos.js"))),
  "component---src-pages-application-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/application.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/blog.js"))),
  "component---src-pages-company-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/company.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/index.js"))),
  "component---src-pages-index-particle-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/index-particle.js"))),
  "component---src-pages-mentions-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/mentions.js"))),
  "component---src-pages-nos-realisations-web-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/nos-realisations-web.js"))),
  "component---src-pages-nos-services-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/nos-services.js"))),
  "component---src-pages-project-js": hot(preferDefault(require("/home/pierre/opurecreation/src/pages/project.js"))),
  "component---src-templates-blog-list-blog-list-js": hot(preferDefault(require("/home/pierre/opurecreation/src/templates/blog-list/blog-list.js"))),
  "component---src-templates-blog-template-blog-template-js": hot(preferDefault(require("/home/pierre/opurecreation/src/templates/blog-template/blog-template.js"))),
  "component---src-templates-project-template-project-template-js": hot(preferDefault(require("/home/pierre/opurecreation/src/templates/project-template/project-template.js")))
}

