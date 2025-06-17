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

  // Copy static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  // Add permalink configuration
  eleventyConfig.addGlobalData("permalinkRoot", "/");

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/KubeShiftDynamics/",
    dir: {
      input: ".",
      output: "../docs",
      includes: "_includes",
      layouts: "_includes",
      data: "_data"
    }
  };
};
