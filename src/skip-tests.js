/**
 * List of rules to skip testing via the test runner
 *
 * Allows to skip in two modes:
 * 1) ruleIds: skips entire Auto-WCAG rule, and the test cases under it.
 * 2) testCases: specific test cases under a Auto-WCAG rule.
 * 3) fileExtensions: skip files with these extensions
 */
const skipTests = {
  ruleIds: [
    'bc659a' // meta-refresh ->  https://act-rules.github.io/rules/bc659a
  ],
  testCases: [],
  fileExtensions: ['svg']
}

// export
module.exports = {
  skipTests
}
