const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 400000,
  chromeWebSecurity: false,
  projectId: 'e53xvv',
  viewportWidth: 1440,
  viewportHeight: 900,
  video: false,
  env: {
    MY_ENV_VARIABLE: 'hello',
  },
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesPort: 59523,
  e2e: {
    defaultCommandTimeout: 5000,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
