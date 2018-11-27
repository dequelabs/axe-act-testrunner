/* global axe, testcase, reporter */

const { rulesMap } = require('./rules-map')

// Function to be evaluated with in the page context
function evaluate() {
  return new Promise(async (resolve, reject) => {
    const axeIds = rulesMap[testcase.ruleId]
    axe.run(
      {
        reporter: async function(raw, _, cb) {
          const url = window.location.href
          const results = await reporter(raw, url)
          return results
        },
        runOnly: {
          type: 'rules',
          values: axeIds
        }
      },
      async (err, result) => {
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