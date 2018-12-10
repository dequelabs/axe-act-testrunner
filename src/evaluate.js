/* global axe, testcase, createEarlReport */

const { rulesMap } = require('./rules-map')

// Function to be evaluated with in the page context
function evaluate() {
  return new Promise((resolve, reject) => {
    const axeIds = rulesMap[testcase.ruleId]
    axe.run(
      {
        reporter: function(raw) {
          return createEarlReport(raw, window.location.href)
        },
        runOnly: {
          type: 'rules',
          values: axeIds
        }
      },
      (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      }
    )
  })
}

module.exports = {
  evaluate
}
