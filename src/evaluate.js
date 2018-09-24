/* global testcase, getTestCaseStatus */
const axe = require('axe-core')
const { rulesMap } = require('./rules-map')

// Function to be evaluated with in the page context
function evaluate() {
  return new Promise((resolve, reject) => {
    // const fixture = document.querySelector(testcase.selector)
    const axeIds = rulesMap[testcase.ruleId]
    axe.run(
      document,
      {
        runOnly: {
          type: 'rules',
          values: axeIds
        }
      },
      (err, result) => {
        if (err) {
          reject(err)
        }
        const out = {
          ruleId: testcase.ruleId,
          testcaseUrl: testcase.url,
          testcaseStatus: getTestCaseStatus({
            result,
            testcase
          })
        }
        resolve(out)
      }
    )
  })
}

module.exports = {
  evaluate
}
