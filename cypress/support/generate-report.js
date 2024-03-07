const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: ".cy/reports/cucumber-report.json",
  output: ".cy/reports/cucumber-report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
};

reporter.generate(options);
