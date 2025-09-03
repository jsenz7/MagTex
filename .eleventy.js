module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static": "static" });   // images, css, js, pdfs, videos
  return {};
};