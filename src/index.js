const testRunner = require('testrunner')
const { configuration } = require('./configuration')
const { generateReports } = require('./reporter')

// run
testRunner(configuration)
  .then(async results => {
    // generate reports
    await generateReports({
      types: ['json', 'markdown'],
      fileName: 'act-axe-result',
      outputDirectory: 'output',
      results
    })
  })
  .catch(error => {
    throw new Error(error)
  })
