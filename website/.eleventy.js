const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  // Custom Markdown library with anchor support, but no visible # permalink
  const options = {
    html: true,
    breaks: true,
    linkify: true
  };
  const anchorOpts = {
    permalink: false, // Disable visible #
    slugify: s =>
      s
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-")
  };
  const mdLib = markdownIt(options).use(markdownItAnchor, anchorOpts);
  eleventyConfig.setLibrary("md", mdLib);

  // This tells Eleventy to use the Nunjucks templating engine
  // for all Markdown and HTML files. This is what enables
  // the `safe` filter to work correctly.
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: ".",
      output: "../docs",
      includes: "_includes"
    }
  };
};
