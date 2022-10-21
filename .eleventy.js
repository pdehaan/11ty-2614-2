const { inspect } = require("node:util");

/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(eleventyConfig: EleventyConfig) => EleventyReturnValue}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("inspect", (value) => inspect(value, { depth: 5, sorted: true }));

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
