const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const turndownService = new require("turndown")();


function sanitizeMakrdown(markdown) {
  const html = marked.parse(markdown);
  const sanitizeHtmltext = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
  });
  return turndownService.turndown(sanitizeHtmltext);
}

module.exports = sanitizeMakrdown;