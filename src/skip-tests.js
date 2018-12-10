/**
 * List of rules to skip testing via the test runner
 *
 * Allows to skip in two modes:
 * 1) ruleIds: skips entire Auto-WCAG rule, and the test cases under it.
 * 2) testCases: specific test cases under a Auto-WCAG rule.
 */
const skipTests = {
  ruleIds: [
    /**
     * Skipping because of below error
     * => Error: Execution context was destroyed, most likely because of a navigation.
     */
    'SC2-2-1+SC3-2-5-meta-refresh' // axe-core rule -> ['meta-refresh']
  ],
  testCases: [
    'SC2-4-2-page-has-title_inapplicable_example_1.html', // svg document cannot be tested for title
    'SC2-4-4-link-has-name_failed_example_8.html', // issue - https://github.com/auto-wcag/auto-wcag/issues/267
    'SC3-1-1-html-has-lang_inapplicable_example_1.html', // svg document cannot be tested for title
    'SC4-1-2-button-has-name_failed_example_2.html' // issue - https://github.com/auto-wcag/auto-wcag/issues/264
  ],
  fileExtensions: ['svg']
}

// export
module.exports = {
  skipTests
}
