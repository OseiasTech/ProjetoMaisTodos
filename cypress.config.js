const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 990,
  viewportWidth: 1330,

  e2e: {
    baseUrl: "https://demoqa.com",
    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
    },
    specPattern: 'cypress/e2e',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    
  },
});
