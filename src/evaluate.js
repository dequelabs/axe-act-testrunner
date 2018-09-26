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
        getTestCaseStatus({
          result,
          testcase
        })
          .then(testcaseStatus => {
            const out = {
              ruleId: testcase.ruleId,
              testcaseUrl: testcase.url,
              testcaseStatus
            }
            resolve(out)
          })
          .catch(err => {
            throw new Error(
              `Log: TestRunner: Unable to fetch test case status`,
              err
            )
          })
      }
    )
  })
}

module.exports = {
  evaluate
}

/**
 * TODO:JEY
 * axe-core returns a promise, so you can chain on that:
 * return axe.run(document, context).then(getActResult)
 */
