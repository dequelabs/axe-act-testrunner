// const axePath = require.resolve('axe-core')
const axePath = require.resolve('axe-core')
const { createEarlReport } = require('axe-reporter-earl')
const { skipTests } = require('./skip-tests')
const { rulesMap } = require('./rules-map')
const { evaluate } = require('./evaluate')

const configuration = {
  /**
   * debug mode of testrunner is invoked when true
   */
  debug: false,

  /**
   * List of tests to be skipped by the testrunner
   */
  skipTests, // tests to skip

  /**
   * List of scripts to be injected into the testrunner(s) page instance
   */
  injectScripts: [axePath],

  /**
   * Global variables to be injected into testrunner(s) page instance
   */
  globals: {
    rulesMap,
    createEarlReport
  },

  /**
   * Function to be evaluated in testrunner(s) page instance
   */
  evaluate
}

module.exports = {
  configuration
}
