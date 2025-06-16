module.exports = function(eleventyConfig) {
  // This tells Eleventy to use the Nunjucks templating engine
  // for all Markdown and HTML files. This is what enables
  // the `safe` filter to work correctly.
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
