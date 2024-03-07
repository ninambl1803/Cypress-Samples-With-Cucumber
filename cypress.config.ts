import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    specPattern: 'cypress/**/*.feature',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: '.cy/screenshots',
    videosFolder: '.cy/videos',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      return require('cypress/plugins/index.js')(on, config);
    },
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome, mocha-junit-reporter',
    mochawesomeReporterOptions: {
      reportDir: '.cy/reports/mochawesome',
      quiet: true,
      overwrite: false,
      html: false,
      json: true,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: '.cy/reports/junit-report.xml',
    },
  },
  experimentalWebKitSupport: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 30000,
  chromeWebSecurity: false,
  modifyObstructiveCode: false,
  scrollBehavior: 'center',
});