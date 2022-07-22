const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    watchForFileChanges: false,
    experimentalSourceRewriting: true,
    viewportWidth: 1366,
    viewportHeight: 768
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
